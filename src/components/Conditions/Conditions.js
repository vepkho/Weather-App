import React from "react"
import classes from './Conditions.module.css'
import CircularProgress from '@mui/material/CircularProgress';


const Conditions = (props) => {

    let currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');

    return(
        <div className={classes.Wrapper}>
            {props.error && <small className={classes.Error}>Please enter a valid city.</small>}
            {props.loading && <CircularProgress className={classes.CircularProgress}/>}
            {props.responseObj.cod === 200 ?
            <div className={classes.Wrapper__Container}>
                <p className={classes.Temperature}>{Math.round(props.responseObj.main.temp)}°</p>
                <div>
                    <h2 className={classes.Name}>{props.responseObj.name}</h2>
                    <p className={classes.Date}>{currentDate}</p>
                </div>
            </div>
           : null
           }
            {props.responseObj.cod !== 200 && props.error !== true ?
            <div className={classes.Wrapper__Container}>
                <p className={classes.Temperature}>75°</p>
                <div>
                    <h2 className={classes.Name}>Tbilisi</h2>
                    <p className={classes.Date}>{currentDate}</p>
                </div>
            </div>
           : null
           }
        </div>
    )
}

export default Conditions;