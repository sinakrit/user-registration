
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
export default function Form1() {
  
const [startDate, setStartDate] = useState(new Date());

return(
<div>
  <DatePicker
          dateFormat="dd/MM/yy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
</div>
)}



// import React, { useState } from "react";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// export default function TableDatePicker() {

//   const [date= undefined, setDate] = useState(new Date());
 
  
//     return (
//       <div>
//         <DatePicker selected={date} onChange={date => setDate(date) } />
//       </div>
      
//     );
//   }







// import React, { Component } from 'react';
// import DatePicker from 'react-datepicker';
 
// import "react-datepicker/dist/react-datepicker.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// class Test extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       startDate: null 
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.onFormSubmit = this.onFormSubmit.bind(this);
//   }
//   handleChange(date) {
//     this.setState({
//       startDate: new Date()
//     })
//   }
//   onFormSubmit(e) {
//     e.preventDefault();
//     console.log(this.state.startDate)
//   }
 
//   render() {
//     return (

//           <DatePicker
//               selected={ this.state.startDate }
//               onChange={ this.handleChange }
//               name="startDate"
//               dateFormat="mm/dd/yyyy"
//           />

//     );
//   }
  
// }
// export default Test;