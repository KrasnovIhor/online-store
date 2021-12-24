const Router = require('express');
const router = new Router();
const {
	create,
	deleteOne,
	getAll,
	getOne,
} = require('../controllers/deviceController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), create);
router.get('/', getAll);
router.get('/:id', getOne);
router.delete('/', checkRole('ADMIN'), deleteOne);

module.exports = router;
