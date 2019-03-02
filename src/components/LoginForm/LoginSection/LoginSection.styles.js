const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        flexBasis: 200,
    },
    cssRoot: {
        color: '#CACFE0',
        backgroundColor: '#000',
        margin: 10,
        transition: 'all 0.3s ease 0s',
        border: '1px solid transparent',
        '&:hover': {
            backgroundColor: 'transparent',
            color: '#F7B32B',
            border: '1px solid #F7B32B',
            margin: 10,
            transition: 'all 0.3s ease 0s',
        },
    },
    card: {
        width: 435,
        height: 435,
        backgroundColor: 'black',
        color: 'white',
        padding: 20,
        boxShadow: '1px 2px 4px 2px rgba(255, 179, 0, .3)',
        borderRadius: 20,
    },
});

export default styles;
