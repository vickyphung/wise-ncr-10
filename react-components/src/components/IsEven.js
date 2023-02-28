/////////////////////////////////////////////////////////
//Return Statement within an if Block ///////////////////
/////////////////////////////////////////////////////////

// export const IsEven = props => {
//     if (props.number % 2 === 0) {
//       return <h1> It is even </h1>
//     } else {
//       return <h1>It is odd</h1>
//     }
//   }


/////////////////////////////////////////////////////////
//Single Return Statement, If assigns value to a variable
/////////////////////////////////////////////////////////

// export const IsEven = (props) =>{
//     let result
  
//     if (props.number % 2 === 0) {
//       result = <h1> It is even </h1>
//     } else {
//       result = <h1>It is odd</h1>
//     }
  
//     return result
//   }


/////////////////////////////////////////////////////////
//Ternary
//////////////////////////////////////////////////////

//   export const IsEven = props => {
//     return props.number % 2 === 0 ? <h1> it is even </h1> : <h1> it is odd </h1>
//   }

//////////////////////////////////////////////////////
//   Returning a Ternary Operator but parts stored in variables
//////////////////////////////////////////////////////

export const IsEven = props => {
    const condition = props.number % 2 === 0
  
    const ifTrue = () => <h1> it is even </h1>
  
    const ifFalse = () => <h1> it is odd </h1>
  
    return condition ? ifTrue() : ifFalse()
  }