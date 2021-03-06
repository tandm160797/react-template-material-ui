import Count from '$components/Count';
import MagicBox from '$components/MacgicBox';
import React from 'react';
import { useStyles } from './styles';

const App = () => {
  const classes = useStyles();

	return (
		<div className={classes.app}>
			<h1>Hello ReactJS</h1>
			<hr />
      <h1>Redux toolkit</h1>
      <Count />
			<hr />
      <h1>Custom hooks</h1>
      <MagicBox />
		</div>
	);
};

export default App;
