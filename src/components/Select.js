import React from 'react';
import './select.css';


const Select = (props) => {
    
    const handleChange = (event) => {
        props.onSelect(event.target.value);
    }
    const getLoadingView = () => {
        return <div className="loading"><img className="loading-gif" alt="Loading..." src={require('../assets/loading.gif')}/></div>
    }
    const getErrorView = () => {
        return alert('Informacion no disponible')
    }
    const getSelectView = () => {
        return (
            <select onChange={handleChange}>
                {props.breedsList.map((breed, index) => {
                    return(
                        <option value={breed} key={index}>{breed}</option>
                    );
                })}
            </select>
        );
    }
    return(
        <div className="select-container">
        {props.breedsList ? getSelectView() : getLoadingView()}
        {props.isError ? getErrorView() : null}
        </div>
    );
}

export default Select;