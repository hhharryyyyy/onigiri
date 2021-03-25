import React, { useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as wanakana from "wanakana";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <WanakanaInput />
        </a>
      </header>
    </div>
  );
}

function WanakanaInput() {
  const inputRef = useRef(null as null | HTMLInputElement);
  useWanakana(inputRef, {
    IMEMode: true,
  });
  return <input autoFocus ref={inputRef} />;
}

/**
 * useWanakana is a React hook that binds the input ref to wanakana with the given options.
 * @param ref
 * @param options
 */
function useWanakana(
  ref: React.MutableRefObject<HTMLInputElement | HTMLTextAreaElement | null>,
  options?: wanakana.WanakanaOptions
) {
  useEffect(() => {
    const input = ref.current;
    if (!input) {
      return;
    }

    wanakana.bind(input, options);
    return () => {
      wanakana.unbind(input);
    };
  }, [ref, options]);
}

export default App;
