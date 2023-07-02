import axios from "axios";

const searchImages = async (term) => {
   const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID gJiLyJTM96YyE2ZIPH9GUyJmFEIGxSxUvu_KZz7Xa_Y' ,
        },
        params: {
            query: term ,
        },
    });
    

    return response.data.results;
}

export default searchImages;