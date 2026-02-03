import axios from 'axios'
import {appConfig} from '@/config/config.js'

/**
 * Get All Jobs
 * @returns jobs data
 */
export const API_GET_JOBS = async () => {
    try {
        const response = await axios.get(`${appConfig.appBackend}/jobs`)
        return response.data
    } catch(e) {
        console.error(e)
        throw e
    }
}