import { createServer, IncomingMessage, ServerResponse } from 'http'
import { createUser, deleteUser, getUsers, updateUser } from './services/user'
import { IResponse, QueryParameters, User } from './models/model'
import url from 'url'
import { formatJSONResponse } from './utils'
import { cpus } from 'os'
import cluster from 'cluster'

const envPort = process.env.PORT as unknown as number
const port: number = envPort || 3001
const host = process.env.HOST || 'localhost'

const getCpus = () => {
    return cpus().length
}

export const getRequestData = (
    request: IncomingMessage
): Promise<Omit<User, 'id'>> => {
    request.setEncoding('utf8')
    return new Promise((resolve) => {
        let body = ''
        request.on('data', (chunk: Buffer) => {
            body += chunk
        })
        request.on('end', () => {
            resolve(JSON.parse(body))
        })
    })
}

const handleRequest = async (
    request: Request
): Promise<IResponse | undefined> => {
    const route = request.url
    // TODO refactor!!!!!!!
    if (!route.includes('/api/user')) {
        return formatJSONResponse({ message: 'Route does not exist' }, 404)
    }
    //
    const query = url.parse(request.url, true).query as QueryParameters
    const params: QueryParameters = { id: null }
    if (query) {
        params.id = query.id
    }
    let body
    try {
        switch (request.method) {
            case 'GET':
                return await getUsers(params)
            case 'POST':
                // @ts-ignore
                body = await getRequestData(request)
                return await createUser(body)
            case 'PUT':
                // @ts-ignore
                body = await getRequestData(request)
                return await updateUser(params, body)
            case 'DELETE':
                return await deleteUser(params)
        }
    } catch (errorMessage) {
        return formatJSONResponse({ message: 'Unhandled error' }, 500)
    }
}

const server = createServer()
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
server.listen(port, host, (): void => {
    console.log(`Server is running on ${host}:${port}`)
})
