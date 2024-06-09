const express = require('express');
const path = require('path');
const app = express();

// Configurar la carpeta 'public' como la carpeta estática
app.use(express.static(path.join(__dirname, '../public')));


// Página de Inicio
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Feel the Fire, tienda de ropa</title>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <div id="feelcab"><img src="/images/firelogo.png" alt="Feel the Fire Logo"><h1>Feel the Fire, tienda de ropa</h1></div>
            <a href="/todos">Ir a todos</a>
            <br>
            <a href="/camisetas">Camisetas</a>
            <br>
            <a href="/pantalones">Pantalones</a>
            <br>
            <a href="/zapatos">Zapatos</a>
            <br>
            <a href="/accesorios">Accesorios</a>
        </body>
        </html>
    `);
});

// Página todos
app.get('/todos', (req, res) =>{
    res.send('<h3>Toda tu ropa a el mejor precio</h3><a href="/">Inicio</a>');
});

// Camisetas
app.get('/camisetas', (req, res) => {
    res.send('<h1>Disfrutas de las camisetas de tus bandas favoritas. LEST ROCK!</h1>')
})

app.use((req, res) => {
    res.status(404).send('<img src="/images/error404.jpg" alt="Error 404"><br><a href="/">Volver al Inicio</a>');
});

app.listen(3000, () => {
    console.log('Feel the Fire its in the house');
});


//rutas 

