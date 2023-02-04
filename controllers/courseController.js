const models = require('../models');
const { getOne, getAll, deleteOne, createOne, updateOne } = require('./crudController');

const getAllCourses = async (req, res) => {
  // #region swagger doc
  /* #swagger.tags = ['Course'] */
  /* #swagger.summary = "Retrieve information about all courses." */
  /* #swagger.responses[200] = {
        description: "Get an array of ALL Courses from the database",
        schema: [
        {
            "name": "Mobile communications",
            "credit_hours": 88,
            "professor_id": 3
        }
      ]
    }
    #swagger.responses[404] = {
        description: "There is no data in the Course database",
        schema: {
                    "message": "There is no data in the database"
                }
    }
    #swagger.responses[500] = {
        description: "There is no connection to the database",
        schema: {
                    "error": "connect ECONNREFUSED localhost:DB_PORT"
                }
    } */
  // #endregion swagger doc
  await getAll(req, res, models.Course);
};

const getOneCourse = async (req, res) => {
  // #region swagger doc
  /* #swagger.tags = ['Course'] */
  /* #swagger.summary = "Retrieve information about one course." */
  /* #swagger.parameters = [
                            {
                              "name": "id",
                              "in": "path",
                              description: "ID of the course to retrieve",
                              "required": true,
                              "schema": {
                                "type": "integer"
                              }
                            }
                          ]
  */
  /* #swagger.responses[200] = {
        description: "Get sucessfully ONE Course from the database",
        schema: [
        {
            "name": "Methods and algorithms of machine learning",
            "credit_hours": 80,
            "professor_id": 1
        }
      ]
    }
    #swagger.responses[404] = {
        description: "There is no Course with the selected ID",
        schema: {
                    "message": "Item not found"
                }
    }
    #swagger.responses[500] = {
        description: "There is no connection to the database",
        schema: {
                    "error": "connect ECONNREFUSED localhost:DB_PORT"
                }
    }
    #swagger.responses[400] = {
        description: "There is an error in the input data, ID must be an integer larger than 0.",
        schema: {
            "message": [
                "\"id\" must be greater than or equal to 1",
                "\"id\" must be a number"
              ]
          }
      }
     */
  // #endregion swagger doc
  await getOne(req, res, models.Course);
};

const createCourse = async (req, res) => {
  // #region swagger doc
  /* #swagger.tags = ['Course'] */
  /* #swagger.summary = "Create one course in the database." */
  /* #swagger.responses[201] = {
        description: "Course created sucessfully",
        schema: [
        {
            "id": 7,
            "name": "Test test test",
            "credit_hours": 333,
            "professor_id": 2,
            "updated_at": "2023-02-03T09:27:26.689Z",
            "created_at": "2023-02-03T09:27:26.689Z"
        }
      ]
    }
    #swagger.responses[400] = {
        description: "There is an error in the input data, middleware returns an array of error messages.",
        schema: {
            "message": [
                "\"credit_hours\" is required",
                "\"professor_id\" is required"
              ]
          }
      }
    #swagger.responses[500] = {
        description: "There is no connection to the database or validation error(name must be unique)",
        schema: {
                    "error": "content of the error message"
                }
    }
    #swagger.requestBody={
      "required": true,
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "required": [],
            "properties": {
              "name": {
                "type": "string"
              },
              "credit_hours": {
                "type": "integer"
              },
              "professor_id": {
                "type": "integer",
                "format": "int64",
              }
            }
          }
        }
      }
    }
    */
  // #endregion swagger doc
  await createOne(req, res, models.Course);
};

const deleteCourse = async (req, res) => {
  // #region swagger doc
  /* #swagger.tags = ['Course'] */
  /* #swagger.summary = "Delete one course in the database." */
  /* #swagger.parameters = [
                            {
                              "name": "id",
                              "in": "path",
                              description: "ID of the course to delete",
                              "required": true,
                              "schema": {
                                "type": "integer"
                              }
                            }
                          ]
  */
  /* #swagger.responses[202] = {
        description: "Course successfully deleted from the database",
        schema: {
                    "message": "Item successfully deleted"
                }
    }
    #swagger.responses[404] = {
        description: "There is no Course with the selected ID",
        schema: {
                    "message": "Item not found"
                }
    }
    #swagger.responses[500] = {
        description: "There is no connection to the database",
        schema: {
                    "error": "connect ECONNREFUSED localhost:DB_PORT"
                }
    }
    #swagger.responses[400] = {
        description: "There is an error in the input data, ID must be an integer larger than 0.",
        schema: {
            "message": [
                "\"id\" must be greater than or equal to 1",
                "\"id\" must be a number"
              ]
          }
      } */
  // #endregion swagger doc
  await deleteOne(req, res, models.Course);
};

const updateCourse = async (req, res) => {
  // #region swagger doc
  /* #swagger.tags = ['Course'] */
  /* #swagger.summary = "Update one course in the database." */
  /* #swagger.parameters = [
                            {
                              "name": "id",
                              "in": "path",
                              description: "ID of the course to delete",
                              "required": true,
                              "schema": {
                                "type": "integer"
                              }
                            }
                          ]
  */
  /* #swagger.responses[200] = {
        description: "Course updated sucessfully",
        schema: {
                    "message": "Item successfully updated"
                }
    }
    #swagger.responses[404] = {
        description: "There is an error in the input data, course ID to update not found.",
        schema: {
                    "message": "Item not updated"
                }
      }
    #swagger.responses[400] = {
        description: "There is an error in the input data, middleware returns an array of error messages.",
        schema: {
            "message": [
                "\"credit_hours\" is required",
                "\"professor_id\" is required"
              ]
          }
      }
    #swagger.responses[500] = {
        description: "There is no connection to the database or validation error(name must be unique)",
        schema: {
                    "error": "content of the error message"
                }
    }
    #swagger.requestBody={
      "required": true,
      "content": {
        "application/json": {
          "schema": {
            "type": "object",
            "required": [],
            "properties": {
              "name": {
                "type": "string"
              },
              "credit_hours": {
                "type": "integer"
              },
              "professor_id": {
                "type": "integer",
                "format": "int64",
              }
            }
          }
        }
      }
    }
    */
  // #endregion swagger doc
  await updateOne(req, res, models.Course);
};

module.exports = {
  createCourse,
  getAllCourses,
  getOneCourse,
  updateCourse,
  deleteCourse
};
