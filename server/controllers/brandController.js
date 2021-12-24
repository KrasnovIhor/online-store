const ApiError = require('../error/ApiError');
const { Brand } = require('../models/models');

class BrandController {
	async create(req, res, next) {
		try {
			const { name } = req.body;

			if (!name) next(ApiError.badRequest('Brand name is empty'));

			const brand = await Brand.create({ name });

			return res.json(brand);
		} catch (e) {
			next(ApiError.badRequest(e.message));
		}
	}

	async getAll(_, res, next) {
		try {
			const brands = await Brand.findAll();

			return res.json(brands);
		} catch (e) {
			next(ApiError.badRequest(e.message));
		}
	}

	async deleteOne(req, res, next) {
		try {
			const { id } = req.body;
			const itemToDelete = await Brand.findOne({
				where: { id },
			});
			await itemToDelete.destroy();

			return res.json(itemToDelete);
		} catch (e) {
			next(ApiError.badRequest(e.message));
		}
	}
}

module.exports = new BrandController();
