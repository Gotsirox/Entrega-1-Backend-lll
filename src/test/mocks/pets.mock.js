import { faker } from '@faker-js/faker';

export const generatePet = () => {
    return {
        name: faker.person.firstName(),
        specie: faker.helpers.arrayElement(['Dog', 'Cat', 'Bird', 'Rabbit', 'Hamster']),
        birthDate: faker.date.past(),
        adopted: faker.datatype.boolean(),
        image: faker.image.url(),
    };
};

export const generatePets = (quantity = 100) => {
    return Array.from(
        { length: quantity },
        () => generatePet()
    );
};
