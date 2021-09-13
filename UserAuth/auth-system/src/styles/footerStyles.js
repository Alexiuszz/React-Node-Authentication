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
}));

export default useStyles;