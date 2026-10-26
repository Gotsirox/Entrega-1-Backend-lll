import { generateUser, generateUsers } from './user.mock.js';

export default class UserDaoMock {

    get = async () => {
        return await generateUsers(50);
    }

    getBy = async (params) => {
        if (params?.name === 'NoExiste') return null;
        return await generateUser();
    }

    save = async (doc) => {
        return { ...doc, _id: 'mockId-123' };
    }

    update = async (id, doc) => {
        return { ...doc, _id: id };
    }

    delete = async (id) => {
        return { message: 'User deleted successfully' };
    }
}
