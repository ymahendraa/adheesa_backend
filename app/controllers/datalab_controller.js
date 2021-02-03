const db = require("../models");
const DataLab = db.dataLab;
const Pasien = db.pasien;
const Op = db.Sequelize.Op;

Pasien.hasMany(DataLab, {foreignKey:'pasien_id'} );
DataLab.belongsTo(Pasien, {foreignKey:'pasien_id'});

exports.create = (req, res) => {
    if(!req.body.pasien_id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const dataLab = {
        pasien_id: req.body.pasien_id,
        tanggal: req.body.tanggal,
        jenis_pekerjaan: req.body.jenis_pekerjaan,
        jumlah: req.body.jumlah,
        lab: req.body.lab,
        biaya: req.body.biaya,
        dpjp: req.body.dpjp,
    };

    DataLab.create(dataLab)
        .then(data => {
            res.send(data);
            })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Data Lab."
            });
    });
};

exports.findAll = (req, res) => {
    const nama = req.query.nama_pasien;
    var condition1 = nama ? { nama_pasien : { [Op.like]: `%${nama}%` }} : null;
    // var condition2 = {pasien_id : req.params.pasien_id}
    // { [Op.or]:[condition2, condition1]}
    DataLab.findAll({
        where: {
            '$Pasien.nama_pasien$': { [Op.like]: `%${nama}%` }
        },
        include: [{
            model: Pasien
        }]}
        )
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving data lab."
        });
    });
};

exports.findOne = (req,res) => {
    const id = req.params.data_id;

    DataLab.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Data with id= " + id
            });
    });
};

exports.update = (req,res) => {
    const id = req.params.data_id;

    DataLab.update(req.body, {
        where: { data_id : id }
    })
        .then(num => {
            if (num == 1) {
            res.send({
                message: "Data Lab was updated successfully."
            });
            } else {
            res.send({
                message: `Cannot update Data with id=${id}. Maybe Data was not found or req.body is empty!`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Error updating Data lab with id= " + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.data_id;

    DataLab.destroy({
        where: { data_id : id }
    })
        .then(num => {
            if (num == 1) {
            res.send({
                message: "Data lab was deleted successfully!"
            });
            } else {
            res.send({
                message: `Cannot delete Data lab with id=${id}. Maybe Data lab was not found!`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Could not delete Data lab with id=" + id
            });
        });
}