import { faker } from '@faker-js/faker';
import mongoose from 'mongoose';
import { createHash } from '../../utils/index.js';

export const generateUser = async () => {
    const hashedPassword = await createHash('coder123');
    return {
        _id: new mongoose.Types.ObjectId(),
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: `${faker.string.alphanumeric(6)}_${faker.internet.email()}`.toLowerCase(),
        password: hashedPassword,
        role: faker.helpers.arrayElement(['user', 'admin']),
        pets: []
    };
};

export const generateUsers = async (quantity = 50) => {
    const hashedPassword = await createHash('coder123');
    const users = [];
    for (let i = 0; i < quantity; i++) {
        users.push({
            _id: new mongoose.Types.ObjectId(),
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: `${faker.string.alphanumeric(6)}_${faker.internet.email()}`.toLowerCase(),
            password: hashedPassword,
            role: faker.helpers.arrayElement(['user', 'admin']),
            pets: []
        });
    }
    return users;
};
