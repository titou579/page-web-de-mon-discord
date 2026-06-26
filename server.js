const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Sert les fichiers statiques (comme le CSS ou des images si tu en ajoutes plus tard)
app.use(express.static(path.join(__dirname, 'public')));

// Route principale qui envoie la page d'accueil
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Le serveur tourne sur le port ${PORT}`);
});
