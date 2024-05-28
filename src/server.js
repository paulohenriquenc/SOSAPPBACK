const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());


const dbURI = 'mongodb+srv://contatopaulohn:<68ISfW6CRHqdgLfw>@sosrecife.3lr2kni.mongodb.net/?retryWrites=true&w=majority&appName=SOSRecife';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.log('Erro ao conectar ao MongoDB:', err));


const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});


const User = mongoose.model('User', userSchema);

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });
  newUser.save()
    .then(user => res.json(user))
    .catch(err => res.status(400).json({ error: err.message }));
});


app.get('/users', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json({ error: err.message }));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
