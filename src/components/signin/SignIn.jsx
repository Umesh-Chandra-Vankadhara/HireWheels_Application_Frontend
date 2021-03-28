
import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import Copyright from "./Copyright";
import { toast } from "react-toastify";
import authService from '../../services/auth.service';
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn(props) {
  const classes = useStyles();

  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [submitAction, setSubmitAction] = React.useState(false);

  // useEffect(() => {
  //     if(authService.isLoggedIn()) {
  //       props.history.push('/my-courses');
  //     }
  // }, []);

  useEffect(() => {
    async function doAuth() {
        if(!submitAction)  {
            return;
        }

        try {
            let {data} = await authService.doAuth(email, password);
            toast(`Welcome back, ${data.firstName},${data.wallet}`,{autoclose:false});
            props.history.push('/home');
            window.location.reload();
        } catch(ex) {
            
        } finally {
            setSubmitAction(false);
        }
    }

    doAuth()
    
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
          Sign in
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
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
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitForm}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link to="signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>
  );
}

export default SignIn

















































































// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import authService from "../../services/auth.service";

// function SignIn(props) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [submitAction, setSubmitAction] = useState(false);
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   useEffect(() => {
//     const login = async function () {
//       if (!submitAction) {
//         return;
//       }
//       try {
//         let { data } = await authService.doAuth(email, password);
//         toast.success(`Welcome back,${data.firstName}`);
//         props.history.push('/home')
//         window.location.reload();
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setSubmitAction(false);
//       }
//     };
//     login();
//   }, [submitAction]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setSubmitAction(true);
//   };
//   const inputEmail = (event) => {
//     if (event.target.value === "") {
//       setEmailError("Email is required");
//       setEmail("");
//     }
//     if (event.target.value !== "") {
//       setEmail(event.target.value);
//       setEmailError("");
//     }
//   };
//   const inputPassword = (event) => {
//     if (event.target.value === "") {
//       setPasswordError("Password is required");
//       setPassword("");
//     }
//     if (event.target.value !== "") {
//       setPassword(event.target.value);
//       setPasswordError("");
//     }
//   };
//   return (
//     <React.Fragment>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-11 mx-auto">
//             <div className="card">
//               <div className="card-header text-center">
//                 <h2>Sign In</h2>
//               </div>
//               <div className="card-body">
//                 <form className="form">
//                   <div className="row form-group">
//                     <div className="col-md-3">
//                       <label>
//                         <strong>Email ID:</strong>
//                       </label>
//                     </div>
//                     <div className="col">
//                       <input
//                         type="text"
//                         required
//                         id="email"
//                         className="form-control"
//                         name="email"
//                         value={email}
//                         onChange={inputEmail}
//                       />
//                       <span className="text-danger">{emailError}</span>
//                     </div>
//                   </div>
//                   <div className="row form-group">
//                     <div className="col-md-3">
//                       <label>
//                         <strong>Password:</strong>
//                       </label>
//                     </div>
//                     <div className="col">
//                       <input
//                         type="text"
//                         required
//                         id="password"
//                         className="form-control"
//                         name="password"
//                         value={password}
//                         onChange={inputPassword}
//                       />
//                       <span className="text-danger">{passwordError}</span>
//                     </div>
//                   </div>

//                   <div className="row form-group justify-content-center">
//                     <button
//                       type="submit"
//                       onClick={handleSubmit}
//                       className="btn btn-primary"
//                     >
//                       Submit
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }

// export default SignIn;
