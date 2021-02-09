module.exports = app => {
    const pasien = require('../controllers/pasien_controller');

    var router = require("express").Router();
  
    // Create a new Pasien
    router.post("/", pasien.create);
  
    // Retrieve all Pasien
    router.get("/", pasien.findAll);
  
    // Retrieve a single Pasien with id
    router.get("/:pasien_id", pasien.findOne);
  
    // Update a Pasien with id
    router.put("/:pasien_id", pasien.update);
  
    // Delete a Pasien with id
    router.delete("/:pasien_id", pasien.delete);
    
    app.use('/api/pasiens', router);
  };