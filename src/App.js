import "./styles.css";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleClick = () => {
    if (input !== "") {
      setList((oldItems) => {
        return [...oldItems, input];
      });
      setInput("");
    }
  };

  const todoClicked = (index) => {
      // return value={}
  };

  const deleteTodo = (key) => {
    const newList =list.filter((el,index)=> index !== key)
    setList(newList);
  };

  const deleteAll = () => {
    setList([])
  };

  return (
    <div className="main-div">
      <input
        placeholder="Enter your todo.."
        className="input"
        value={input}
        type="text"
        plaholder="Enter a todo.."
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="add-btn" onClick={() => handleClick()}>
        +
      </button>
      <ul>
        {list.map((item, index) => {
          return (
            <div className="list-container">
              <li onClick={() => todoClicked(index)} key={index}>
                {item}
              </li>
              <button
                className="delete-button"
                onClick={() => deleteTodo(index)}
              >
                -
              </button>
              <br />
            </div>
          );
        })}
      </ul>
      <button onClick={deleteAll} className="delete-all">
        Delete all
      </button>
    </div>
  );
}
