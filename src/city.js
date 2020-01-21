import React from 'react';
import './App.css';

class City extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      city: false,
      temp: false,
      hum: false,
    }
    this.city = '';
  }



  handleClick = () => {
    const city = this.state.city;
    fetch(`http://api.weatherstack.com/current?access_key=9df2b77e9540b105923afd9d6316aa53&query=$vienna&units=m`)
    .then (response => response.json())
    .then (resp => {
      console.log(resp)
      console.log(city)
         this.setState({
          city: resp.location.name,
          temp: resp.current.temperature,
          hum: resp.current.humidity,
        })
     
      }); 
      /* .catch ((error) => {
        console.log(error)
      }) */
    }

    handleInput = (event) => {
      const city = event.target.value
      
        this.city= city;
     
    }

    handleSubmit = (event) => {
      event.preventDefault();
    }


  render () {
    return (
      <div className="App">
        <div className='container'>
          <div className='start'>
            <button type='button' className='start-btn' onClick={this.handleClick} value='start'>Start</button>
          </div> 
         {/*  <div>
            <input type="text"  onChange={this.handleInput} placeholder='City ...' />
          </div> */}
          {this.state.city  && 
          <div className='display'>
            <h3>{this.state.city}</h3>
            <div className="current">
              <div className="temp">
                <h5>Temperature</h5>
                <div className="state">{this.state.temp} °C</div>
              </div>
              <div className="hum">
                <h5>Humidity</h5>
                <div className="state">{this.state.hum} %</div>
              </div>
            </div>          
          </div>}  
        </div>
      </div>
    );
  }
  
}

export default City;
