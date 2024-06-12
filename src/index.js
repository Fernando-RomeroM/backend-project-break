const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');

const port = process.env.PORT || 3000; // Usar la variable de entorno PORT si está definida ¿?

// Cargar variables de entorno desde el archivo .env
dotenv.config();

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
            <div id="feelcab">
                <div id="feelcab1">
                    <img src="/images/firelogo.png" id="imglogo" alt="Feel the Fire Logo"><h1>Feel the Fire</h1> <input type="text" id="busca" placeholder="Buscador" required>
                </div>
                <div id="menuser1">
                    <svg xmlns="http://www.w3.org/2000/svg" height="90" width="25" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffc547" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                    <p>Login</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="90" width="30" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffb83d" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="90" width="30" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffb83d" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                </div>
            </div>
            <div id="sections">
                <p><a href="/todos">Ir a todos</a></p>
                <p><a href="/camisetas">Camisetas</a></p>
                <p><a href="/pantalones">Pantalones</a></p>
                <p><a href="/zapatos">Zapatos</a></p>
                <p><a href="/accesorios">Accesorios</a></p>
            </div>
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
    res.send('<h1>Disfrutas de las camisetas de tus bandas favoritas. LEST ROCK!</h1><br><a href="/">Volver al Inicio</a>')
})

// Pantalones
app.get('/pantalones', (req, res) => {
    res.send('<h1>El hombre honorable es el que se viste por los pantalones</h1><br><a href="/">Volver al Inicio</a>')
})

// Zapatos
app.get('/zapatos', (req, res) =>{
    res.send('<h1>Intenta ponerte en mis zapatos</h1><br><a href="/">Volver al Inicio</a>')
})

// Accesorios
app.get('/accesorios', (req, res) =>{
    res.send('<h1>Los accesorios son esenciales</h1><br><a href="/">Volver al Inicio</a>')
})

//Error 404
app.use((req, res) => {
    res.status(404).send('<img src="/images/error404.jpg" alt="Error 404"><br><a href="/">Volver al Inicio</a>');
});

app.listen(3000, () => {
    console.log('Feel the Fire its in the house');
});


//rutas 

