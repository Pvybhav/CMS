import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import Profile from "./Profile";

// import classNames from "classnames";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import FormControl from "@material-ui/core/FormControl";
// import InputLabel from "@material-ui/core/InputLabel";
// import Input from "@material-ui/core/Input";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import IconButton from "@material-ui/core/IconButton";





const styles = theme => ({
    // root: {
    //     width: "100%",
    //     maxWidth: "360px",
    //     backgroundColor: theme.palette.background.paper,
    // },
});

function Settings(props) {
    const { classes } = props;
    return (
        <Router>
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={3}>
                        <div>
                            <List component="nav">
                                <ListItem button>
                                    <Link to="/Profile"><ListItemText primary="Profile" /></Link>
                                </ListItem>
                                <Divider />
                                <ListItem button divider>
                                    <Link to="/ChangeSettings"><ListItemText primary="Settings" /></Link>
                                </ListItem>
                                <ListItem button>
                                    <Link to="/ContactUS"><ListItemText primary="Contact" /></Link>
                                </ListItem>
                                <Divider light />
                                <ListItem button>
                                    <Link to="/AboutUS"><ListItemText primary="AboutUS" /></Link>
                                </ListItem>
                            </List>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <Route path="/Profile" component={Profile} />
                    <Route path="/ChangeSettings" component={ChangeSettings} />
                    <Route path="/ContactUS" component={ContactUS} />
                    <Route path="/AboutUS" component={AboutUS} />
                </Grid>
            </div>
        </Router>

    );
}
// const Profile = () => (
//     <div>
//         <h2>Profile</h2>
//     </div>
// );

const ChangeSettings = () => (
    <div>
        <h2>Settings</h2>
    </div>
);
const ContactUS = () => (
    <div>
        <h2>ContactUSjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj</h2>
    </div>
);
const AboutUS = () => (
    <div>
        <h2>AboutUS</h2>
    </div>
);

// const Topics = ({ match }) => (
//     <div>
//         <h2>Topics</h2>
//         <ul>
//             <li>
//                 <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/components`}>Components</Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//             </li>
//         </ul>

//         <Route path={`${match.url}/:topicId`} component={Topic} />
//         <Route
//             exact
//             path={match.url}
//             render={() => <h3>Please select a topic.</h3>}
//         />
//     </div>
// );

// const Topic = ({ match }) => (
//     <div>
//         <h3>{match.params.topicId}</h3>
//     </div>
// );
Settings.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Settings);