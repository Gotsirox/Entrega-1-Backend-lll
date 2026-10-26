import { Router } from 'express';
import { getMockingPets } from '../test/mocks/pets.controller.mock.js';
import { getMockingUsers, generateData } from '../test/mocks/users.controller.mock.js';


const router = Router();


router.get('/mockingPets', getMockingPets);


router.get('/mockingUsers', getMockingUsers);


router.post('/generateData', generateData);


export default router;
