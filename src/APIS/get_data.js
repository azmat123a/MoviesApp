
import axios from 'axios';

// const base_url = 'http://www.omdbapi.com/'
const key = '&apikey=f06b2cc3'
let base_url_s = 'https://www.omdbapi.com/?s=batman&plot=full&apikey=f06b2cc3'

export const search_by_title = async (title, year, plot) => {
    let YEAR = ''
    let PLOT = ''
    let Title = `?s=${title}`
    if (year) {
        YEAR = `&y=${year}`
        Title = `?t=${title}`

    }
    if (plot == 'Full') { PLOT = `&p=${plot}` }
    const url = `http://www.omdbapi.com/${Title}${YEAR}${PLOT}${key}`
    try {
        const response = await axios.get(url);
        if (response.data?.Search) {
            let res = await searchMoviesByTitle(title)
            console.log(res)
            return res
            return { res: response.data?.Search, display: 'All', Response: true }
        }
        else if (response.data.Response === 'True') {
            return { res: response.data, display: 'Single', Response: true }
        }
        else {
            return { res: response.data.Error, display: 'error' }
        }
    } catch (error) {
        console.log("err", error);
        return { res: error, display: 'error' }
    }
}


/*
*Search by imdbID
 */

export const search_by_imdbID = async (id) => {
    // https://www.omdbapi.com/?i=tt1877830&apikey=f06b2cc3
    const url = `http://www.omdbapi.com/?i=${id}${key}`
    try {
        const response = await axios.get(url);
        return { res: response.data, display: 'Single', Response: true }
    } catch (error) {
        return { res: error, display: 'error' }
    }
}

//
async function searchMoviesByTitle(title) {
    let currentPage = 1;
    let totalResults = 0;
    let allResults = [];

    while (true) {
        const response = await axios.get(`https://www.omdbapi.com/?s=${title}&page=${currentPage}${key}`);
        if (response.data?.Search) {
            totalResults = parseInt(response.data.totalResults);
            allResults.push(...response.data.Search);
        }

        // If all results have been fetched, break out of the loop
        if ((allResults.length >= totalResults) || (allResults.length > 100)) {
            break;
        }

        currentPage++;
    }

    return { res: allResults, display: 'All', Response: true };
}



