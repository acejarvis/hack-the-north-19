const CONSTANTS = require("../constants");
const express = require("express");
const SQLController = require("../sql/sqlController");
const sampleData = require("../sampleData");


const router = express.Router();
// MasterDetail Page Endpoint
router.get(CONSTANTS.ENDPOINT.MASTERDETAIL, (req, res) => {
  res.json(sampleData.textAssets);
});


//List Items
const sqlController = new SQLController();

router.get(CONSTANTS.ENDPOINT.LIST, function(req, res, next) {
  sqlController.get(req, res, next);
});

router.post(CONSTANTS.ENDPOINT.LIST, function(req, res, next) {
  sqlController.create(req, res, next);
});

router.delete(CONSTANTS.ENDPOINT.LIST + "/:_id", function(req, res, next) {
  sqlController.destroy(req, res, next);
});

// Grid Page Endpoint
router.get(CONSTANTS.ENDPOINT.GRID, (req, res) => {
  res.json(sampleData.textAssets);
});


module.exports = router;
