import { createServer } from 'http'
import { router } from './router'
import { DB } from './db'

const envPort = process.env.PORT as unknown as number
const port: number = envPort || 3001
const host: string = process.env.HOST || 'localhost'

export const server = createServer().listen(port, host, (): void => {
    console.log(`Server is running on ${host}:${port}`)
})
server.on('request', router)

export const database = new DB()
