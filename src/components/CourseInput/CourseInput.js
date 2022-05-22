// import React, { useState } from "react";
// import "./CourseInput.css";
// import Button from "../../UI/Button";
// function CourseInput(props) {
//   const [enteredValue, setEnteredvalue] = useState("");
//   const goalInputChangeHandler = (event) => {
//     setEnteredvalue(event.target.value);
//   };
//   const formSubmitHandler = (event) => {
//     event.preventDefault();
//     props.onAddGoal(enteredValue);
//   };

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <div className="form-control">
//         <label>Course Goal</label>
//         <input type="text" onChange={goalInputChangeHandler}></input>
//       </div>
//       <Button type="submit">Add Me Daddy</Button>
//     </form>
    
//   );
// }
// export default CourseInput;

import React, { useState } from 'react';
import Button from "../../UI/Button";
// import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
