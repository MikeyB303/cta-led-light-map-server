
import * as dotenv from 'dotenv'
const envFileFound = dotenv.config()

if (envFileFound.error) {
    throw new Error('Could not find .env file')
}

export const config = {
    port: parseInt(process.env.PORT, 10),

    trainTracker: {
        apiKey: process.env.TRAIN_TRACKER_API_KEY
    },

    logs: {
        level: 'silly',
    },
}