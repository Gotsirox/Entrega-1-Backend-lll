import {expect} from 'chai';
import asyncHandler from '../utils/asyncHandler.js';

describe('asyncHandler', () => {
    it('debe enviar error al next',async () => {

        const error = new Error('Test error');
        
        const next = (receivedError) => {
            expect(receivedError).to.equal(error);
        };

        const handler = asyncHandler(async () => {
            throw error;
        });

        await handler({}, {}, next);
    });
});