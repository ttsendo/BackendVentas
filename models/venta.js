const {Schema, model } = require('mongoose')


const VentaSchema = ({

    id:{
        type: String,
        required: true,
        default: () => nanoid(7),
        index: { unique: true },
        
    },

    nombre:{
        type: String,
        required:[true, 'El nombre de usuario es requerido']
    },

    apellido:{
        type: String,
        required:[true, 'El apellido es requerido']
    },

    producto:{
        type: String,
        required:[true, 'El  es Producto requirido']
    },

    precio_dolar:{
        type: Number,
        required:[true, 'El precio es requirido']
    },
})


module.exports = model('Venta', VentaSchema)