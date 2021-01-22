const db = require("../models");
const Kunjungan = db.kunjungan;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.riwayat_id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const kunjungan = {
        riwayat_id: req.body.riwayat_id
    };

    Kunjungan.create(kunjungan)
        .then(data => {
            res.send(data);
            })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Riwayat."
            });
    });
};

exports.findAll = (req, res) => {
    const riwayat_id = req.query.riwayat_id;
    var condition = riwayat_id ? { riwayat_id: { [Op.like]: `%${riwayat_id}%` } } : null;
  
    Kunjungan.findAll({ where : condition })
        .then(data => {
            res.send(data);
      })
      .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving kunjungan."
        });
      });
};