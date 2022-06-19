import { cpus } from 'os'
import cluster from 'cluster'
import { pid } from 'process'

const numCPUs = cpus().length

void (async () => {
    if (cluster.isPrimary) {
        console.log(`Primary ${process.pid} is running`)
        for (let i = 0; i < numCPUs; i++) {
            cluster.fork()
        }

        cluster.on('exit', (worker, code, signal) => {
            console.log(`worker ${worker.process.pid} died`)
        })
    } else {
        const id = cluster.worker?.id
        console.log(`Worker ${id}, pid: ${pid}`)
        await import('./index')
    }
})()
