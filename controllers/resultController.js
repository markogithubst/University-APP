const models = require("../models");

const getAllResults = async (req, res) => {
    try {
      const results = await models.Result.findAll();
      return res.status(200).json( results );
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

module.exports = {
    // createResult,
    getAllResults,
    // getOneResult,
    // updateResult,
    // deleteResult
}