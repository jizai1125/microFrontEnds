// 导入public-path.js
import './public-path.js';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';

function render(props) {
  const { container } = props;
  ReactDOM.render(
    <React.StrictMode>
      <Router basename={window.__POWERED_BY_QIANKUN__ ? "/app-react" : "/"}>
        <App />
      </Router>
    </React.StrictMode>,
    container ? container.querySelector("#root") : document.querySelector("#root")
  );
}

console.warn('log---window.__POWERED_BY_QIANKUN__', window.__POWERED_BY_QIANKUN__)
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.warn("log---[react17] react app bootstraped");
}

export async function mount(props) {
  console.warn("log---[react17] props from main framework", props);
  render(props);
}

export async function unmount(props) {
  console.warn("log---[react17] react app unmount", props);
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector("#root") : document.querySelector("#root"));
}

// ReactDOM.render(
//   <React.StrictMode>
//     <Router basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}>
//     <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
