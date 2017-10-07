import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {getMuiTheme, lightBaseTheme, MuiThemeProvider} from 'material-ui/styles';

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <App/>
    </MuiThemeProvider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
