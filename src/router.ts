import { ServerResponse } from 'http'
import { handleRequest } from './requestHandler'

export const router = async (
    request: Request,
    response: ServerResponse
): Promise<void> => {
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
