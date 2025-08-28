import {useState} from "react";
import './../web/css/App.css';
import './../web/css/index.css';

export default function Site() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <a href="https://www.yiiframework.com/" target="_blank">
                    <img src="https://www.yiiframework.com/image/design/logo/yii3_sign.svg" className="logo" alt="Yii logo" />
                </a>
                <a href="https://preactjs.com" target="_blank">
                    <img src="https://preactjs.com/branding/symbol.svg" className="logo" alt="Preact logo" />
                </a>
                <a href="https://vite.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://inertiajs.com" target="_blank">
                    <img src="/inertia.png" className="logo" alt="Inertia logo" />
                </a>
            </div>
            <h1>Yii2 + Preact</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>Pages/Site.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the logos to learn more about Yii2, Preact, Vite and Inertia
            </p>
        </>
    );
}