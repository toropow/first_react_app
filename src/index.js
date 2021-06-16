import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let postsData = [
  { 'id': 1, 'message': 'Hi, how are you?', likeCounts: 0 },
  { 'id': 2, 'message': 'It\'s my first post!!!', likeCounts: 51 },
  { 'id': 2, 'message': 'Hi!!!', likeCounts: 78 },
];

ReactDOM.render(<React.StrictMode><App postsData={postsData} /> </React.StrictMode>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
