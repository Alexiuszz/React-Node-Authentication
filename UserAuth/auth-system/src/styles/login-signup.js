import { makeStyles, emphasize } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '36ch',
        },
        background: 'linear-gradient(to right, #bfb7ec, #ffff)',
        margin: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        width: "55%",
        '@media (min-width:800px)': {
            width: '40%',
        },
        alignItems: 'center',
        border: '10px solid #efefef',
        borderRadius: '50px',
        padding: '20px',
    },
    margin: {
        margin: theme.spacing(1.),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    selectEmpty: {
        width: '34ch',
    },
    navStyles: {
        '&:hover, &:focus': {
            color: theme.palette.grey[300],
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            color: emphasize(theme.palette.grey[300], 0.12),
        },
    },
    nav: {
        marginLeft: "95%",
        justifyContent: 'space-around',
        textTransform: 'uppercase',
    },
    appBar: {
        height: '7ch',
        boxShadow: 'none',
    },
    textField: {
        width: '36ch',
        height: '10ch',
        backgroundColor: 'fff',
    },
    button: {
        width: '36ch',
    }
}));

export default useStyles;