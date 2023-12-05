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
        required:[true, 'El correo es requirido']
    },

    precio:{
        type: String,
        required:[true, 'El telefono es requirido']
    },
})


module.exports = model('Venta', VentaSchema)