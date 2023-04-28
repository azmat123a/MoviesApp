import React from 'react';
import backgroundImage from '../Assets/pexels-skyler-ewing-4598190.jpg';
import './../../CSS/Movie_App/All_Movies.css'
import { search_by_imdbID } from '../../APIS/get_data'


export const All_Movies = (props) => {
    const cardsData = props.data;
    const detailViewHandler = (id) => {
        search_by_imdbID(id).then(response => {
            props.onDetailView(response)

        }).catch(error => {
            console.log(error);
        });

    }
    return (
        <>
            <div className='all_movies_main_conatiner'>
                <h4 className='d-flex justtofy-content-center m-5'>Movies</h4>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 justify-content-center align-items-center g-4 ">

                    {/* <div className='all_movies_main_conatiner'> */}
                    {cardsData.map((movie, index) => (
                        <div className="col mb-4" key={index}>
                            {/* <div className="p-3" style={{ width: '100%' }}> */}
                            <div className="card" style={{ height: '100%', width: '100%', padding: '1rem' }}>
                                <img src={movie.Poster} className="card-img-top" alt="..." onError={(e) => { e.target.src = backgroundImage }} style={{ height: '16em', objectFit: 'fill' }} />
                                <div className="card-body">
                                    <h5 className="card-title"><span>Title:</span>{movie.Title} </h5>
                                    <p className="card-text"><span>Year:</span>{movie.Year}</p>
                                    <p className="card-text"><span>IMDB ID:</span>{movie.imdbID}</p>
                                    <p className="card-text"><span>Type:</span>{movie.Type}</p>
                                    <button className="btn" onClick={() => detailViewHandler(movie.imdbID)}>View Details</button>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                    ))}
                </div></div>
        </>
    );
}

export default All_Movies;
