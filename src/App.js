import './App.css';
import { useState, useEffect } from 'react';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempAndDetails from './components/TempAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/WeatherService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [query, setQuery] = useState({q:'london'});
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : 'current location';
      toast.info(`Fetching weather for ${message}`);
      await getFormattedWeatherData(query, units).then(data => {
        toast.success(`Successfully Fetched weather for ${message}`);
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units])

const formatBackground = () => {
  if(!weather) return 'bg-gradient-to-br from-cyan-700 to-blue-700';
  const threshold = units === 'metric' ? 20 : 60;
  if(weather.temp <= threshold) return 'bg-gradient-to-br from-cyan-700 to-blue-700';
  return 'bg-gradient-to-br from-yellow-700 to-orange-700';
}

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData("weather", {q: 'london'});
    console.log(data);
  };
  fetchWeather();
  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-grey-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} setUnits={setUnits} units={units}/>

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
      <TempAndDetails weather={weather} />
      <Forecast title="hourly forecast" items={weather.hourly}/>
      <Forecast title="daily forecast" items={weather.daily}/>
      </div>
      )}
      <ToastContainer autoClose={3000} theme='colored' newestOnTop={true} />
    </div>
  );
}

export default App;
