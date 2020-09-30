import * as socketIo from 'socket.io';
import { singleton } from 'tsyringe';
import { config } from './config'

@singleton()
export class LightMapServer {
    private static io: SocketIO.Server;

    public constructor() {
        LightMapServer.io = null;
    }

    public initSocket() {
        if (LightMapServer.io === null) {
            console.log('server starting!')
            LightMapServer.io = socketIo(config.port, {
                path: '/'
            })

            LightMapServer.io.on('connection', (socket) => {
                console.log(`Client connected [id=${socket.id}]`)
            })
        }
    }

    public emitUpdate(message: string, payload: any) {
        if (LightMapServer.io !== null) {
            console.log(`Emitting payload to: ${message}`)
            LightMapServer.io.emit(message, payload)
        }
    }
}