
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

module.exports = {
	getOne
};