const express = require('express');
const router = express.Router();

const departmentController = require('../controllers/departmentController');
const { validateName, validateId } = require('../middleware');

router.get('/:id',
// #region swagger doc
  /* #swagger.tags = ['Department'] */
  /* #swagger.summary = "Retrieve information about one Department." */
  /* #swagger.parameters = [
                            {
                              "name": "id",
                              "in": "path",
                              description: "ID of the Department to retrieve",
                              "required": true,
                              "schema": {
                                "type": "integer"
                              }
                            }
                          ]
  */
  /* #swagger.responses[200] = {
        description: "Get sucessfully ONE Department from the database",
        schema: {
                    $ref: '#/components/schemas/DepartmentResponseSuccessful'
                }
    }
    #swagger.responses[404] = {
        description: "There is no Department with the selected ID",
        schema: {
                    $ref: '#/components/schemas/NoDepartmentError'
                }
    }
    #swagger.responses[500] = {
        description: "There is no connection to the database",
        schema: {
                    $ref: '#/components/schemas/NoConnectionDbError'
                }
    }
    #swagger.responses[400] = {
        description: "There is an error in the input data, ID must be an integer larger than 0.",
        schema: {
            $ref: '#/components/schemas/ValidationJoiError'
          }
      }
     */
  // #endregion swagger doc
  validateId, departmentController.getOneDepartment);

router.get('/',
// #region swagger doc
  /* #swagger.tags = ['Department'] */
  /* #swagger.summary = "Retrieve information about all departments." */
  /* #swagger.responses[200] = {
        description: "Get an array of ALL Departments from the database",
        schema: [
        {
            "name": "Department of Power Engineering"
        }
      ]
    }
    #swagger.responses[404] = {
        description: "There is no data in the Department database",
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
  departmentController.getAllDepartments);

router.post('/',
// #region swagger doc
  /* #swagger.tags = ['Department'] */
  /* #swagger.summary = "Create one Department in the database." */
  /* #swagger.responses[201] = {
        description: "Department created sucessfully",
        schema: [
        {
            "id": 7,
            "name": "Test test test",
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
              }
            }
          }
        }
      }
    }
    */
  // #endregion swagger doc
  validateName, departmentController.createDepartment);

router.put('/:id',
// #region swagger doc
  /* #swagger.tags = ['Department'] */
  /* #swagger.summary = "Update one Department in the database." */
  /* #swagger.parameters = [
                            {
                              "name": "id",
                              "in": "path",
                              description: "ID of the Department to update",
                              "required": true,
                              "schema": {
                                "type": "integer"
                              }
                            }
                          ]
  */
  /* #swagger.responses[200] = {
        description: "Department updated sucessfully",
        schema: {
                    "message": "Item successfully updated"
                }
    }
    #swagger.responses[404] = {
        description: "There is an error in the input data, Department ID to update not found.",
        schema: {
                    "message": "Item not updated"
                }
      }
    #swagger.responses[400] = {
        description: "There is an error in the input data, middleware returns an error message.",
        schema: {
            "message": "\"name\" is required"
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
              }
            }
          }
        }
      }
    }
    */
  // #endregion swagger doc
  validateId, validateName, departmentController.updateDepartment);

router.delete('/:id',
// #region swagger doc
  /* #swagger.tags = ['Department'] */
  /* #swagger.summary = "Delete one Department in the database." */
  /* #swagger.parameters = [
                            {
                              "name": "id",
                              "in": "path",
                              description: "ID of the Department to delete",
                              "required": true,
                              "schema": {
                                "type": "integer"
                              }
                            }
                          ]
  */
  /* #swagger.responses[202] = {
        description: "Department successfully deleted from the database",
        schema: {
                    "message": "Item successfully deleted"
                }
    }
    #swagger.responses[404] = {
        description: "There is no Department with the selected ID",
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
  validateId, departmentController.deleteDepartment);

module.exports = router;
