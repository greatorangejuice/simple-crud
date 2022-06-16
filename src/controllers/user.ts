export const getUser = (request: Request) => {
    switch (request.url) {
        case 'GET':
         return {statusCode: 200, text: 'Hello'};
    }
}