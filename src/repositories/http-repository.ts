import axios from 'axios';

export class HttpRepository {

    public get = async (url: string, params: any): Promise<any> => {
        try {
            const response = await axios.get(url, params)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}