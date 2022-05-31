const axios = require('axios')

const getAllCategory = () => {
    return axios.get('https://fakestoreapi.com/products/categories')
        .then((response: any) => ({ response }))
        .catch((error: any) => ({ error }))
}

export default {
    getAllCategory
}