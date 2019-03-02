const styles = theme => ({
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
    }
});

export default styles;
