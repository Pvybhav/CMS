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
import Checkbox from "@material-ui/core/Checkbox";

const styles = props => ({
    root: {
        flexGrow: 1,
        // backgroundColor: "cyan",
        // overflow: "hidden",
        // backgroundSize: "cover",
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

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            showPassword: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
        this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    handleChange = prop => event => {
        this.setState({
            [prop]: event.target.value
        });
    };
    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPassword = () => {
        this.setState(state => ({
            showPassword: !state.showPassword
        }));
    };
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
    handleLogin = (e) =>{
        console.log(this.state);
        // this.props.history.push("/home");
    }
    render(){
        const {
            classes
        } = this.props;
        let {
            showPassword,
            password,
            email
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
                                    Login
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <Paper className={classes.paper}>
                            <form className={classes.container} noValidate autoComplete="off" >
                                <FormControl className = {
                                    classNames(classes.margin, classes.textField
                                    )} >
                                    <InputLabel htmlFor="adornment-password">Email ID</InputLabel>
                                    <Input
                                        id="login_email"
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
                                        id="login_password"
                                        type={showPassword ? "text" : "password"}
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
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                <br /><br /><br />
                                Login as Admin?
                                <Checkbox color="primary" onClick={console.log("hi")}/>
                                < Button variant = "contained"
                                    color = "primary"
                                    className = {
                                        classes.button
                                    } 
                                    onClick={this.handleLogin}
                                >
                                    Login 
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
};

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.string
};

export default withStyles(styles)(Home);