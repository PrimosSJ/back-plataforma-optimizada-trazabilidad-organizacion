import mongoose from "mongoose";

const objetoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now,
    }
});

export default mongoose.model('Objeto', objetoSchema);