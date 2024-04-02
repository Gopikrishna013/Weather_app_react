import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar'
import Cloud2 from './cloud2.png'
// import Cloud1 from './clouds1.png'

const App = () => {
    const [city, setCity] = useState('');
    const [result, setResult] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const [currentDay, setCurrentDay] = useState('');
    const [windSpeed, setWindSpeed] = useState('');
    const [humidity, setHumidity] = useState('');

    const changeHandler = (e) => {
        setCity(e.target.value);
        setResult(`Weather in ${e.target.value}...`);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dbea803f8ce4fa2e344a4e2b14d7e91d`)
            .then((response) => response.json())
            .then((data) => {
                const kelvin = data.main.temp;
                const celcius = kelvin - 273.15;
                setResult(`Temperature at ${city}\n is ${Math.round(celcius)}°C`);
                setWindSpeed(`Wind Speed: ${data.wind.speed} m/s`);
                setHumidity(`Humidity: ${data.main.humidity}%`);
            })
            .catch((error) => {
                console.log(error);
                setResult(`Weather data for ${city} not found.`);
                setWindSpeed('');
                setHumidity('');
            });

       
        const date = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        setCurrentDate(date.toLocaleDateString('en-US', options));
        setCurrentDay(date.toLocaleDateString('en-US', { weekday: 'long' }));

        setCity('');
    };

    const refreshHandler = () => {
        setResult('');
        setCurrentDate('');
        setCurrentDay('');
        setWindSpeed('');
        setHumidity('');
    };

    return (
        <>
         <Navbar/>

        <div className="container">
           
            <div className="cards" >
                <div className="card-body">
                    <h1 className="card-title">Weather Forecast App</h1>
                <img src={Cloud2} className='w-img' width={'100px'}/>
                    <form onSubmit={submitHandler}>
                        <div className="input-group">
                            <input className="input-field" type="text" name="city" placeholder="Enter city" onChange={changeHandler} value={city} />
                           <div> <button className="w-s-btn" type="submit"> Get Weather
                                {/* <i className="fa fa-search" id='icon'></i> */}
                            </button></div>
                            <div className="w-button" >
                        <button className='w-btn' onClick={refreshHandler}>
                            Clear Data
                        </button>
                    </div>
                        </div>
                    </form>

                    <br /><br />
                    <div className='W-result'>
                    <p className="date"> {currentDate}</p>
                        <h1 className='w-Tresult'>{result}</h1>
                        <p className='w-wind'>{windSpeed}</p>
                        <p className='w-hum'> {humidity}</p>
                        {/* <p className="date">Date: {currentDate}</p> */}
                        {/* <p className="day">Day: {currentDay}</p> */}
                    </div>
                    <div className="w-w" >
                        {/* <button className='' onClick={refreshHandler}> */}
                             {/* <img src={Cloud1} className='ww-img' width={'100px'}></img> */}
                            <p className='P-w'>.</p>

                        {/* </button> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default App;



































// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
