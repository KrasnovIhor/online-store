const { Type } = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeController {
	async create(req, res, next) {
		try {
			const { name } = req.body;

			if (!name) next(ApiError.badRequest('Type name is empty'));

			const type = await Type.create({ name });

			return res.json(type);
		} catch (e) {
			next(ApiError.badRequest(e.message));
		}
	}

	async getAll(_, res, next) {
		try {
			const types = await Type.findAll();

			return res.json(types);
		} catch (e) {
			next(ApiError.badRequest(e.message));
		}
	}

	async deleteOne(req, res, next) {
		try {
			const { id } = req.body;
			const itemToDelete = await Type.findOne({
				where: { id },
			});
			await itemToDelete.destroy();

			return res.json(itemToDelete);
		} catch (e) {
			next(ApiError.badRequest(e.message));
		}
	}
}

module.exports = new TypeController();
