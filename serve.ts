import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '723616Ll#',
    database: 'studiovip2',
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Define o tipo esperado para o resultado da consulta
interface User {
  id: number;
  username: string;
  password: string;
  profile_picture: string;
  name: string;
}

// Endpoint para login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Usuário e senha são obrigatórios' });
  }

  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results: mysql.RowDataPacket[]) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao consultar o banco de dados' });
    }

    // Cast o resultado para o tipo User[]
    const users: User[] = results as User[];

    if (users.length === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    const user = users[0];

    // Verifique a senha diretamente para simplicidade
    if (user.password === password) {
      res.json({ message: 'Login bem-sucedido', user });
    } else {
      res.status(401).json({ error: 'Senha incorreta' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});