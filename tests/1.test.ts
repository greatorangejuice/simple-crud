import { getUsers } from '../src/services/user'

test('text', async () => {
    return await getUsers({}).then((data) => {
        expect(data).toBe([])
    })
})
