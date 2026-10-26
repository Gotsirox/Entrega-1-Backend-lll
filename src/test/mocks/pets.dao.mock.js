import {generatePet, generatePets} from './pets.mock.js';

export default class PetDaoMock {

    get = async () =>{
        return generatePets(10);
    }

    getBy = async (params) =>{

        if(params?.name === 'NoExiste') return null;
        
        return generatePet();
    }

    save = async (doc) =>{
        return {...doc, _id:'mockId-123'}};
    

    update = async (id,doc) =>{
        return {...doc, _id:id};
    }

    delete = async (id) =>{
        return {message: 'Pet deleted successfully'};
    }
}