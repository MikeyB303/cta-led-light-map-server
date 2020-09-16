const dotenv = require('dotenv')
const envFileFound = dotenv.config()

if (envFileFound.error) {
    throw new Error('Could not find .env file')
}

module.exports = {
    port: parseInt(process.env.PORT),
    trainTracker: {
        apiKey: process.env.TRAIN_TRACKER_API_KEY
    }
}