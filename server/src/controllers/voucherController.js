'use strict'

const Voucher = require('../models/voucher');

exports.list = (req, resp) => {
    Voucher.find({}, function (err, voucher) {
        if (err) console.log(err)
        resp.send(voucher)
        resp.end(voucher.campanha)
    });
};

exports.create = (req, resp) => {
    let voucher = req.body.voucher;
    // let voucher = {
    //     codigo: 'marcone1000',
    //     campanha: 'Marcone vai passar nessa entrevista Hoje',
    //     inicio: new Date(),
    //     fim: new Date(),
    //     max: 1000,
    //     qtdUtilizada: 0,
    //     valor: 10
    // };
    Voucher.create(voucher);
    resp.end();
};

exports.put = (req, resp) => {
    Voucher.findOne({'codigo': req.params.codigo}, function (err, voucher) {

        if (err) {
            console.log(err)
            resp.end()
        }

        voucher.set('campanha', req.body.voucher.campanha);
        voucher.set('fim', req.body.voucher.fim);
        voucher.save()
    });
    resp.end();
};

exports.delete = (req, resp) => {

    Voucher.deleteOne({'codigo': req.params.codigo}, function (err) {
        console.log(err)
        resp.end()
    })


    resp.end();
};