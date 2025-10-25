const express = require("express");
const app = express();
const PORT = 3001; // Puerto de escucha
 
app.use(express.json());
 
let cards = [
    {id: 1, nombre: "Gengar", tipo: "fantasma", nivel: "5", cuidad: "Bogota", img: "https://www.nicepng.com/png/detail/158-1582176_gengar-shiny-gengar-and-normal-gengar.png" },
    {id: 2, nombre: "Gastly", tipo: "fantasma", nivel: "5", cuidad: "Cali", img: "https://www.kindpng.com/picc/m/180-1805752_gastly-pixel-png-transparent-png.png" },
    {id: 3, nombre: "Charmander", tipo: "Fuego", nivel: "4", cuidad: "Soledad", img: "https://www.nicepng.com/png/full/26-269926_charmander-charmander-pixel-art.png" },
    {id: 4, nombre: "Squirtle", tipo: "Agua", nivel: "3", cuidad: "Santa Marta", img: "https://www.pngall.com/wp-content/uploads/15/Squirtle-PNG-Image-File.png" },
    {id: 5, nombre: "Pikachu", tipo: "Rayo", nivel: "5", cuidad: "Barranquilla", img: "https://clipart-library.com/images_k/pokemon-gif-transparent/pokemon-gif-transparent-3.jpg", },
]

let nivel = [
    {id: 1, nivel: "1"},
    {id: 2, nivel: "2"},
    {id: 3, nivel: "3"},
    {id: 4, nivel: "4"},
    {id: 5, nivel: "5"}
]

let tipo = [
    {id: 1, tipo: "Aire"},
    {id: 2, tipo: "Tierra"},
    {id: 3, tipo: "Fuego"},
    {id: 4, tipo: "Agua"},
    {id: 5, tipo: "Rayo"}
]

let ciudad = [
    {id: 1, ciudad: "Bogota"},
    {id: 2, ciudad: "Cali"},
    {id: 3, ciudad: "Soledad"},
    {id: 4, ciudad: "Santa Marta"},
    {id: 5, ciudad: "Barranquilla"}
]

let img = [
    {id: 1, img: "https://www.nicepng.com/png/detail/158-1582176_gengar-shiny-gengar-and-normal-gengar.png"},
    {id: 2, img: "https://www.kindpng.com/picc/m/180-1805752_gastly-pixel-png-transparent-png.png"},
    {id: 3, img: "https://www.nicepng.com/png/full/26-269926_charmander-charmander-pixel-art.png"},
    {id: 4, img: "https://www.pngall.com/wp-content/uploads/15/Squirtle-PNG-Image-File.png"},
    {id: 5, img: "https://clipart-library.com/images_k/pokemon-gif-transparent/pokemon-gif-transparent-3.jpg"},
]
 
app.listen(PORT, () => {
    console.log(`Servidor CARDS & CARDS corriendo en http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('________Sistema de compañía Cards & Cards________');
});
 
// Mostrar cards
app.get("/cards", (req, res) => {
    return res.json(cards);
})

// Mostrar tipos
app.get('/tipos', (req, res) => {
    res.json(tipo);
});

// Mostrar niveles
app.get('/nivel', (req, res) => {
    res.json(nivel);
});

// Mostrar cuidades
app.get('/ciudad', (req, res) => {
    res.json(ciudad);
});

//  Agregar cards
app.post("/cards", (req, res) => {
    let cardsN = {
        id: cards.length + 1,
        nombre: req.body.nombre,
        tipo: req.body.tipo,
        nivel: parseInt(req.body.nivel),
        ciudad: req.body.cuidad,
        img: req.body.img,
    };
    if (!cardsN.nombre){
        return res.status(400).send('Debe agregar el nombre para la tarjeta');
    } 
    // se agrega el tipo en caso de que no exista
    if (!(tipo.includes(cardsN.tipo))){
        let tipoN = {
        id: tipo.length + 1,
        tipo: req.body.tipo
        }
        tipo.push(tipoN)
    } 
    //se agrega el nivel en caso de que no exista
    if (!(nivel.includes(cardsN.nivel))){
        let nivelN = {
        id: nivel.length + 1,
        nivel: req.body.nivel
        }
        nivel.push(nivelN)
    } 
    //se agrega la ciudad en caso de que no exista
    if (!(ciudad.includes(cardsN.ciudad))) {
        let ciudadN = {
        id: ciudad.length + 1,
        ciudad: req.body.ciudad
        }
        ciudad.push(ciudadN)
    }
    if (!cardsN.img) {
        return res.status(400).send('Debe agregar una imagen para la tarjeta');
    } 
    cards.push(cardsN)
    return res.status(200).json(cards);
})

// Agregar tipo
app.post('/tipo', (req, res) => {
    let tipoN = {
        id: tipo.length + 1,
        tipo: req.body.tipo
    }
    tipo.push(tipoN)
    res.status(201).json({ message: 'Se agregó el tipo nuevo', tipo});
});

// Agregar nivel
app.post('/nivel', (req, res) => {
    let nivelN = {
        id: nivel.length + 1,
        nivel: req.body.nivel
    }
    nivel.push(nivelN)
    res.status(201).json({ message: 'Se agregó el nivel nuevo', nivel});
});

// Agregar ciudad
app.post('/ciudad', (req, res) => {
    let ciudadN = {
        id: ciudad.length + 1,
        ciudad: req.body.ciudad
    }
    ciudad.push(ciudadN)
    res.status(201).json({ message: 'Se agregó el nivel nuevo', ciudad});
});
