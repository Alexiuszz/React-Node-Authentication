import { makeStyles, emphasize } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    //footer

    footerBlock: {
        width: '1190px',
        margin: 'auto',
        marginTop: '10ch',
    },
    footerWrap: {
        display: 'flex',
        flexDirection: 'row',
        color: '#fff',
        margin: 'auto',
        fontSize: '16px',
    },
    footers: {
        marginTop: '40px',
        marginRight: '50px',
        color: '#fff',
    },
    footerStyles: {
        fontSize: "16px",
        color: theme.palette.grey[400],
        '&:hover, &:focus': {
            color: theme.palette.grey[500],
            textDecoration: 'none',
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            color: emphasize(theme.palette.grey[300], 0.12),
        },
    },
    footerBottomText: {
        display: 'flex',
        flexDirection: 'row',
    },
    footerLogo: {
        margin: '1ch 1.3ch 0ch 0ch'
    },
    footerCopyRight: {
        marginTop: '5ch',
        fontSize: '14px',
        color: theme.palette.grey[400],

    },
    divider: {
        fontSize: '18px',
        color: theme.palette.grey[400],
    },
    footerSocials: {
        fontSize: '18px',
        marginTop: '5ch',
        marginLeft: '6ch',
        '& 	.MuiInput-input': {
            width: '20ch',
            height: '25px',
            border: '2px solid #fff',
            borderTopLeftRadius: '4px',
            borderBottomLeftRadius: '4px',
            color: theme.palette.grey[900],
            backgroundColor: theme.palette.grey[200]
        },
        '& .Mui-focused': {
            color: theme.palette.grey[400],
            borderColor: 'red'
        },
    },
    input: {
        marginTop: '10px',
        borderTopRightadius: '0px',
        borderBottomRightRadius: '0px',
        marginBottom: '40px'
    },
    button: {
        borderTopLeftRadius: '0px',
        borderBottomLeftRadius: '0px',
        marginTop: '26.4px ',
        height: '42px',
        width: '11ch',
        backgroundColor: '#6a77b4',
        color: '#fff',
        '&:hover, &:focus': {
            backgroundColor: theme.palette.grey[600],
        },
    },
    inputLabel: {
        paddingTop: '8px'
    },
    socialIcons: {
        color: '#fff'
    }
}));

export default useStyles;