import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({result}) => {
    const {name, main} = result;

    if (!name) return null;

    const kelvin = 273.15;

    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>The weather of {name} is </h2>
                <p className="temperatura">
                    {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span> °C</span>
                </p>
                <p>
                    Max Temperature {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span> °C</span>
                </p>
                <p>
                    Min Temperature {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span> °C</span>
                </p>
            </div>
        </div>
    );
};

Weather.propTypes = {
  result: PropTypes.object.isRequired,
};

export default Weather;
