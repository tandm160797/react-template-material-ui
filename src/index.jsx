import App from '$components/App';
import store from '$redux-toolkit/store';
import theme from '$themes/lightTheme';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
