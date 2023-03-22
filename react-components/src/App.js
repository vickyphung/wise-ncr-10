
//https://ps-wise-course.herokuapp.com/18-week/mod-2/week-10/day-2/slides

import ConditionalRender from './components/ConditionalRender'
import Greeting from './components/Greeting'
import { IsEven } from './components/IsEven';
import Styled from './components/Styled';
import Destructure from './components/Destructure';
import './App.css';

function App() {

//////////////////////////////////////
//props.children/////////////////////
/////////////////////////////////////

  // const Container = (props) => {
  //   const style = {
  //     width: "90%",
  //     margin: "auto",
  //     border: "1px solid blue"
  //   }
  //   return <div style={style}> {props.children} </div>
  // }


/////////////////////////////////////
//Destructuring Props///////////////
////////////////////////////////////

const props = {
    name: "Arthur Bernier",
    age: 35,
    website: "deeperThanCode.com"
    
}

  return (
    <div className="App">
      <h1>WISE!</h1>
      {/* <Styled /> */}
      {/* <ConditionalRender result={'good'}/> */}
      {/* <Greeting isLoggedIn={true} /> */}
      {/* <IsEven number={14}/> */}
      {/* <Container><h1>Hello World</h1></Container> */}

      <Destructure name={'vicky'} age={21} website={'portfoliowithbear.netlify.app'}/>

      <Destructure {...props}/>

    </div>
  );
}




export default App;



