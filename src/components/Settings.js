import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

import Profile from "./Profile";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

// import classNames from "classnames";
// import Paper from "@material-ui/core/Paper";
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
                    <Grid item xs={5}>
                    </Grid>
                    <Grid item xs={1.5}>
                        <div>
                            <List component="nav">
                                <ListItem button>
                                    <Link to="/Profile"><ListItemText primary="View Profile" /></Link>
                                </ListItem>
                                <Divider />
                                <ListItem button divider>
                                    <Link to="/ChangeSettings"><ListItemText primary="Change Settings" /></Link>
                                </ListItem>
                                <ListItem button>
                                    <Link to="/AboutUs"><ListItemText primary="About Us" /></Link>
                                </ListItem>
                                <ListItem button>
                                    <Link to="/ContactUs"><ListItemText primary="Contact Us" /></Link>
                                </ListItem>
                                <Divider light />
                            </List>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <Route path="/Profile" component={Profile} />
                    <Route path="/ChangeSettings" component={ChangeSettings} />
                    <Route path="/ContactUs" component={ContactUs} />
                    <Route path="/AboutUs" component={AboutUs} />
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

// http://preview.codecanyon.net/item/courier-management-system/full_screen_preview/17459005?_ga=2.129667343.2097255233.1536161261-1663976971.1524400160&_gac=1.82510564.1536161261.CjwKCAjw_b3cBRByEiwAdG8WqlqZjSotr4t7JvJSvnPsc4xQSAO3bkU_bH1LAkJfDvwdKA2KxhDkDBoCI6sQAvD_BwE