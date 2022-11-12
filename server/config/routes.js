
    const express = require('express');

  

const { Router } = require("express");
const router = Router();
//router.use(express.urlencoded({extended: true}));
router.use(express.json());

const {   getAll, postNuevo, getId, putUpdateId, deleteId } = require("../controllers/quotes");


router.get("/getAll", getAll);

router.post("/postNuevo", postNuevo);


router.get("/getId", getId);

router.put("/putUpdateId", putUpdateId);

router.delete("/deleteId", deleteId);


module.exports = router;