const axios = require('axios')
const config = require('../config/config')

module.exports = class HttpTrainLocationsRepository{
    constructor() {
    }

    locations(routes) {
        return axios.get('http://lapi.transitchicago.com/api/1.0/ttpositions.aspx', {
            params: {
                key: config.trainTracker.apiKey,
                rt: routes.join(),
                outputType: 'JSON'
            }
        }).then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error);
        });
    }
}