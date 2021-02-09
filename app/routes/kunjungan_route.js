module.exports = app => {
    const kunjungan = require('../controllers/kunjungan_controller');

    var router = require("express").Router();
  
    // Create a new Pasien
    router.post("/", kunjungan.create);
  
    // Retrieve all Pasien
    router.get("/", kunjungan.findAll);
  
    // Retrieve a single Pasien with id
    // router.get("/:data_id", datalabs.findOne);
  
    // Update a Pasien with id
    // router.put("/:data_id", datalabs.update);
  
    // // Delete a Pasien with id
    // router.delete("/:data_id", datalabs.delete);
    
    app.use('/api/kunjungan', router);
  };