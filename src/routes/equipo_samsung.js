const express = require('express');

const {samsung} = require('../date/equipos').InfoEquipos;
const {body, validationResult} = require('express-validator');

const router_samsung = express.Router();

router_samsung.use(express.json());

//Mostrar Equipos ()
router_samsung.get('/', (req,res)=>{
    res.json(samsung);
})

//mostrar detalle (dado su id)
router_samsung.get('/:id', (req,res)=>{
    const id = req.params.id;
    const resultadoid = samsung.find(equipo => equipo.id == id)

    res.json(resultadoid);
})
//agregar equipo 
router_samsung.post('/', 
        body('id')
            .exists()
            .isNumeric(),
        body('nombre')
            .exists()
            .not(),
        body('Descripcion')
            .exists()
            .not(),
        body('Serial')
            .exists()
            .isNumeric(),
        body('fecha_encend')
            .exists()
            .not(),
        body('ultim_enced')
            .exists()
            .not(),
        body('ultim_mant')
            .exists()
            .not(),
        body('ID_trabajo')
            .exists()
            .isNumeric(),
        (req, res)=>{
            const errors = validationResult(req);
                if(!errors.isEmpty()){
                    return res.status(400).json({errors: errors.array()});
                }   
                let newequip = req.body;
                samsung.push(newequip);
                res.json(samsung)
    }
);

//editar equipo(dado por su id)

router_samsung.put('/:id', (req, res)=>{
    const equipoactualizado = req.body;
    const id = req.params.id;

    const index = samsung.findIndex(equipo => equipo.id == id);

    if(index >= 0){
        samsung[index] = equipoactualizado;
    }
    res.json(samsung)
})

//borrar equipo (dado por su id)

router_samsung.delete('/:id', (req,res)=>{
    const id = req.params.id;
    const index = samsung.findIndex(equipo => equipo.id == id);

    if(index >= 0){
        samsung.splice(index, 1);
    }
    res.json(samsung);
})

module.exports = router_samsung;