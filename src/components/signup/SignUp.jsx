import React, { useEffect,useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import xhrService from "../../services/xhr.service";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function SignUp(props) {
  const classes = useStyles();
  const [firstName, setFirstName] =useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] =useState('');
  const [email, setEmail] = useState('');
  const [submitAction, setSubmitAction] =useState(false);

  useEffect(() => {
    async function register() {
        if(!submitAction)  {
            return;
        }

        let data = {};
        try {
            ({data} = await xhrService.post('http://localhost:9000/hirewheels/v1/users', {
                firstName,
                lastName,
                email,
                password,
                mobileNumber,
                confirmPassword
            }));
            toast.success(`User Signed Up, ${data.name}`)
            props.history.push('/signin');
        } catch(ex) {
            toast.error(ex.message);
        } finally {
            setSubmitAction(false);
        }
    
    }

    register()
    
  }, [submitAction]);

  const submitForm = (event) => {
    event.preventDefault();
    setSubmitAction(true);
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="FirstName"
                name="firstName"
                autoComplete="name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="LastName"
                name="lastName"
                autoComplete="name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="number"
                label="Contact Number"
                type="number"
                id="number"
                autoComplete="contact-number"
                value={mobileNumber}
                onChange={(event) => setMobileNumber(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="confirmPassword"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </Grid>

            {/* <Grid item xs={12}>
                <FormLabel component="persona">Persona</FormLabel>
                <RadioGroup aria-label="persona" name="persona" value={persona} onChange={(event) => setPersona(event.target.value)}>
                    <FormControlLabel value="mentor" control={<Radio />} label="Mentor" />
                    <FormControlLabel value="mentee" control={<Radio />} label="Mentee" />
                </RadioGroup>
            </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitForm}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/singIn">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default SignUp














































































































// import React, { Component } from 'react'

// export class SignUp extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       firstName: "",
//       lastName: "",
//       mobileNumber: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//       fnerr: "",
//       lnerr:"",
//       emailErr:'',
//       perr:''
//     };
//   }
//   handleFirstName = (event) => {
//     this.setState({ firstName: event.target.value });
//     if (event.target.value === "") {
//       this.setState({ fnerr: "First Name is required" });
//     }
//     if (event.target.value !== "") {
//       this.setState({ fnerr: "" });
//     }
//   };
//   handleLastName = (event) => {
//     this.setState({lastName: event.target.value });
//     if (event.target.value === "" ||event.target.focus) {
//       this.setState({ lnerr: "Last Name is required" });
//     }
//     if (event.target.value !== "") {
//       this.setState({ lnerr: "" });
//     }
//   };
//   handleEmail=(event)=>{
//         this.setState({ email: event.target.value });
//         if (event.target.value=== "") {
//           this.setState({ emailErr: "Email is required" });
//         }
//        if (event.target.value !== "") {
//           this.setState({ emailErr: "" });
//         }
//   }
//   handleMobileNumber=(event)=>{
//     this.setState({mobileNumber:event.target.value})
//   }
//   handlePassword=(event)=>{
//     this.setState({ password: event.target.value });
//     if(event.target.value===""){
//       this.setState({perr:"password is required"})
//     }
//     if(event.target.value !== event.target.pattern){
//         this.setState({
//           perr:
//             "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!",
//         });
//     }
//     if(event.target.value !==''){
     
//       this.setState({perr:''})
//     }

//   }
//   render() {
//     return (
//       <div>
//         <React.Fragment>
//           <div className="container">
//             <div className="row">
//               <div className="col-md-11 mx-auto">
//                 <div className="card">
//                   <div className="card-header text-center">
//                     <h2>Sign Up</h2>
//                   </div>
//                   <div className="card-body">
//                     <form className="form" onSubmit={this.handleSubmit}>
//                       <div className="row form-group">
//                         <div className="col-md-3">
//                           <label>
//                             <strong>First Name:</strong>{" "}
//                           </label>
//                         </div>
//                         <div className="col">
//                           <input
//                             type="text"
//                             className="form-control"
//                             formControlName="firstName"
//                             onhandle={this.handleFirstName}
//                             value={this.state.firstName}
//                           />
//                           <span className="text-danger">
//                             {this.state.fnerr}
//                           </span>
//                         </div>
//                       </div>
//                       <div className="row form-group">
//                         <div className="col-md-3">
//                           <label>
//                             <strong>Last Name:</strong>
//                           </label>
//                         </div>
//                         <div className="col">
//                           <input
//                             type="text"
//                             className="form-control"
//                             formControlName="lastName"
//                             onhandle={this.handleLastName}
//                             value={this.state.lastName}
//                           />
//                           <span className="text-danger">
//                             {this.state.lnerr}
//                           </span>
//                         </div>
//                       </div>
//                       <div className="row form-group">
//                         <div className="col-md-3">
//                           <label>
//                             <strong>Email ID:</strong>
//                           </label>
//                         </div>
//                         <div className="col">
//                           <input
//                             type="email"
//                             className="form-control"
//                             formControlName="email"
//                             onhandle={this.handleEmail}
//                             value={this.state.email}
//                           />
//                           <span className="text-danger">
//                             {this.state.emailErr}
//                           </span>
//                         </div>
//                       </div>
//                       <div className="row form-group">
//                         <div className="col-md-3">
//                           <label>
//                             <strong>Mobile number:</strong>
//                           </label>
//                         </div>
//                         <div className="col">
//                           <input
//                             type="text"
//                             className="form-control"
//                             formControlName="mobile"
//                             onhandle={this.handleMobileNumber}
//                             value={this.state.mobileNumber}
//                           />
//                         </div>
//                       </div>
//                       <div className="row form-group">
//                         <div className="col-md-3">
//                           <label>
//                             <strong>Password:</strong>
//                           </label>
//                         </div>
//                         <div className="col">
//                           <input
//                             type="password"
//                             required
//                             className="form-control"
//                             formControlName="password"
//                             onhandle={this.handlePassword}
//                             value={this.state.password}
//                             pattern="/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/"
//                           />
//                           <span className="text-danger">{this.state.perr}</span>
//                         </div>
//                       </div>
//                       <div className="row form-group">
//                         <div className="col-md-3">
//                           <label>
//                             <strong>Confirm Password:</strong>
//                           </label>
//                         </div>
//                         <div className="col">
//                           <input
//                             type="password"
//                             required
//                             className="form-control"
//                             formControlName="confirmPassword"
//                             onhandle={this.handleConfirmPassword}
//                             value={this.confirmPassword}
//                           />
//                         </div>
//                       </div>
//                       <div className="row form-group justify-content-center">
//                         <button type="submit" className="btn btn-primary">
//                           Sign Up
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </React.Fragment>
//       </div>
//     );
//   }
// }

// export default SignUp


