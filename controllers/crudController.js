
const getOne = async (req, res, model) => {
	try {
		const id  = req.params.id;
		const data = await model.findOne( {
			where: { id: id },
			attributes: { exclude: ['id', 'created_at', 'updated_at'] } 
		});
		if (!data) {
			return res.status(404).json({ message: `${model.name} not found` });
		}
		return res.status(200).json( data );
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const getAll = async (req, res, model) => {
	try {
		const data = await model.findAll({
			attributes: { exclude: ['id', 'created_at', 'updated_at'] } 
		});
		if(!data){
			return res.status(404).json({ message: 'There is no data in the database' });
		}
		return res.status(200).json( data );
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const deleteOne = async (req, res, model) => {
	try {
		const id  = req.params.id;
		const data = await model.destroy({ where: { id: id } });
		if (!data) {
			return res.status(404).json({ message: 'Item not found' });
		}
		return res.status(200).json( { message: 'Item successfully deleted' } );
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const createOne = async (req, res, model) => {
	try {
		const data = await model.create(req.body);
		if (!data) {
			return res.status(404).json({ message: 'Item not created' });
		}
		return res.status(200).json( data );
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

const updateOne = async (req, res, model) => {
	try {
		const id  = req.params.id;
		const data = await model.update(req.body, { where: { id: id } });
		if(data[0] === 0) {
			return res.status(404).json({ message: 'Item not updated' });
		}
		return res.status(200).json( { message: 'Item successfully updated' } );
	} catch (error) {
		return res.status(500).json(error.message);
	}
};

// const updateCourse = async (req, res) => {
// 	try {
// 		const courseId = req.params.id;
// 		const { name, credit_hours, professor_id } = req.body;
// 		const courseExists = await models.Course.findOne( {where: { id: courseId}} );
// 		if (!courseExists) {
// 			return res.status(404).json({ message: 'Course not found' });
// 		}
// 		await models.Course.update({ name, credit_hours, professor_id }, { where: { id: courseId } });
// 		return res.status(200).json({ message: 'Course updated successfully' });
// 	} catch (error) {
// 		return res.status(500).json({ message: 'An error occured while updating the course: ' + error.message });
// 	}
// };

module.exports = {
	getOne,
	getAll,
	deleteOne,
	createOne,
	updateOne
};