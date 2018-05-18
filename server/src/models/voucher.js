'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    codigo: {
        required: true,
        type: String,
        trim: true,
        unique: true
    },
    campanha: {
        required: true,
        type: String
    },
    inicio: {
        required: false,
        type: Date,
        default: new Date()
    },
    fim: {
        required: false,
        type: Date,
        default: new Date()
    },
    max: {
        required: true,
        type: Number,
        default: 0
    },
    qtdUtilizada: {
        required: false,
        type: Number,
        default: 0
    },
    valor: {
        required: true,
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Voucher', schema);
