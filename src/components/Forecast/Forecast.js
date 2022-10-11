import { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';
import * as React from 'react';

import ConditionDetails from '../ConditionDetails/ConditionDetails';



const Forecast = () => {
    
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    let [responseObj, setResponseObj] = useState({});
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    
    function getForecast(e) {
        e.preventDefault();
        
        if(city.length === 0){
            return setError(true);
        } 

        setError(false);
        setResponseObj({});
        setLoading(true);

        const uriEncodedCity = encodeURIComponent(city);
        
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b7ad66b1damshc70a924e9aa32e4p1b277ajsnf711005743f2',
                'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
            }
        };
        
        fetch(`https://open-weather13.p.rapidapi.com/city/${uriEncodedCity}`, options)
            .then(response => response.json())
            .then(response => {
                if (response.cod !== 200){
                    throw new Error()
                }
                setResponseObj(response);
                setLoading(false);
            })
            .catch(err => {
                setError(true);
                setLoading(false);
            });
        }

    return (
        <div className={classes.Wrapper}>
            <Conditions 
                responseObj={responseObj}
                error={error}
                loading={loading}
            />
            <div className={classes.Form}>
            <form onSubmit={getForecast}>
                <input
                    id="outlined-search" 
                    label="Enter City" 
                    type="text" 
                    size='small'                     
                    maxLength="50"
                    className={classes.textInput}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter City"
                />
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    <span>Fahrenheit</span>
                </label>
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    <span>Celcius</span>
                </label>
                <button variant="contained" size="medium" className={classes.Button} type="submit">
                    Search
                </button>
            </form>
            <ConditionDetails 
                responseObj={responseObj}
                error={error}
            />
            </div>
           
           

        </div>
    )
}

export default Forecast;