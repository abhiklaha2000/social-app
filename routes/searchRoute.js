const express = require("express");
const search_router =  new express.Router();
const searchController =  require("../controllers/searchController.js");

search_router.get('/search', searchController.search)

module.exports = search_router;