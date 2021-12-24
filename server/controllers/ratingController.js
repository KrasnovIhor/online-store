const { Rating, Device } = require('../models/models');
const ApiError = require('../error/ApiError');

class RatingController {
	async updateRating(req, res, next) {
		try {
		} catch (e) {
			next(ApiError.badRequest(e.message));
		}
	}
}

module.exports = new RatingController();
