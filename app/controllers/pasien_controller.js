const db = require("../models");
const Pasien = db.pasien;
const Op = db.Sequelize.Op;

// Create and Save a new Pasien
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nama_pasien) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
      // Create a Pasien
      const pasien = {
        nama_pasien: req.body.nama_pasien,
        tempat_lahir:req.body.tempat_lahir,
        tanggal_lahir:req.body.tanggal_lahir,
        alamat:req.body.alamat,
        no_hp:req.body.no_hp,
        pekerjaan:req.body.pekerjaan,
        riwayat_penyakit_sistemik:req.body.riwayat_penyakit_sistemik,
        alergi_obat:req.body.alergi_obat,
      };
    
      // Save Pasien in the database
      Pasien.create(pasien)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Device."
          });
        });
};

// Retrieve all Pasien from the database.
exports.findAll = (req, res) => {
    const nama_pasien = req.query.nama_pasien;
    var condition = nama_pasien ? { nama_pasien: { [Op.like]: `%${nama_pasien}%` } } : null;
  
    Pasien.findAll({ where : condition })
        .then(data => {
            res.send(data);
      })
      .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving devices."
        });
      });
};

// Find a single Pasien with an id
exports.findOne = (req, res) => {
    const id = req.params.pasien_id;

    Pasien.findByPk(id)
        .then(data => {
            res.send(data);
        })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Pasien with id= " + id
      });
    });
};

// Update a Pasien by the id in the request
exports.update = (req, res) => {
    const id = req.params.pasien_id;

    Pasien.update(req.body, {
      where: { pasien_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Pasien was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Pasien with id=${id}. Maybe Pasien was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Pasien with id= " + id
        });
      });
};

// Delete a Pasien with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.pasien_id;

    Pasien.destroy({
        where: { pasien_id: id }
    })
        .then(num => {
            if (num == 1) {
            res.send({
                message: "Pasien was deleted successfully!"
            });
            } else {
            res.send({
                message: `Cannot delete Pasien with id=${id}. Maybe Device was not found!`
            });
            }
        })
        .catch(err => {
            res.status(500).send({
            message: "Could not delete Pasien with id=" + id
            });
        }); 
};


