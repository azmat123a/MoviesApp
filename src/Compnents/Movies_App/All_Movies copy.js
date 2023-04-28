import React from 'react'
import backgroundImage from '../Assets/pexels-skyler-ewing-4598190.jpg';

export const All_Movies = () => {
    return (

        
        <div className="card" style={{ height: '100%', width: '100%', padding: '1rem' }}>
            <img src={backgroundImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary" onClick={(e) => {
                    console.log(e.target)
                }}>View Details</a>
            </div>
        </div>
    );
}
