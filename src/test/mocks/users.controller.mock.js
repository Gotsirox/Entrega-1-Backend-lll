import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import asyncHandler from '../../utils/asyncHandler.js';
import { generateUsers } from './user.mock.js';
import { generatePets } from './pets.mock.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataDir = join(__dirname, 'data');


export const getMockingUsers = asyncHandler(async (req, res) => {
    const quantity = Number(req.body.quantity) || Number(req.query.quantity) || 50;
    const users = await generateUsers(quantity);
    res.send({ status: 'success', payload: users });
});

export const generateData = asyncHandler(async (req, res) => {
    const { users, pets } = req.body;
    const usersCount = Number(users) || Number(req.query.users) || 10;
    const petsCount = Number(pets) || Number(req.query.pets) || 5;
    const mockUsers = await generateUsers(usersCount);
    const mockPets = await generatePets(petsCount);

    await Promise.all([
        fs.promises.writeFile(join(dataDir, 'users.json'), JSON.stringify(mockUsers, null, 2)),
        fs.promises.writeFile(join(dataDir, 'pets.json'), JSON.stringify(mockPets, null, 2))
    ]);

    res.send({
        status: 'success',
        message: `Se generaron y guardaron ${mockUsers.length} usuarios y ${mockPets.length} mascotas en base de datos.`
    });
});

export default {
    getMockingUsers,
    generateData
};
