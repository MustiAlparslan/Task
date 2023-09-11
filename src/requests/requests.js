import axios from "axios"

export class Requests {
    static async getProduct(){
        try {
            const RESPONSE = await axios.get("https://dummyjson.com/products")
            if(RESPONSE?.status === 200){
                return RESPONSE?.data?.products
            }else{
                return [] 
            }
        } catch (error) {
            return error
        }
    }
    static async searchList(search){
        try {
            const RESPONSE = await axios.get("https://dummyjson.com/products/search?q="+ search)
            if(RESPONSE?.status === 200){
                return RESPONSE?.data?.products
            }else{
                return [] 
            }
        } catch (error) {
            return error
        }
    }
}