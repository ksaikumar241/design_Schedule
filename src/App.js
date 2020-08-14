import React, { Component } from 'react'
import './App.css';
import Schedule from './components/Schedule';
import './components/Schedule.css';


 class App extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
       date :'Enter date',
       tittle :'Enter tittle',
       d : 'Date ',
       t :' Tittle'
        
     }

   }
   



   onEnter = (event) => {

    this.setState ({
        [event.target.name] : event.target.value
    });
   }

   onDone =() => {
     this.setState ({
       d : this.state.date,
       t : this.state.tittle
     });
   }

   
  render() {
    return (
      <div className="App">
      
      <div className="up-panel">

      <label className="date"> Enter the date :</label>
      <input type="date"  name="date" className="date-enter"  onChange={this.onEnter} />
       
       <label className="tittle">Enter the Training Tittle :</label>
       <input type="text"  name="tittle" className="tittle-enter"  placeholder="Enter the Tittle" onChange= {this.onEnter} />
       
       <button type="submit" className="btn btn-primary" id="submit" onClick={this.onDone} >Submit</button>
     
      </div>
     

      <div  className="schedule-panel"> 
          <Schedule  date={this.state.d} tittle={this.state.t}/> 
        
      </div>
   
        
   
    </div>
    )
  }
}


export default App;

