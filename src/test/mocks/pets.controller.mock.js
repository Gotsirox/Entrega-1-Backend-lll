import asyncHandler from '../../utils/asyncHandler.js';
import { generatePets } from './pets.mock.js';


export const getMockingPets = asyncHandler(async (req, res) => {

    const quantity = Number(req.body.quantity) || Number(req.query.quantity) || Number(req.query.pets) || 100;
    const pets = generatePets(quantity);
    res.send({ status: 'success', payload: pets });
});

export default {
    getMockingPets
};
