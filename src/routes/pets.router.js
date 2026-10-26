import { Router } from 'express';
import petsController from '../controllers/pets.controller.js';
import uploader from '../utils/uploader.js';
import customError from '../utils/customError.js';

const router = Router();

router.get('/',petsController.getAllPets);
router.post('/',petsController.createPet);
router.post('/withimage',uploader.single('image'), petsController.createPetWithImage);
router.put('/:pid',petsController.updatePet);
router.delete('/:pid',petsController.deletePet);

router.get('/testError', (req, res,next) => {
    const error = new customError('Mascota no encontrada', 404);
    next(error);
});
router.get('/testPets', (req, res,next) => {
    
});

export default router;