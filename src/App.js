import logo from './logo.svg';
import './App.css';

function App() {

  window.onload = function () {
    const createCORSRequest = function (method, url) {
        const xhr = new XMLHttpRequest();
        if (`withCredentials` in xhr) {
            // Most browsers.
            xhr.open(method, url, true);
        } else if (typeof XDomainRequest != `undefined`) {
            // IE8 & IE9
            xhr = new XDomainRequest();
            xhr.open(method, url);
        } else {
            // CORS not supported.
            xhr = null;
        }
        return xhr;
    };
    const method = `GET`;
    const url = `https://61eq041wd8.execute-api.us-east-1.amazonaws.com/beta/DonutDBFunction`;
    const request = createCORSRequest(method, url);
    request.setRequestHeader(`Content-Type`, `application/json; charset=UTF-8`);
    request.send();

    request.onload = function () {
        const content = request.responseText;
        console.log(content);
    };

    request.onerror = function () {
        const error = request.responseText;
        console.log(error);
    };
};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{content}</p>
      </header>
    </div>
  );
}

export default App;
