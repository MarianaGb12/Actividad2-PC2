const express = require('express');
const path = require('path');
const app = express();
const port = 8001;

// Servir archivos estáticos desde el directorio "public"
app.use(express.static('FormatSwapper'));

// Ruta principal que sirve el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'FormatSwapper', 'index.html'));
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
