const express = require('express')
const path = require('path')//Trabajar con rutas
const hbs = require('hbs')//Incorporar motor de plantillas

const app = express()

const port = 8383

//Servidor de contenido estático
app.use(express.static('public'))

//Ingeniería de las vistas: hbs
//Asignar la ubicación de los archivos hbs
app.set('views', path.join(__dirname+'/public/views'))
app.set('view engine', 'hbs')

//Configuración del directorio que guardará los archivos partials hbs
hbs.registerPartials(__dirname + '/public/views/partials');

app.get('/', (req, res) => {
    res.render('index', {
        "nombre":"Diego López",
        "email":"dilopezz@sena.edu.co"
    })//Redireccionar hacia el archivo de hbs
})

app.get('/productos', (req, res) => {
    res.render('productos')//Redireccionar hacia el archivo de hbs
})

app.get('/contacto', (req, res) => {
    res.render('contacto')//Redireccionar hacia el archivo de hbs
})

app.get('*', (req, res) => {
    //res.sendFile(__dirname+'/public/views/404.hbs')
    res.render('404')//Redireccionar hacia el archivo de blade
})

app.listen(port, () => {
    console.log(`Listen to port: ${port}`)
})
