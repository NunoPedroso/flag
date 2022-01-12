function WeatherCities({cities, setCity}) {
  return (
    <div>
      {cities.map(option => (
        <button style={{
          margin: 10,
        }} key={option} className='button' onClick={() => {
          setCity(option);
        }}>{option}</button>
      ))}
    </div>
  );
}

export default WeatherCities;