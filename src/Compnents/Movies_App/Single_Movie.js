import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import { BsStarHalf } from 'react-icons/bs'
import './../../CSS/Movie_App/Single_Movie.css'

export const Movie = (props) => {
    const { Title, Year, Released, Poster, Ratings, Director, Genre, Writer, imdbID, Plot } = props;
    // console.log("ok", parseFloat(Ratings[0].Value))
    return (
        < >
            <br />

            <div className='d-flex justify-content-center main_movie'>
                <div className="row d-flex justify-content-center ">
                    <div className="col-md-12 col-lg-6 img">
                        <img src={Poster} alt={Title} />
                    </div>
                    <div className="col-md-12 col-lg-6 text-white des">
                        <h4 className="card-title">{Title}</h4>
                        <h6><span>Year:</span> {Year}</h6>
                        <h6><span>Released:</span>{Released}</h6>
                        <h6><span>Genre:</span>{Genre}</h6>
                        <h6><span>Director:</span>{Director}</h6>
                        <h6><span>Writer:</span>{Writer}</h6>
                        <h6><span>imdb ID:</span>{imdbID}</h6>
                        <span className='d-flex'>
                            {Ratings.length > 0 ? Ratings[0].Value : 'N/A'}
                            {Ratings.length > 0 && <RatingStar rating={parseFloat(Ratings[0].Value)} />}
                        </span>

                        <p><span>Plot:</span>{Plot}</p>
                    </div>
                </div>

            </div>
        </>
    );
};

const RatingStar = ({ rating }) => {
    const filledStars = Math.floor(rating);
    const halfFilledStar = rating - filledStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - filledStars - halfFilledStar;

    return (
        <div className="rating">
            {[...Array(filledStars)].map((_, i) => (
                <BsStarFill key={i} className="filled" />
            ))}
            {[...Array(halfFilledStar)].map((_, i) => (
                <BsStarHalf key={i} className="filled" />
            ))}
        </div>
    );
};