const express = require('express');
const router = express.Router();
const db = require('../db');

// GET - Listar todos os usuários
router.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(results);
  });
});

// POST - Criar novo usuário
router.post('/', (req, res) => {
  const { name, email } = req.body;
  db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, name, email });
  });
});

// PUT - Atualizar usuário
router.put('/:id', (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;
  db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) return res.status(404).send('Usuário não encontrado');
    res.status(200).send('Usuário atualizado com sucesso');
  });
});

// DELETE - Remover usuário
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM users WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.affectedRows === 0) return res.status(404).send('Usuário não encontrado');
    res.status(200).send('Usuário excluído com sucesso');
  });
});

// ✅ POST - Login (vulnerável a SQL Injection)
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;

  db.query(query, (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length > 0) {
      res.status(200).json({ message: 'Login bem-sucedido', user: results[0] });
    } else {
      res.status(401).json({ message: 'Credenciais inválidas' });
    }
  });
});

module.exports = router;
