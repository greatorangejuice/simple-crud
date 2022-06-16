import {createServer} from 'http';

const port = 3000;
const host = 'localhost';

const server = createServer((req, res) => {
    console.log(req.method);
    console.log(req.url)
    switch (req.method) {
        case 'GET':
            res.statusCode = 200;
            res.write(JSON.stringify({text: '1', name: 'Jack'}))
            res.end();
    }
});

server.listen(port, host, () => {
    console.log(`Server is running on ${host}:${port}`)
})