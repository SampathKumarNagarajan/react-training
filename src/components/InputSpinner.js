import React, {useState, useEffect} from 'react';

const InputSpinner = (props) => {

    const [count, setCount] = useState(1);

    const handleClick = (e) => {
        if(e.target.value === "-" && count !== 1) 
            setCount(count => count-1)
        else{ 
            if(e.target.value === "+")
                setCount(count => count+1)
        }
    }

    const handleChange = (e) => {
        e.target.value = count
    }

    useEffect(() => {
        props.getCount(count);
    },[count]);

    return(
        <div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <input type="button" className="btn btn-primary plus" value="-" onClick={handleClick}/>
                </div>
                <input type="text" className="form-control" placeholder="No of Images" className="input-spinner" value={count} onChange={handleChange}/>
                <div className="input-group-append">
                    <input type="button" className="btn btn-primary minus" value="+" onClick={handleClick}/>
                </div>
            </div>
        </div>
    )
}

export default InputSpinner;