import {index} from './index';

test('Http trigger should return known text', async () => {

    const request = {
        query: { name: 'Bill' }
    };

    jest.mock('index');

    expect(jest.mock.call.length).toBe(1);
});
