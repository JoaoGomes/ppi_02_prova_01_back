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

app.listen(3000, () => {
  console.log("Serviço de autenticação iniciado na porta 3000");
});

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
    );

    res.json({
      accessToken,
    });
  } else {
    res.send("Nome de usuário ou senha incorretos");
  }
});
