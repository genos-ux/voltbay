import {create} from 'zustand';
import axios from "axios"

const BASE_URL = "http://localhost:4000"


export const useProductStore = create((set) => ({
    // products state
    products: [],
    loading: false,
    error: null,

    fetchProducts: async() => {
        set({loading:true});

        try {
            const response = await axios.get(`${BASE_URL}/api/products`);
            set({products: response.data.data, error:null})
            
        } catch (error) {
            if(error.status == 429) set({error: "Rate Limit exceeded"})
            else set({error: "Something went wrong."})
            
        }finally{
            set({loading:false})
        }
    }
}))