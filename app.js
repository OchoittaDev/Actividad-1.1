const express = require('express');
const app = express();
const P = process.env.PORT || 5000;

const {InfoEquipos} = require('./src/date/equipos');
const  {estado} = require('./src/date/mantenimiento');

//Routers

const router_xiaomi = require('./src/routes/equipo_xiaomi')
app.use('/api/equipos/xiaomi', router_xiaomi);

const router_samsung = require('./src/routes/equipo_samsung');
app.use('/api/equipos/samsung', router_samsung);

const routerX = require('./src/routes/mante_xiaomi');
app.use('/api/mantenimiento/xiaomi', routerX);

const routerS = require('./src/routes/mante_samsung');
app.use('/api/mantenimiento/samsung', routerS);

app.get('/', (req, res) =>{
    res.send('Servidor de Express Iniciado')

})

app.get('/api/mantenimiento', (req, res)=>{
    res.json(estado);
})

app.get('/api/equipos', (req,res)=>{
    res.send(JSON.stringify(InfoEquipos));
})

////

app.listen(P, () =>{
    console.log(`El servidor se ha iniciado correctamente en el puerto ${P}`);
})
