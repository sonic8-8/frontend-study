import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import Even from "./components/Even";

function App() {

  const [count, setCount] = useState(0);

  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3. 언마운트
  // Even에 있습니다

  // 의존성 배열 (dependency array -> deps )
  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input])

  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input onChange={(e) => {
          setInput(e.target.value);
        }} />
        <Viewer count={count} />
        {count % 2 == 0 ? <Even /> : null}
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
