
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
      console.log(res.data);
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
        {this.state.details.map((detail, id) => (
          <div key={id}>
            <h1>{detail.title}</h1>
            <p>Price: {detail.price}</p>
            <p>Students: {detail.students_qty}</p>
            <p>Category: {detail.category}</p>
          </div>
        ))}
      </div>
    );
  }
  

}
export default App;



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

