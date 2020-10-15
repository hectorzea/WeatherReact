import React, {useState} from 'react';
import Error from "./Error";
import PropTypes from 'prop-types';

const Form = ({saveRequest, search, setSearch}) => {

    const [error, setError] = useState(false);

    //extract the city and the country
    const {city, country} = search;

    //handler to take the elements to the state

    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        //validate
        if (city.trim() === "" || country.trim() === "") {
            setError(true);
            return;
        }
        setError(false);
        //pass to app comp
        saveRequest(true);
    };

    return (

        <form onSubmit={handleSubmit}>
            {error ? <Error msg="All fields are required"/> : null}
            <div className="input-field col s12">
                <input type="text" name="city" id="city" value={city} onChange={handleChange}/>
                <label htmlFor='city'> City: </label>
            </div>
            <div className="input-field col s12">
                <select name="country" id="country" onChange={handleChange} value={country}>
                    <option value="">---Select a country---</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                    <option value="VE">Venezuela</option>
                </select>
                <label htmlFor='country'> Country: </label>
            </div>
            <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >Search Weather
                </button>
            </div>
        </form>
    );
};

Form.propTypes = {
    search: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired,
    saveRequest: PropTypes.func.isRequired,
};


export default Form;
