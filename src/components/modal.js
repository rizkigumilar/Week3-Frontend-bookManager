import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function getModalStyle() {
    const top = 50
    const left = 50

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'relative',
        height: 500,
        width: 900,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),

    },
    Button2: {
        margin: theme.spacing(1),
        backgroundColor: 'yellow',
        marginLeft: '750px',
        height: '50px',
        width: '100px',
        marginBlockStart: '100px'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        height: '40px',
        width: '1000px',
        alignSelf: 'center',
        marginBlockStart: '50px'
    },
    Close: {
        margin: theme.spacing(1),
        color: 'red',
        fontSize: '18px',
        marginLeft: '850px',
        height: '30px',
        width: '50px',
        marginBlockStart: '-50px'
    }
}));

export default function SimpleModal() {
    const [setOpen] = React.useState(false);
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);

    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();

    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                onClose={handleClose}>
                <div style={modalStyle} className={classes.paper}>
                    <Button onClick={handleClose} className={classes.Close}>X</Button>
                    <Typography variant="h4" id="modal-title">
                        Edit Data
                </Typography>
                    <form className={classes.container} noValidate autoComplete="off">
                         <TextField
                            id="outlined-name"
                            label="Url Image"
                            className={classes.textField}
                            margin="center"
                            variant="outlined"
                        />
                    </form>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="outlined-name"
                            label="Title"
                            className={classes.textField}
                            margin="center"
                            variant="outlined"
                        />
                    </form>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="outlined-textarea"
                            label="Description"
                            placeholder="Description..."
                            multiline
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                    </form>
                    <Button onClick={handleClose} className={classes.Button2} type="submit">Save</Button>
                    <SimpleModal />
                </div>
            </Modal>
        </div>
    );
}