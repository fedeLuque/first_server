const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/', (req, res) => res.sendFile (path.join(__dirname, 'index.html')))

app.get('/productos.html', (req, res) => res.sendFile (path.join(__dirname, 'productos.html')))

app.get('/css/lib/bootstrap.min.css', (req, res) => res.sendFile (path.join(__dirname, 'css/lib/bootstrap.min.css')))

app.get('/css/styles.css', (req, res) => res.sendFile (path.join(__dirname, 'css/styles.css')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))