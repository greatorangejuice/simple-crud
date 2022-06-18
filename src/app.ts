import { createServer, ServerResponse } from 'http'
import { handleRequest } from './requestHandler'

const envPort = process.env.PORT as unknown as number
const port: number = envPort || 3001
const host: string = process.env.HOST || 'localhost'

export const server = createServer().listen(port, host, (): void => {
    console.log(`Server is running on ${host}:${port}`)
})

server.on(
    'request',
    async (request: Request, response: ServerResponse): Promise<void> => {
        try {
            const data = await handleRequest(request)
            if (data) {
                const { headers, body, statusCode } = data
                response.writeHead(statusCode, '', headers)
                response.write(body)
                response.end()
            }
        } catch (e) {
            //TODO add handler
            throw new Error()
        }
    }
)
