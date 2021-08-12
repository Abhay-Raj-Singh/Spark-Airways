import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { InputGroup, InputGroupText, InputGroupAddon } from 'reactstrap';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

class UpdateNews extends Component {
  //We need it to be a class component because the state of the form will change as our users enter data.
  // routeChange=()=> {
  //     let path = `UserProfile`;
  //     let history = useHistory();
  //     history.push(path);
  //   }
  constructor(props) {
    super(props);
    this.state = {
      name: this.user.name, //1
      gender: this.user.gender,
      phone: this.user.phone,
      address: this.user.address,
      age: this.user.age,
      password: this.user.password,
    };
  }
  user = JSON.parse(localStorage.getItem("user"));

  handleSubmit = (event) => {
    //1
    fetch(
      "http://localhost:6996/sparkairways/user/updateUser/" +
        localStorage.getItem("token"),
      {
        method: "PUT", //2
        body: JSON.stringify(this.state), //3
        headers: new Headers({
          "Content-Type": "application/json", //4
        }),
      }
    )
      .then(
        (response) => response.json() //5
      )
      .then((data) => {
        console.log(data);
        localStorage.setItem("user", JSON.stringify(this.state));
        // window.location.href="/UserProfile";
        this.props.history.push("/UserProfile");
      });
    event.preventDefault();

    console.log(this.state);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
       <Form onSubmit={handleForm}>
    <Grid container spacing={3}>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={6}>
            <Card className={classes.cardclass} style={{backgroundColor:'#DDDDFF'}}>
                <CardActionArea>
                    <CardMedia 
                        className={classes.media} 
                        image="https://wallpaperaccess.com/full/2112553.jpg"
                    />
                </CardActionArea><br/>

        <InputGroup>
            <InputGroupAddon addonType="prepend" style={{width:100}}>
            <InputGroupText style={{backgroundColor:'#5555FF', color:'white'}}>Date</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="YYYY-MM-DD" id="date"
              onChange={(e) => {
                setnews({ ...news, date: e.target.value });
              }}
            />
        </InputGroup><br/>
            
        <InputGroup>
            <InputGroupAddon addonType="prepend" style={{width:100}}>
            <InputGroupText style={{backgroundColor:'#5555FF', color:'white'}}>News</InputGroupText>
            </InputGroupAddon>
            <Input type="textarea" name="text" id="news" placeholder="Enter news here"  style={{height:100}}
              onChange={(e) => {
                setnews({ ...news, news: e.target.value });
              }}
            />
        </InputGroup><br/>

        <Grid container spacing={3}>
        <Grid item xs={8}>
        <InputGroup style={{justifyContent: 'center'}}>
            <Button type="submit" color="success" className="w-100">Add News</Button>{' '}
        </InputGroup>
        </Grid>
        
        <Grid item xs={4}>
        <InputGroup style={{justifyContent: 'center'}}>
            <Button type="reset" color="warning" className="w-100"
                onClick={() => {
                  setnews({ ...news, date: "", news: "" });
                }}
            >
            Clear
            </Button>{' '}
        </InputGroup>
        </Grid>
        
        </Grid>

    </Card>
    </Grid>
    </Grid>
    </Form>
      </div>
    );
  }
}

export default UpdateNews;
