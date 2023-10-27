//Importación de un paquete
const express  = require('express')

//Especificar el método del paquete a emplear
const app = express(); 

//Especificar el puerto
const port = 8282

app.get('/', (req, res) => {
    //res.write('Método Get')
    //res.end()
    res.sendFile(__dirname+'/public/home.html')
})

app.get('/productos', (req, res) => {
    //res.write('Método Get')
    //res.end()
    res.sendFile(__dirname+'/public/productos.html')
})


/*
Agregar productos, clientes y contacto
*/

/*Crear un proyecto en node que incluya el
diseño de su login, el ménú y los formularios
de su proyecto
*/

//Desplegar el 404: Página no encontrada.
app.get('*', (req, res) => {
    //res.write('Página no encontrada')
    //res.end()
    res.sendFile(__dirname+'/public/404.html')
})

//Especificar el puerto a emplear
app.listen(port, ()=>{
    console.log(`Escuchando por el puerto ${port}`)
})