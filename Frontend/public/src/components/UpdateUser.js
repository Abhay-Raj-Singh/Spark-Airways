// import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import { Form, FormGroup, Label, Input, Button } from "reactstrap";
// import { Link, useHistory } from "react-router-dom";

// class UpdateUser extends Component {
//   //We need it to be a class component because the state of the form will change as our users enter data.
//   // routeChange=()=> {
//   //     let path = `UserProfile`;
//   //     let history = useHistory();
//   //     history.push(path);
//   //   }
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: this.user.name, //1
//       gender: this.user.gender,
//       phone: this.user.phone,
//       address: this.user.address,
//       age: this.user.age,
//       password: this.user.password,
//     };
//   }
//   user = JSON.parse(localStorage.getItem("user"));

//   handleSubmit = (event) => {
//     //1
//     fetch(
//       "http://localhost:6996/sparkairways/user/updateUser/" +
//         localStorage.getItem("token"),
//       {
//         method: "PUT", //2
//         body: JSON.stringify(this.state), //3
//         headers: new Headers({
//           "Content-Type": "application/json", //4
//         }),
//       }
//     )
//       .then(
//         (response) => response.json() //5
//       )
//       .then((data) => {
//         console.log(data);
//         localStorage.setItem("user", JSON.stringify(this.state));
//         // window.location.href="/UserProfile";
//         this.props.history.push("/UserProfile");
//       });
//     event.preventDefault();

//     console.log(this.state);
//   };

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Enter New Details</h1>
//         <Form onSubmit={this.handleSubmit} action="/UserProfile.js">
//           <FormGroup>
//             <Label for="name">Name</Label>
//             <Input
//               required
//               id="name"
//               type="text"
//               name="name"
//               placeholder="enter name"
//               onChange={this.handleChange}
//               defaultValue={this.user.name}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="gender">Gender</Label>
//             <Input
//               required
//               defaultValue={this.user.gender}
//               id="gender"
//               type="text"
//               name="gender"
//               placeholder="enter gender"
//               onChange={this.handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="phone">Phone no.</Label>
//             <Input
//               required
//               defaultValue={this.user.phone}
//               id="phone"
//               type="text"
//               name="phone"
//               placeholder="enter phone"
//               onChange={this.handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="address">Address</Label>
//             <Input
//               required
//               defaultValue={this.user.address}
//               id="address"
//               type="text"
//               name="address"
//               placeholder="enter address"
//               onChange={this.handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="age">Age</Label>
//             <Input
//               required
//               defaultValue={this.user.age}
//               id="age"
//               type="number"
//               name="age"
//               placeholder="enter age"
//               onChange={this.handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="password">Password</Label>
//             <Input
//               required
//               defaultValue={this.user.password}
//               id="password"
//               type="text"
//               name="password"
//               placeholder="enter password"
//               onChange={this.handleChange}
//             />
//           </FormGroup>

//           <Button type="submit"> Update</Button>
//         </Form>
//       </div>
//     );
//   }
// }

// export default UpdateUser;
