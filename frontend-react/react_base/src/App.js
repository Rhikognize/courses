
import './App.css';
import axios from 'axios'
import React from 'react'
class App extends React.Component{
  state = {
    details: []
  }
  componentDidMount(){
    let data;

    axios.get('http://localhost:8000/wel/')
    .then(res => {
      data = res.data
      this.setState({
        details : data
      });
    })
    .catch(err => {})
  }
  render(){
    return(
      <div>
        {this.state.details.map((detail) => (
          <div key={detail.id}>
            <div>
              <div>
            <h1>{detail.title}</h1>
            <p>Price: {detail.price}</p>
            <p>Students: {detail.students_qty}</p>
            <p>Category: {detail.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  

}
export default App;



