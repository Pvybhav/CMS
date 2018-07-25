import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";

const styles = props => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: props.spacing.unit * 2,
        textAlign: "center",
        color: props.palette.text.secondary,
        alignItems: "center",
    },
    grid: {
        alignItems: "center",
    },
    AppBar: {
        backgroundColor: "cadetblue",
        color: "yellow",
    }
});

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirm_password: "",
            showPassword: false,
            showConfirmPassword: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
        this.handleClickShowConfirmPassword = this.handleClickShowConfirmPassword.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }
    handleChange = prop => event => {
        this.setState({
            [prop]: event.target.value
        });
    };
    handleFirstNameChange = (e) => {
        this.setState({
            first_name: e.target.value
        });
    }
    handleLastNameChange = (e) => {
        this.setState({
            last_name: e.target.value
        });
    }
    handleEmailChange = (e) => {
        let email = e.target.value;
        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        console.log(emailPattern.test(email));
        this.setState({
            email: e.target.value
        },
        console.log(this.state.email)
        );
    }
    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        },
        console.log(this.state.password)
        );
    }
    handleConfirmPasswordChange = (e) => {
        this.setState({
            confirm_password: e.target.value
        },
        console.log(this.state.confirm_password)
        );
    }
    handleMouseDownPassword = e => {
        e.preventDefault();
    };
    handleMouseDownConfirmPassword = e => {
        e.preventDefault();
    };
    handleClickShowPassword = () => {
        this.setState(state => ({
            showPassword: !state.showPassword
        }));
    };
    handleClickShowConfirmPassword = () => {
        this.setState(state => ({
            showConfirmPassword: !state.showConfirmPassword
        }));
    };
    handleSignUp = (e) =>{
        this.setState(state => ({
            showPassword: false,
            showConfirmPassword: false
        }));
        console.log(this.state);
    };
    render(){
        const {
            classes
        } = this.props;
        let {
            showPassword,
            showConfirmPassword,
            password,
            email,
            first_name,
            last_name,
            confirm_password
        } = this.state;
        return(
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <AppBar position = "static" className = {classes.AppBar}
                        >
                            <Toolbar>
                                <Typography variant="title" color="inherit" className={classes.flex}>
                                    SignUp
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <Paper className={classes.paper}>
                            <form className={classes.container} noValidate autoComplete="off" >
                                <FormControl className = {
                                    classNames(classes.margin, classes.textField
                                    )} >
                                    <InputLabel htmlFor="adornment-password">First Name</InputLabel>
                                    <Input
                                        id="first_name"
                                        type="text"
                                        value={first_name}
                                        onChange = {
                                            this.handleFirstNameChange
                                        }
                                        endAdornment={
                                            <InputAdornment position="start">
                                                first name
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl><br /><br />
                                <FormControl className = {
                                    classNames(classes.margin, classes.textField
                                    )} >
                                    <InputLabel htmlFor="adornment-password">Last Name</InputLabel>
                                    <Input
                                        id="last_name"
                                        type="text"
                                        value={last_name}
                                        onChange = {
                                            this.handleLastNameChange
                                        }
                                        endAdornment={
                                            <InputAdornment position="start">
                                                last name
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl><br /><br />
                                <FormControl className = {
                                    classNames(classes.margin, classes.textField
                                    )} >
                                    <InputLabel htmlFor="adornment-password">Email ID</InputLabel>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange = {
                                            this.handleEmailChange
                                        }
                                        endAdornment={
                                            <InputAdornment position="start">
                                                email ID
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl><br /><br />
                                <FormControl className = {
                                    classNames(classes.margin, classes.textField
                                    )} >
                                    <InputLabel htmlFor="adornment-password">Password</InputLabel>
                                    <Input
                                        id="password"
                                        type = {
                                            showPassword ? "text" : "password"
                                        }
                                        value={password}
                                        onChange = {
                                            this.handlePasswordChange
                                        }
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="Toggle password visibility"
                                                    onClick={this.handleClickShowPassword}
                                                    onMouseDown={this.handleMouseDownPassword}
                                                >
                                                    {
                                                        showPassword ? < VisibilityOff /> : < Visibility />
                                                    }
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl><br /><br />
                                <FormControl className = {
                                    classNames(classes.margin, classes.textField
                                    )} >
                                    <InputLabel htmlFor="adornment-password">Confirm Password</InputLabel>
                                    <Input
                                        id="confirm_password"
                                        type={showConfirmPassword ? "text" : "password"}
                                        value={confirm_password}
                                        onChange = {
                                            this.handleConfirmPasswordChange
                                        }
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="Toggle password visibility"
                                                    onClick={this.handleClickShowConfirmPassword}
                                                    onMouseDown={this.handleMouseDownConfirmPassword}
                                                >
                                                    {
                                                        showConfirmPassword ? < VisibilityOff /> : < Visibility />
                                                    }
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                <br /><br /><br />
                                < Button variant = "contained"
                                    color = "primary"
                                    className = {
                                        classes.button
                                    } 
                                    onClick = {
                                        this.handleSignUp
                                    }
                                >
                                    SignUp
                                </Button>
                            </form>
                            <br />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.string
};

export default withStyles(styles)(SignUp);