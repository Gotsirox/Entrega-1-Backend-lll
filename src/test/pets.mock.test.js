import {expect} from 'chai';
import {generatePet, generatePets} from './mocks/pets.mock.js';
import PetRepository from '../repository/PetRepository.js';
import PetDaoMock from './mocks/pets.dao.mock.js';

describe('Testing pets mock',()=>{

    it('debe generar una mascota con datos validos',()=>{
        const pet = generatePet();

        console.log(pet);

        expect(pet).to.have.property('name');
        expect(pet).to.have.property('specie');
        expect(pet).to.have.property('birthDate');
        expect(pet).to.have.property('adopted');
        expect(pet).to.have.property('image');
    
    });

    it('debe generar la cantidad de mascotas solicitadas',()=>{
        const pets = generatePets(10);

        console.log(pets);
        
        expect(pets).to.be.an('array');
        expect(pets).to.have.lengthOf(10);
    });

});

describe('Testing PetRepository with mock DAO',()=>{

    it('debe obtener mascotas sin utilzar mongoDB',async()=>{
        
        const mockDao = new PetDaoMock();
        const repository = new PetRepository(mockDao);
        const pets = await repository.getAll();

        console.log(pets);

        expect(pets).to.be.an('array');
        expect(pets).to.have.lengthOf(10);

    });

    it('debe obtener una mascota por criterio sin utilizar mongoDB',async()=>{
        const mockDao = new PetDaoMock();
        const repository = new PetRepository(mockDao);
        const pet = await repository.getBy({name:'Fido'});

        console.log(pet);

        expect(pet).to.be.an('object');
        expect(pet).to.have.property('name');
        expect(pet).to.have.property('specie');
    });

    it('debe devolver null cuando la mascota no existe',async()=>{

        const mockDao= new PetDaoMock();
        const repository = new PetRepository(mockDao);
        const pet = await repository.getBy({name:'NoExiste'});

        console.log(pet);

        expect(pet).to.be.null;
    });

});