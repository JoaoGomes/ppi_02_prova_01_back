// Arquivo de autenticação para prova 01 de PPI 02
// Acesso ao MongoDB - Usuário: Admin; Senha: santa-clara
// mongodb+srv://Admin:santa-clara@back-end-santa-clara.rmw9y.mongodb.net/Back-end-Santa-Clara?retryWrites=true&w=majority

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const accessTokenSecret = "tokensecret";

// Array de Usuários temporário
// Vamos gravar no banco de dados posteriormente
const users = [
  {
    username: "john",
    password: "password123admin",
    role: "admin",
  },
  {
    username: "anna",
    password: "password123member",
    role: "member",
  },
];

// Array de Cursos temporário
// Vamos gravar no banco de dados posteriormente
const courses = [
  {
    name: "Análise e Desenvolvimento de Sistemas",
    description: "Curso superior de ADS",
    type: "Superior",
    year: 2010,
  },
  {
    name: "Técnico em Informática para Internet",
    description: "Curso técnico de informática",
    type: "Técnico",
    year: 2014,
  },
  {
    name: "Bacharelado em Agronomia",
    description: "Curso de Agronomia",
    type: "Superior",
    year: 2016,
  },
];

// Função para Middleware para autenticação
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    // eslint-disable-next-line consistent-return
    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

app.listen(3000, () => {
  console.log("Serviço de autenticação iniciado na porta 3000");
});

// Endereço da rota é /courses
app.get("/courses", authenticateJWT, (req, res) => {
  res.json(courses);
});

// Endereço da rota é /login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    // eslint-disable-next-line comma-dangle
    (u) => u.username === username && u.password === password
  );
  if (user) {
    // Gera um token de acesso
    const accessToken = jwt.sign(
      { username: user.username, role: user.role },
      // eslint-disable-next-line prettier/prettier
      accessTokenSecret,
      // eslint-disable-next-line prettier/prettier
      { expiresIn: "2m" },
    );

    res.json({
      accessToken,
    });
  } else {
    res.send("Nome de usuário ou senha incorretos");
  }
});
