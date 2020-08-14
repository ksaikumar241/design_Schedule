import React, { Component } from 'react'
import './Schedule.css';



 class Schedule extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            timetopic :[

            ],
            
           subtopic:[]
           


        }
        this.reftime= React.createRef()
        this.reftopic=React.createRef()
        this.refsubtopic=React.createRef()

    }
    
    onEnterValue =(event) =>{
      this.setState ({
        [event.target.name] : event.target.value,
        
        
      })
    }
    
    
    onSubmit= () =>{

      const newa = this.state.tim;
      const newb = this.state.top;
      const newsub =this.state.subtopic
      console.log(newa)
      console.log(newb)
      console.log(newsub)
      let per=this.state.timetopic
      per.push({time:newa,topic:newb,sub:newsub})
        this.setState ({
          
          timetopic :per
     
        })
        this.state.subtopic=[]   // waring point ( good to use this in this.setState())
         this.reftime.current.focus()
          this.reftime.current.value=''
          this.reftopic.current.value=''
        
      }


    onChangeValue = event => {
        this.setState({ value: event.target.value });
      };

    onAddItemsub = () => {
        this.setState(state => {
          const  subtopic = [...state.subtopic, state.value];
     
          return {
            subtopic,
            value: '',
          };
        });
        this.refsubtopic.current.focus()
          this.refsubtopic.current.value=''
      };
 
      

    

      onRemoveItem = i => {
        this.setState(state => {
          const subtopic = state.subtopic.filter((item, j) => i !== j);
     
          return {
            subtopic,
          };
        });
      };
      onRemoveMain = i => {
        this.setState(state => {
          const timetopic = state.timetopic.filter((item, j) => i !== j);
     
          return {
           timetopic,
          };
        });
      };


    




    render() {
        return(
          
            <div>

<div  className="dataenter">  

             
<label className="time"   > Enter the Time :</label>
    <input type="time"  name="tim" ref={this.reftime} className="time-enter" onChange={this.onEnterValue} ></input>

<label className="topic" > Enter the Topic :</label>
     <input type="text"  name="top" ref={this.reftopic} onChange={this.onEnterValue} className="topic-enter"  placeholder="Enter the Topic"/>





    <div className="subTopic">

            <label className="subtopic">Enter the sub Topic :</label>
            <input type="text" ref={this.refsubtopic} placeholder="Enter the sub topic" className="subtopic-enter" onChange={this.onChangeValue}  ></input>

          
            <button id="plus" onClick={this.onAddItemsub} className="btn btn-primary">+Add subTopic</button>
          
            <button type="submit" className="btn btn-primary" id="submit"   onClick={this.onSubmit}>Submit</button>
            



    </div> <div className="enterysub">{
                this.state.subtopic.map((subtopic,ind) =>
                {
                    return ( <div key={ind}> SubTopic : {subtopic} <button    className="btn btn-primary" type="button"  onClick={() => this.onRemoveItem(ind)} >
                    --
                  </button>
                    
                   
                    </div> )
                
                })
                
            }</div>    
</div>


<div className="chart">

<h1 className="header-Design"  >Design schedule :-</h1>

<h2 className="date-panel"> Date  :{this.props.date} </h2>  <h2 className="tittle-panel"> Tittle   : {this.props.tittle}</h2>

     {
       this.state.timetopic.map((timetopic,index) =>{
         return (<div key={index} className="timtop">  Time :  {timetopic.time}  &nbsp;  Topic : {timetopic.topic}   &nbsp;&nbsp;&nbsp;
                <button    class="btn btn-primary" type="button"  onClick={() => this.onRemoveMain(index)} >
                   -
                  </button>
      
{
            timetopic.sub.map((sub,ind) =>
            {
                return ( <div key={ind} className='subtop'> SubTopic : {sub} 
                
               
                </div> )
            
            })
            
        }
         
          
          </div>)
       })
     }
     
  


</div>
    




            </div>
        )
    }

 }
 export default Schedule



