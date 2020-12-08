import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const [items, setItems] = useState("");
fetch('https://61eq041wd8.execute-api.us-east-1.amazonaws.com/beta/DonutDBFunction')
.then(response => response.json())
.then(data => setItems(data.body.Items));

console.log(items)

ReactDOM.render(
  <React.StrictMode>
    <App items={items} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
