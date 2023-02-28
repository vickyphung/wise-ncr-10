import ConditionalRender from './components/ConditionalRender'
// import Greeting from './components/Greeting'
import { IsEven } from './components/IsEven';
import Styled from './components/Styled';
import Destructure from './components/Destructure';

import './App.css';

function App(props) {

  const Container = (props) => {
    const style = {
      width: "90%",
      margin: "auto",
      border: "1px solid blue"
    }
    return <div style={style}> {props.children} </div>
  }

  return (
    <div className="App">

      <h1>WISE!</h1>

      {/* <Styled /> */}

      {/* <ConditionalRender result={'good'}/> */}

      {/* Return statement within an if block */}
      {/* <Greeting isLoggedIn={true} /> */}
      {/* <IsEven number={14}/> */}
      {/* <Destructure {...props} /> */}
  
      <Container><h1>Hello World</h1></Container>

    </div>
  );
}




export default App;



