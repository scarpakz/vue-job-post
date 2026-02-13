import axios from 'axios'
import {appConfig} from '@/config/config.js'

/**
 * Get All Jobs
 */
export const API_GET_JOBS = async () => {
    try {
        const {data, status, statusText} = await axios.get(`${appConfig.appBackend}/jobs`)
        return {data, status, statusText}
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
        const {data, status, statusText} = await axios.get(`${appConfig.appBackend}/jobs/${id}`)
        return {data, status, statusText}
    } catch(e) {
        console.error(e)
        throw e
    }
}
/**
 * Add Job
 */
export const API_POST_ADD_JOB = async (newJobData) => {
    try {
        const {data, status, statusText} = await axios.post(`${appConfig.appBackend}/jobs`, newJobData)
        return {data, status, statusText}
    } catch (e) {
        console.error(e)
        throw e
    }
}
/**
 * Delete job
 */
export const API_POST_DELETE_JOB = async (id) => {
    try {
        const {data, status, statusText} = await axios.delete(`${appConfig.appBackend}/jobs/${id}`)
        return {data, status, statusText}
    } catch (e) {
        console.error(e)
        throw e
    }
}