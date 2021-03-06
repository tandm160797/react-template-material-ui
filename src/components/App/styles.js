const { makeStyles } = require('@material-ui/core');

const styles = (theme) => ({
	app: {
		'& h1': {
			textAlign: 'center',
			color: '#87e474'
		}
	}
});
const useStyles = makeStyles(styles);

export { useStyles };
