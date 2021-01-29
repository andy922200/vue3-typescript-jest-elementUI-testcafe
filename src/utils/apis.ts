import axios from 'axios'

const baseURL = 'http://localhost:4000'
const basicRequest = axios.create({
    baseURL: baseURL
})

export const basicAPIs = {
    getPosts: () => {
        return basicRequest.get('posts')
    }
}
