const models = require("../models");

const getAllStudents = async (req, res) => {
    try {
      const students = await models.Student.findAll();
      if (!students || students.length === 0) {
        return res.status(404).send({ message: "There are no Students in the database" });
      }
      return res.status(200).json( students );
    } catch (error) {
      return res.status(500).send({ message: "An error occurred while fetching all students: " + error.message });
    }
  };

  
  const getOneStudent = async (req, res) => {
    try {
        const studentId  = req.params.id
        const student = await models.Student.findOne( {where: { id: studentId}} );
        if (!student || student.length == 0) {
          return res.status(404).send({ message: "There is no Student with this Id in the database" });
        }
        return res.status(200).json( student );
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

const createStudent = async (req, res) => {
  try {
    const studentName = req.body.name
    const studentAddress = req.body.address
    const studentExists = await models.Student.findOne( {where: { name: studentName}} );
    const addressExists = await models.Student.findOne( {where: { address: studentAddress}} );
    if (studentExists && addressExists) {
        return res.status(400).send({ message: "A student with that name and address already exists" });
    }
    const newStudent = await models.Student.create(req.body);
    return res.status(201).json(newStudent);
    
} catch (error) {
    return res.status(500).send({ message: "An error occurred while creating the student: " + error.message });
}
};

const deleteStudent = async (req, res) => {
  try {
    const studentId  = req.params.id
    const deletedStudent = await models.Student.findOne( {where: { id: studentId}} );
    if(!deletedStudent || deletedStudent.length === 0){
      return res.status(400).send({ message: "There is no student with this ID in the database"})
    }
    await deletedStudent.destroy()
    return res.status(204).send({message: "Student succesfully deleted"});
  } catch (error) {
    return res.status(500).send({ message: "An error occured while deleting the student: " + error.message })
  }
};


const updateStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const { name, email, address, phoneNumber, MajorId } = req.body;
    const studentExists = await models.Student.findOne( {where: { id: studentId}} );
    if (!studentExists || studentExists.length === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }
    await models.Student.update({ name, email, address, phoneNumber, MajorId }, { where: { id: studentId } });
    return res.status(200).json({ message: 'Student updated successfully' });
  } catch (error) {
    return res.status(500).json({ message: "An error occured while updating the student: " + error.message });
  }
};

const getOwnResults = async (req, res) => {
  try {
      const studentId = req.params.id
      console.log(studentId)
      const studentResultExists = await models.Result.findOne( {where: { StudentId: studentId}} );
      if (!studentResultExists || studentResultExists.length == 0) {
        return res.status(404).send({ message: "Results By entered Student Id not found" });
      }
      const allResultsByStudentId = await models.Result.findAll( {where: { StudentId: studentId}} );
      return res.status(200).json( allResultsByStudentId );
  } catch (error) {
    return res.status(500).send({message: "An error occured while getting the results: " + error.message});
  }
};


module.exports = {
    createStudent,
    getAllStudents,
    getOneStudent,
    updateStudent,
    deleteStudent,
    getOwnResults
}