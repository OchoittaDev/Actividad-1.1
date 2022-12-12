const express = require('express');

const {samsung} = require('../date/mantenimiento').estado;

const routerS = express.Router();

routerS.use(express.json());

routerS.get('/', (req, res) =>{
    res.send(JSON.stringify(samsung));
})

//listar trabajo mostrando de tipo preventido(fallido), o correctivo(completado)
routerS.get('/:descripcion', (req, res)=>{
    const descripcion = req.params.descripcion;
    const resultados = samsung.filter(equipos => equipos.descripcion === descripcion);

    if(resultados.length === 0){
        return res.status(404).send('la descripción que solicitaste no se encuentra en la base de datos');
    }
    res.send(JSON.stringify(resultados))

})
//agregar y editar fecha ultimo trabajo;
routerS.post('/', (req, res)=>{
    let newjob = req.body;
    samsung.push(newjob);
    res.json(samsung);
})

//editar trabajo (Se realizara en base a su id)

routerS.put('/:id', (req, res)=>{
    const equipoactua = req.body;
    const id = req.params.id;

    const index = samsung.findIndex(equipo => equipo.id == id);

    if(index >= 0){
        samsung[index] = equipoactua;
    }
    res.json(samsung);
})

routerS.delete('/:id', (req, res)=>{
    const id = req.params.id;
    const index = samsung.findIndex(equipo => equipo.id == id);

    if(index >= 0){
        samsung.splice(index, 1);
    }
    res.json(samsung);
})

module.exports = routerS