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
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

let id = 0;

function createData(dateAndTime, location, estimationTime) {
    id += 1;
    return {
        id,
        dateAndTime,
        location,
        estimationTime,
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

class TrackOrderStatus extends Component{
    constructor(props) {
        super(props);
        this.state = {
            orderNumber: "",
            showTrackOrderStatus: false,
            orderDetails: [
                createData("DD/MM/YYYY HH:MM", "Current Location", "Estimation time"),
                createData("DD/MM/YYYY HH:MM", "Current Location", "Estimation time"),
                createData("DD/MM/YYYY HH:MM", "Current Location", "Estimation time"),
            ],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleshowTrackOrderStatus = this.handleshowTrackOrderStatus.bind(this);
    }
    handleChange = prop => event => {
        this.setState({
            [prop]: event.target.value
        });
    };
    handleshowTrackOrderStatus = () => {
        this.setState({
            showTrackOrderStatus: true
        });
    }
    render(){
        const {
            classes
        } = this.props;
        let {
            orderNumber,
            showTrackOrderStatus,
            orderDetails,
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
                                    Track Order
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <Paper className={classes.paper}>
                            <form className={classes.container} noValidate autoComplete="off">
                                <TextField
                                    id="name"
                                    label="Invoice No"
                                    className={classes.textField}
                                    value={this.state.name}
                                    onChange={this.handleChange("name")}
                                    margin="normal"
                                /><br /><br />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classNames(classes.margin, classes.cssRoot)}
                                    onClick={this.handleshowTrackOrderStatus}
                                >
                                    Track Order
                                </Button>
                            </form>
                            <br /><br />
                            {
                                showTrackOrderStatus ? 
                                    <Table className={classes.table}>
                                        <TableHead>
                                            <TableRow>
                                                <CustomTableCell>Date and Time</CustomTableCell>
                                                <CustomTableCell numeric>Location Of the Courier</CustomTableCell>
                                                <CustomTableCell numeric>Estimation Time</CustomTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {orderDetails.map(details => {
                                                return (
                                                    < TableRow className = {classes.row} key = {details.id} >
                                                        <CustomTableCell component="th" scope="row">
                                                            {
                                                                details.dateAndTime
                                                            }
                                                        </CustomTableCell>
                                                        <CustomTableCell numeric>
                                                            {
                                                                details.location
                                                            } 
                                                        </CustomTableCell>
                                                        < CustomTableCell numeric > 
                                                            {
                                                                details.estimationTime
                                                            } 
                                                        </CustomTableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>
                                    : 
                                    <h4>Enter invoice no and click on track order to check the status of your courier</h4>
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
};

TrackOrderStatus.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.string
};

export default withStyles(styles)(TrackOrderStatus);
