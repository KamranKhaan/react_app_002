import React, { useState } from 'react';
import './Room.css';

function Room() {
   
    let [ isLit, setLit ] = React.useState(false);
    let [ isTemp, setTemp ] = React.useState(20);

    return (
       <div className={`room ${isLit? "lightColor" : "darkColor"}`}>
           <div className="insideRoom">
                <span id="light"><u>Press SWITCH Button :: <strong> {isLit? "Off the LIGHTS" : "On the LIGHTS"}</strong></u></span>
                <br/>
                <button onClick={ ()=> {
                            setLit(!isLit);
                    }}>Switch!</button>
                <hr/>
                <span id="temp">Set Room Temperature <strong>Below 41*C</strong> :: Otherwise You will get an Alert!
                <br/>              <u>Right Now its {isTemp}*C</u> </span>
                <br/> 
                <button onClick={ ()=> {
                        if (isTemp <=40) {
                            setTemp(2.25+isTemp);
                        } else {
                            alert("Its getting HOT please RESET the TEMPERATURE! \nBy clicking Reset Button!");
                        }
                    }}>Set Temp!</button>
                <hr/>
                <span id="reset"><u>Please Set the Room to the Initial State</u> </span>
                <br/> 
                <button onClick={ ()=> {
                            setLit(false);
                            setTemp(20);
                    }}>Reset</button>
                <hr/>
            </div>
        </div>
    );
}

export default Room;