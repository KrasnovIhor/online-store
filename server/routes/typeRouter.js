const Router = require('express');
const router = new Router();
const { create, getAll, deleteOne } = require('../controllers/typeController');
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), create);
router.get('/', getAll);
router.delete('/', checkRole('ADMIN'), deleteOne);

module.exports = router;
