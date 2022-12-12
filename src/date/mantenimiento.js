var estado = {
    'xiaomi':   [
        {
            id:1,
            Fecha_Planif: '05-06-2022',
            Fecha_Inicio:'07-06-2022',
            Finalizacion_M:'10-06-2022',
            descripcion:'completado',
            Observacion_Tec:'Pin de carga reparado exitosamente'
        },
        {
            id:2,
            Fecha_Planif:'01-07-2022',
            Fecha_Inicio:'09-07-2022',
            Finalizacion_M:'15-07-2022',
            descripcion:'fallido',
            Observacion_Tec:'No se logro cambiar la pantalla del dispositivo'
        },
        {
            id:3,
            Fecha_Planif:'20-07-2022',
            Fecha_Inicio:'22-07-2022',
            Finalizacion_M:'30-07-2022',
            descripcion:'completado',
            Observacion_Tec:'Botón de encendido arreglado exitosamente'
        }
    ],
    'samsung':  [
        {
            id:1,
            Fecha_Planif:'15-09-2022',
            Fecha_Inicio:'15-09-2022',
            Finalizacion_M:'29-09-2022',
            descripcion:'fallido',
            Observacion_Tec:'No se logro cambiar la bateria del dispositivo'
        },
        {
            id:2,
            Fecha_Planif:'12-04-2022',
            Fecha_Inicio:'18-04-2022',
            Finalizacion_M:'26-04-2022',
            descripcion:'fallido',
            Observacion_Tec:'No se logro arreglar el tactil del dispositivo'
        },
        {
            id:3,
            Fecha_Planif:'05-12-2021',
            Fecha_Inicio:'06-12-2021',
            Finalizacion_M:'01-12-2021',
            descripcion:'completado',
            Observacion_Tec:'Problema de Dual Sim arreglado exitosamente'
        }
    ]
}


module.exports.estado = estado;