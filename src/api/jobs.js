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

/**
 * Get Job Detail
 */
export const API_GET_JOB_DETAIL = async (id) => {
    try {
        const response = await axios.get(`${appConfig.appBackend}/jobs/${id}`)
        return response.data
    } catch(e) {
        console.error(e)
        throw e
    }
}
/**
 * Add Job
 */
export const API_POST_ADD_JOB = async (data) => {
    try {
        const response = await axios.post(`${appConfig.appBackend}/jobs`, data)
        return response.data
    } catch (e) {
        console.error(e)
        throw e
    }
}