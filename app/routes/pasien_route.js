module.exports = app => {
    const pasiens = require('../controllers/pasien_controller');

    var router = require("express").Router();
  
    // Create a new Pasien
    router.post("/", pasiens.create);
  
    // Retrieve all Pasien
    router.get("/", pasiens.findAll);
  
    // Retrieve a single Pasien with id
    router.get("/:pasien_id", pasiens.findOne);
  
    // Update a Pasien with id
    router.put("/:pasien_id", pasiens.update);
  
    // Delete a Pasien with id
    router.delete("/:pasien_id", pasiens.delete);
    
    app.use('/api/pasiens', router);
  };