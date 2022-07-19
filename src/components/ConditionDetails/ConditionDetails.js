import React from "react";
import classes from './ConditionDetails.module.css'


const ConditionDetails = (props) =>{
    return(
        <div>
            {props.responseObj.cod === 200 ?
            <div className={classes.Wrapper}>
                <p className={classes.Title}>Weather Details:</p>
                <div className={classes.Wrapper__Container}>
                    <p>feels like {Math.round(props.responseObj.main.feels_like)}°</p>
                    <p>{props.responseObj.weather[0].description}</p>
                    <p>humidity {props.responseObj.main.humidity}%</p>
                    <p>wind speed {props.responseObj.wind.speed} km/h</p>
                </div>
            </div>
           : null
           }
            {props.responseObj.cod !== 200 && props.error !== true ? 
            <div className={classes.Wrapper}>
                <p className={classes.Title}>Weather Details:</p>
                <div className={classes.Wrapper__Container}>
                    <p>feels like 71°</p>
                    <p>Clear Sky</p>
                    <p>humidity 43%</p>
                    <p>wind speed 3km/h</p>
                </div>
            </div>
           : null
           }

        </div>
    )
}

export default ConditionDetails;