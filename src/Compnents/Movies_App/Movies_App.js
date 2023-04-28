import React, { useEffect, useState } from 'react'
import backgroundImage from '../Assets/pexels-skyler-ewing-4598190.jpg';
import { All_Movies } from './All_Movies';
import Header from './Header'
import { Movie } from './Single_Movie'
import { Search } from './Search'

export default function Movies_App() {
  const [movieData, setMovieData] = useState(null);
  const [err, setErr] = useState(null);
  const [display, setDisplay] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setErr(null)
      if (setErr) {
        setErr(null)
        setDisplay(null)
      }
    }, 5000);
  }, [err]);

  const handleSearch = (data) => {
    setMovieData(data.res);
    setDisplay(data.display)
  };

  const handleFail = (data) => {
    setErr(data.res)
    setDisplay(data.display)
  };
  const handleReset = (status) => {
    if (status) {
      setMovieData(null)
      setErr(null)
      setDisplay(null)
    }
  };

  const handleSetDetail = (data) => {
    setMovieData(data.res);
    setDisplay(data.display)
  };

  return (
    <div className='main_app_container' style={{ position: 'relative', background: 'rgb(0, 0, 0)' }}>
      <Header style={{ zIndex: 2 }} />
      <div style={{ position: 'relative', width: '100%', height: '100%', padding: '1em' }} className='main_app_bg'>
        <img src={backgroundImage} alt="Background Image" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: .3, zIndex: 1, objectFit: 'contain' }} />
        {/* Single movie */}
        <div style={{ position: 'relative', zIndex: 2 }} className='container'>
          <Search onSearch={handleSearch} onFail={handleFail} onReset={handleReset} />
          {display === 'Single' ? <Movie {...movieData} /> : display === 'All' ? <All_Movies data={movieData} onDetailView={handleSetDetail} /> : display === 'error' &&
            <div className="alert alert-danger" role="alert">{err}</div>}
        </div>
      </div>
    </div >
  )
}
