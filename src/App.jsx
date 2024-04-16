import React, {
  useEffect,
  useState,
  useRef,
  useId,
  useMemo,
  useCallback,
  useReducer,
} from "react";
import List from "./components/List";
import * as styles from "./App.module.css";

const App = () => {
  const [list, setList] = useState([0, 1, 2, 3]);
  const [counter, setCounter] = useState(0);
  const id = useId();
  const ref = useRef(0);
  const load = useCallback(
    (a) => {
      for (let i = 0; i < 1000000 * a; i++) {
        setList(i);
      }
    },
    [a]
  );

  const [state, dispatch] = useReducer(
    (state, action) => {
      if (action.type === "change_name") {
        return {
          name: action.payload,
        };
      }
    },
    { name: "Andrii" }
  );

  useEffect(() => {
    dispatch({ type: "change_name", payload: "John" });
  }, []);

  useEffect(() => {}, [ref]);

  return (
    <List text="text" load={load}>
      <div className="" ref={ref}>
        {ref.current}
      </div>
      {list.map((item, index) => {
        return (
          <div key={item} className={styles.test}>
            {item}
          </div>
        );
      })}
    </List>
  );
};

export default App;
