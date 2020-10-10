import fetch from 'node-fetch';
const API_URL='https://yts.mx/api/v2/list_movies.json';


export const getMovies = (limit, minimum_rating) => {
    let queryObj = {};
    if(limit){
        queryObj.limit = limit;
    }
    if(minimum_rating){
        queryObj.minimum_rating = minimum_rating;
    }
    const queryParams = makeQueryParams(queryObj);
    const url = `${API_URL}${queryParams}`;
    console.log(`req url : ${url}`);
    return fetch(url)
        .then(res => res.json())
        .then(json => json.data.movies);
};


 const makeQueryParams = (obj) => {
    let queryString = '?';
    Object.keys(obj).forEach((key) => {
        queryString += `${key}=${obj[key]}&`;
    });
    return queryString.substr(0, queryString.length - 1);
};
