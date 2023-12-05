const {response} = require('express')

const Venta = require('../models/venta')

const getVenta = async(req, res) => {

    const ventas = await Venta.find(); //Obtener todos los documentos de una colección
    res.json({
        msg: ventas
    })
}

const postVenta = async(req, res) => {
    const datos = req.body //Capturar datos de la url-postman
    let mensaje = 'Inserción exitosa'
    try {
        const venta = new Venta(datos)
        console.log(venta) //Instanciar el objeto
        await venta.save() //Guardar en la base de dato
        console.log(venta)
    } catch (error) {
        mensaje = error
        console.log(error)
    }
    res.json({                                     
        msg: mensaje
    })
}

const putVenta = async(req, res) => {
    const {_id, id, nombre, apellido, producto, precio} = req.body //Desesctructurar
    console.log(req.body)
    let mensaje = ''
    try {
        const venta = await Venta.findOneAndUpdate({_id: _id},
        {id: id, nombre: nombre, apellido:apellido, producto:producto, precio:precio})
        mensaje = 'Actualización exitosa'
    } catch (error) {
        mensaje = error
    }   
    res.json({
        msg:mensaje
    })
}

const deleteVenta = async(req, res) => {
    const {id} = req.query //Desesctructurar
    let mensaje = ''
    try {
        const venta = await Venta.findOneAndDelete({id: id})
        mensaje = 'Eliminación exitosa'
    } catch (error) {
        mensaje = error
    }   
    res.json({
        msg:mensaje
    })
}


module.exports = {
    getVenta,
    postVenta,
    putVenta,
    deleteVenta
}