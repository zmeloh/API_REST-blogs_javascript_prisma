const express = require('express');
const app = express();
const port = 5050

// Middleware pour traiter les données JSON
app.use(express.json());

// Import du routeur
const router = require('./routers/router');

// Utilisation du routeur pour les routes de l'API
app.use('/api', router);

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
