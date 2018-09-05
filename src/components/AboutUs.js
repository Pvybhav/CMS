import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";


let id = 0;
function createData(dateAndTime, location) {
    id += 1;
    return {
        id,
        dateAndTime,
        location,
    };
}

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

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

class AboutUs extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render(){
        const {
            classes
        } = this.props;
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
                                    AboutUs
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <Paper className={classes.paper}>
                            <p>We are South Asia&apos;s premier courier, and integrated express package Distribution Company. We have the most extensive domestic network covering over 35,000 locations, and service more than 220 countries</p>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
};

AboutUs.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.string
};

export default withStyles(styles)(AboutUs);