const db = require("../models");
const Riwayat = db.riwayat;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.tanggal) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Device
    const riwayat = {
      pasien_id:req.body.pasien_id,
      tanggal:req.body.tanggal,
      unsur_regio:req.body.unsur_regio,
      keluhan:req.body.keluhan,
      perawatan:req.body.perawatan,
      rencana_perawatan:req.body.rencana_perawatan,
      biaya:req.body.biaya,
      dpjp:req.body.dpjp
    };
  

    Riwayat.create(riwayat)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the riwayat."
        });
      });
};

exports.findAll = (req, res) => {
    const tanggal = req.query.tanggal;
    var condition = tanggal ? { tanggal : { [Op.like]: `%${tanggal}%` }} : null;
    var condition2 = {pasien_id : req.params.pasien_id}

    Riwayat.findAll({where : condition2})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving riwayat."
        });
    });
};

exports.findOne = (req,res) => {
    const id = req.params.riwayat_id;

    Riwayat.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Riwayat with id= " + id
            });
    });
};

exports.update = (req,res) => {
    const id = req.params.riwayat_id;

    Riwayat.update(req.body, {
        where: { riwayat_id : id }
    })
        .then(num => {
            if (num == 1) {
            res.send({
                message: "Riwayat was updated successfully."
            });
            } else {
            res.send({
                message: `Cannot update Riwayat with id=${id}. Maybe Riwayat was not found or req.body is empty!`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Error updating Riwayat with id= " + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.pasien_id;

    Riwayat.destroy({
        where: { riwayat_id : id }
    })
        .then(num => {
            if (num == 1) {
            res.send({
                message: "Riwayat was deleted successfully!"
            });
            } else {
            res.send({
                message: `Cannot delete Riwayat with id=${id}. Maybe Riwayat was not found!`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Could not delete Riwayat with id=" + id
            });
        });
}
