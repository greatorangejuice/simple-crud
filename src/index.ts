import { createServer } from 'http'
import { router } from './router'
import { cpus } from 'os'
import cluster from 'cluster'

const envPort = process.env.PORT as unknown as number
const port: number = envPort || 3001
const host: string = process.env.HOST || 'localhost'

if (process.env.CLUSTER === 'ON') {
    const numCPUs = cpus().length

    if (cluster.isPrimary) {
        console.log(`Primary ${process.pid} is running`)
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork()
        }

        cluster.on('exit', (worker, code, signal) => {
            console.log(`worker ${worker.process.pid} died`)
        })
    } else {
        const server = createServer().listen(port, host, (): void => {
            console.log(`Server is running on ${host}:${port}`)
        })
        server.on('request', router)
        console.log(`Worker ${process.pid} started`)
    }
} else {
    const server = createServer().listen(port, host, (): void => {
        console.log(`Server is running on ${host}:${port}`)
    })
    server.on('request', router)
}
