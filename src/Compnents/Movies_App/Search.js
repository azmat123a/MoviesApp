import React, { useState } from 'react'
import './../../CSS/Movie_App/Search.css'
import { search_by_title } from '../../APIS/get_data'
import loader from './../Assets/loader.gif'
import { Loader } from '../Assets/Loader'
export const Search = (props) => {
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [plot, setPlot] = useState('Short')
    const [disable, setDisable] = useState(false)

    const searchHandler = () => {
        setDisable(true)
        search_by_title(title, year, plot).then(res => {
            setDisable(false)
            if (res.Response) {
                props.onSearch(res);
            }
            else {
                props.onFail(res);
            }
        }).catch(error => {
            setDisable(false)
            console.log(error);
        });
    }

    const handleReset = () => {
        // setData(null)
        setTitle('')
        setYear('')
        setPlot('Short')
        props.onReset(true);
    }
    return (
        <>
            <div className="container title_search d-flex justify-content-center" >
                <div className="row d-flex align-items-center ">
                    <div className="col-md-12 col-lg-2">
                        <div className="form-group">
                            <div className="form-floating mb-3">
                                <input type="string" className="form-control" id="floatingInput" placeholder='title' value={title} onChange={(e) => {
                                    setTitle(e.target.value)
                                }} />
                                <label htmlFor="floatingInput">Title</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-2">
                        <div className="form-group">
                            <div className="form-floating mb-3">
                                <input type="string" className="form-control search-input" id="floatingInput" placeholder='year' value={year} onChange={
                                    (e) => {
                                        setYear(e.target.value)
                                    }
                                } />
                                <label htmlFor="floatingInput">Year</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-2">
                        <div className="form-group">
                            <div className="form-floating mb-3">
                                <select className="form-select" id="floatingSelect" aria-label="Select Plot" value={plot} onChange={
                                    (e) => {
                                        setPlot(e.target.value)
                                    }
                                }>
                                    <option value="2021">Short</option>
                                    <option value="2020">Full</option>
                                </select>
                                <label htmlFor="floatingSelect">Plot</label>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-12 col-lg-6 d-flex btns">
                        <div className="form-group">
                            <button disabled={disable} type="button" className="btn btn-lg search_button" onClick={searchHandler}>Search</button>
                        </div>

                        <div className="form-group">
                            <button type="button" className="btn reset_button btn-lg" onClick={handleReset}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
            {
                disable && < Loader />
            }

        </>
    )
}
