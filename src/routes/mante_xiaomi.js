const express = require('express');

const {xiaomi} = require('../date/mantenimiento').estado;

const routerX = express.Router();

routerX.use(express.json());

routerX.get('/', (req, res) =>{
    res.send(JSON.stringify(xiaomi));
})

routerX.get('/:descripcion', (req, res)=>{
    const descripcion = req.params.descripcion;
    const resultados = xiaomi.filter(equipos => equipos.descripcion === descripcion);

    if(resultados.length === 0){
        return res.status(404).send('la descripción que solicitaste no se encuentra en la base de datos')
    }
    res.send(JSON.stringify(resultados))

})

//agregar y editar fecha ultimo trabajo;
routerX.post('/', (req, res)=>{
    let newjob = req.body;
    xiaomi.push(newjob);
    res.json(xiaomi);
})

//editar trabajo (Lo hare en base a su id)

routerX.put('/:id', (req, res)=>{
    const equipoactua = req.body;
    const id = req.params.id;

    const index = xiaomi.findIndex(equipo => equipo.id == id);

    if(index >= 0){
        xiaomi[index] = equipoactua;
    }
    res.json(xiaomi);
})

routerX.delete('/:id', (req, res)=>{
    const id = req.params.id;
    const index = xiaomi.findIndex(equipo => equipo.id == id);

    if(index >= 0){
        xiaomi.splice(index, 1);
    }
    res.json(xiaomi);
})

module.exports = routerX;