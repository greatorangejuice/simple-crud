import { IncomingMessage } from 'http'
import { IResponse, QueryParameters, User } from './models/model'
import url from 'url'
import { createUser, deleteUser, getUsers, updateUser } from './services/users'
import { formatJSONResponse } from './utils'

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

export const handleRequest = async (
    request: Request
): Promise<IResponse | undefined> => {
    const route = request.url
    // TODO refactor!!!!!!!
    // if (!route.includes('/api/user')) {
    //     return formatJSONResponse({ message: 'Route does not exist' }, 404)
    // }
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
