import React, {Fragment, useEffect, useState} from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Error from "./components/Error";

function App() {
    //state of the form
    const [search, setSearch] = useState({
        city: "",
        country: ""
    });

    const {city, country} = search;

    const [request, saveRequest] = useState(false);
    const [result, saveResult] = useState({});
    const [error, setError] = useState(false);


    useEffect(() => {
        const requestApi = async () => {
            if (request) {
                const appId = "02eb2de95108f6b48cfc60612cb24936";
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
                const response = await fetch(url);
                const result = await response.json();
                saveResult(result);
                saveRequest(false);
                setError(result.cod === "404");
            }
        };
        requestApi();
    }, [request]);

    let component;

    if (error){
        component = <Error msg="No results found"/>
    }else{
        component =  <Weather result={result}/>
    }

    return (
        <Fragment>
            <Header title={"Weather App"}/>
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <div className="col m6 s12">
                            <Form saveRequest={saveRequest} search={search} setSearch={setSearch}/>
                        </div>
                        <div className="col m6 s12">
                            {component}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    );
}

export default App;
