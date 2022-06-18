import request from 'supertest'
import { server } from '../src'
import { getUsers } from '../src/services/users'

describe('API tests', () => {
    describe('Suite 1', () => {
        it('\x1b[36mGet users\x1b[0m // Should return code 200', async () => {
            const response = await request(server).get('/api/users')
            expect(response.statusCode).toBe(200)
        })
        it("\x1b[36mNo age and hobby\x1b[0m // Should return 400 and 'The field age is required'", async () => {
            const response = await request(server)
                .post('/api/users')
                .send({ name: 'Jack' })
            const message = JSON.parse(response.text).message
            expect(response.statusCode).toBe(400)
            expect(message).toBe('The field age is required')
        })
        it("\x1b[36mNo hobby\x1b[0m // Should return 400 and 'The field hobby is required'", async () => {
            const response = await request(server)
                .post('/api/users')
                .send({ name: 'Jack', age: 17 })
            const message = JSON.parse(response.text).message
            expect(response.statusCode).toBe(400)
            expect(message).toBe('The field hobby is required')
        })
        it("\x1b[36mHobby is not Array\x1b[0m // Should return 400 and 'The field hobby is required'", async () => {
            const response = await request(server)
                .post('/api/users')
                .send({ name: 'Jack', age: 17, hobby: 123 })
            const message = JSON.parse(response.text).message
            expect(response.statusCode).toBe(400)
            expect(message).toBe('The field hobby is required')
        })
        it("\x1b[36mUserId in not uuid\x1b[0m // Should return 400 and 'UserId is not valid'", async () => {
            const response = await request(server)
                .put('/api/users/id?=123')
                .send({ name: 'Jack', age: 17, hobby: [] })
            const message = JSON.parse(response.text).message
            expect(response.statusCode).toBe(400)
            expect(message).toBe('UserId is not valid')
        })
        it("\x1b[36mUser is not exist\x1b[0m // Should return 404 and 'User not found'", async () => {
            const response = await request(server)
                .put('/api/users/?id=a3f29920-ef8d-456d-ab5c-263f43001237')
                .send({ name: 'Jack', age: 17, hobby: [] })
            const message = JSON.parse(response.text).message
            expect(response.statusCode).toBe(404)
            expect(message).toBe('User not found')
        })
    })
    describe('Suite 2', () => {
        it("\x1b[36mCreate user\x1b[0m // Should return 201 and 'User created successfully'", async () => {
            const response = await request(server)
                .post('/api/users')
                .send({ name: 'Jack', age: 17, hobby: ['hacking'] })
            const message = JSON.parse(response.text).message
            expect(response.statusCode).toBe(201)
            expect(message).toBe('User created successfully')
        })
        // it("\x1b[36mUpdate user\x1b[0m // Should return 200 and 'User created successfully'", async () => {
        //     const response = await request(server)
        //         .put('/api/users')
        //         .send({ name: 'Jack', age: 20, hobby: ['hacking'] })
        //     const message = JSON.parse(response.text).message
        //     const t = await getUsers()
        //
        //     expect(response.statusCode).toBe(201)
        //     expect(message).toBe('User created successfully')
        // })
    })
})
