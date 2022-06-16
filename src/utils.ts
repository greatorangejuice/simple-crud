export const formatJSONResponse = (
    response: Record<string, unknown>,
    statusCode = 200
) => {
    return {
        headers: {
            'Access-Control-Allow-Origin': '*', // Required for CORS support to work
            'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
        },
        statusCode,
        body: JSON.stringify(response),
    }
}
