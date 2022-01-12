function WeatherTable({forecast}) {
  return (
    <table style={{
      width: '100%',
      border: '1px solid black'
    }}>
      <thead>
        <tr>
          <th>Day</th>
          <th>Temperature</th>
          <th>Wind</th>
        </tr>
      </thead>
      <tbody>
        {forecast?.map(item => (
          <tr key={item.day}>
            <td style={{
              textAlign: 'center'
            }}>{item.day}</td>
            <td style={{
              textAlign: 'center'
            }}>{item.temperature}</td>
            <td style={{
              textAlign: 'center'
            }}>{item.wind}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default WeatherTable;