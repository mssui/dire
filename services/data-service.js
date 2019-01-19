const dataModel = require('../models/data-model');

async function findAll() { 
    return dataModel.find()
}


module.exports = {
    findAll
};
