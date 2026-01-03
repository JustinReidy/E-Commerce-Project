import axios from 'axios'
import { configDotenv } from 'dotenv'
configDotenv()

export async function getAllItems() {
    try {
        const {data} = await axios.get(`${process.env.API_BASE_URL}/items`)
        // const arr = Array.from({ length: data.length }, (_, i) => data[i]._id)
        return [ ...data ]
        
    } catch (error) {
        console.error('Error fetching items:', error.message)
        return []
    }

}

export async function getItem(id){
    return false
}