const express = require('express');

const {xiaomi} = require('../date/equipos').InfoEquipos;
const {body, validationResult} = require('express-validator');
const router_xiaomi = express.Router();

router_xiaomi.use(express.json());

//Mostrar Equipos (SOLO XIAOMI)
router_xiaomi.get('/', (req,res)=>{
    res.json(xiaomi);
})
//mostrar detalle (dado su id)
router_xiaomi.get('/:id', (req,res)=>{
    const id = req.params.id;
    const resultadoid = xiaomi.find(equipo => equipo.id == id)
    
    res.json(resultadoid);
})
//agregar equipo 
router_xiaomi.post('/', 
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
                xiaomi.push(newequip);
                res.json(xiaomi)
    }
);

//editar equipo(dado ,por su id)

router_xiaomi.put('/:id', (req, res)=>{
                const equipoactualizado = req.body;
                const id = req.params.id;

                const index = xiaomi.findIndex(equipo => equipo.id == id);

                    if(index >= 0){
                        xiaomi[index] = equipoactualizado;
                    }
                res.json(xiaomi)
})

//borrar equipo (dado por su id)

router_xiaomi.delete('/:id', (req,res)=>{
    
    const id = req.params.id;
    const index = xiaomi.findIndex(equipo => equipo.id == id);

    if(index >= 0){
        xiaomi.splice(index, 1);
    }
    res.json(xiaomi);
})

module.exports = router_xiaomi;