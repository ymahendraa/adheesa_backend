const db = require("../models");
const Kunjungan = db.kunjungan;
const Riwayat = db.riwayat;
const Op = db.Sequelize.Op;

Riwayat.hasMany(Kunjungan, {foreignKey:'riwayat_id'});
Kunjungan.belongsTo(Riwayat, {foreignKey:'riwayat_id'});

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
    const tanggal = req.query.tanggal;
    // var condition = riwayat_id ? { riwayat_id: { [Op.like]: `%${riwayat_id}%` } } : null;
  
    Kunjungan.findAll({
        where: {
            '$Riwayat.tanggal$': { [Op.like]: `%${tanggal}%` }
        },
        include: [{
            model: Riwayat
        }]}
        )
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