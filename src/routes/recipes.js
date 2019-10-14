const router = require('express').Router();
const controller = require('../controllers/recipes');

router.post('/recipes', controller.create);
router.patch('/recipes/:id', controller.update);
router.get('/recipes', controller.getAll);
router.get('/recipes/:id', controller.getById);
router.delete('/recipes/:id', controller.remove);

module.exports = router;