const express = require('express');
const cors = require('cors');  // Importez le module cors
const app = express();
const port = "5000"

// Middleware pour gérer les données JSON
app.use(express.json());

// Utilisez le middleware cors pour gérer les CORS
app.use(cors());

// Import du routeur
const router = require('./routers/router');

// Utilisation du routeur pour les routes de l'API
app.use('/api', router);

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
