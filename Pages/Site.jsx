import {useState} from "react";
import './../web/css/App.css';
import './../web/css/index.css';

export default function Site() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://preactjs.com" target="_blank">
                    <img src="https://preactjs.com/branding/symbol.svg" className="logo react" alt="Preact logo" />
                </a>
            </div>
            <h1>Vite + Preact</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>Pages/Site.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and Preact logos to learn more
            </p>
        </>
    );
}