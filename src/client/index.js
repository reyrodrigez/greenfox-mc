import ReactDOM from 'react-dom';

require('./scss/main.scss');

const container = require('./container');
const App = container.get('App');

ReactDOM.render(
  App,
  document.getElementById('app')
);
