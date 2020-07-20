import React, { useState } from 'react';
import './MoodToggler.css'

function TooglerMood(){
    const [isHappy, setIsHappy] = useState(true);
    const changeMood = () => setIsHappy(!isHappy);
    const styles = {color: isHappy ? 'green' : 'red'};
    return (
        <div className="MoodToggler">
            <h3  tyle={styles}>{isHappy ? ":)" : ":("}</h3>
            <button onClick={changeMood}>Change mood</button>
        </div>
    )
}

export default TooglerMood;