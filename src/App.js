import React, { useState } from 'react';
import { fetchData } from './api';
import './App.css';

const App = () => {
    const [quote, setQuote] = useState('')


    const handleChange = () => {
        fetchData()
            .then((advice) => setQuote(advice))
                .catch(console.error('Unable to fetch data'))
    }

    return (
        <div className="app">
            <div className="card">
                <h1 className="heading">{quote}</h1>
                <button className="button" onClick={handleChange}>
                    <span>ADVICE ME!</span>
                </button>
            </div>
        </div>

    )
}

export default App;

