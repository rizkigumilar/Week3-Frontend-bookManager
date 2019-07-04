import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Data from "../dataDummy"

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
        position: "absolute",
    backgroundColor: theme.palette.background.paper,
    boxShadow: `0px 4px 15px #4c4c4c`,
    outline: "none",
    borderRadius: 15,
    height: "65%",
    width: "60%",
    justifyContent: "center"

    },
    Button: {
        margin: theme.spacing(1),
        backgroundColor: '#F4CF5D',
        marginLeft: '1100px',
        height: '40px',
        width: '80px',
        marginBlockStart: '100px',
        boxShadow: `0px 0px 5px #4c4c4c`
    },
    Button2: {
        margin: theme.spacing(1),
        backgroundColor: '#F4CF5D',
        marginLeft: '680px',
        height: '50px',
        width: '100px',
        marginBlockStart: '25px'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        height: '40px',
        width: '700px',
        justifyContent: 'center',
        marginBlockStart: '30px'
    },
    Close: {
        margin: theme.spacing(1),
        color: 'red',
        fontSize: '18px',
        marginLeft: '750px',
        height: '30px',
        width: '50px',
        marginBlockStart: '0px'
    }
}));

export default function ModalAdd() {
    const [open, setOpen] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);
    const [book, setBook] = React.useState(Data);
    const [title, setTitle] = React.useState('');
    const [image_url, setImage_url] = React.useState('');
    const [desc, setDesc] = React.useState('');

    const bookAdd = () => {
        book.push({
          'image_url':image_url,
          'title':title,
          'desc':desc
        })
        console.log(book)
      }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();

    return (
        <div>
            <Button onClick={handleOpen} className={classes.Button}>Add</Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}>
                <div style={modalStyle} className={classes.paper}>
                    <Button onClick={handleClose} className={classes.Close}>X</Button>
                    <Typography variant="h4" id="modal-title">
                        Add Data
                </Typography>
                    <form className={classes.container} noValidate autoComplete="off">
                         <TextField
                            id="outlined-name"
                            label="Url Image"
                            className={classes.textField}
                            margin="center"
                            variant="outlined"
                            onChange = {(e) => setImage_url(e.target.value)}
                        />
                    </form>
                    <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="outlined-name"
                            label="Title"
                            className={classes.textField}
                            margin="center"
                            variant="outlined"
                            onChange = {(e) => setTitle(e.target.value)}
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
                            onChange = {(e) => setDesc(e.target.value)}
                        />
                    </form>
                    <Button onClick={bookAdd} className={classes.Button2} type="submit">Save</Button>
                    <ModalAdd />
                </div>
            </Modal>
        </div>
    );
}