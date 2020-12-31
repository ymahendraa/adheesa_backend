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
            err.message || "Some error occurred while creating the Device."
        });
      });
  };