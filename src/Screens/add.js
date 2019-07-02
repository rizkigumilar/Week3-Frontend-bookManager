import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        backgroundColor: 'yellow',
        marginLeft: '1200px',
        height: '40px',
        width: '80px',
        marginBlockStart: '50px'
    },
    input: {
        display: 'none',
    },
}));

export default function Add() {
    const classes = useStyles();

    return (
        <div>
            <label htmlFor="contained-button-file">
                <Button variant="contained" component="span" className={classes.button}>
                    Add
            </Button>
            </label>
        </div>
    );
}