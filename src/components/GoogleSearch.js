import React, {useState} from 'react';

function Googletext(){

    const [text, setText] = useState("");

    const updateText = (event) => {
        const {value} =  event.target;
        setText(value);
    }

    const searchGoogle = () => {
        window.open(`https://google.com/search?q=${text}`)
    }

    const onEnter = (event) => {
        const {key} = event;
        if(key === "Enter") searchGoogle();
    }
    
    return (
        <div>
            <div >Google Search</div>
            <input type="text" value={text} onChange={updateText} placeholder="Fill in" onKeyPress={onEnter} />
            <div>
                <button onClick={searchGoogle} >Search</button>
            </div>
        </div>
    )
}

export default Googletext;