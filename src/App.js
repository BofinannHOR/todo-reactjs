import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [status, setStatus] = useState("all");
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    getToLocal();
  }, []);

  useEffect(() => {
    filterHandler();
    saveToLocal();
    // console.log("effect run");
  }, [list, status]);
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilter(list.filter((item) => item.completed === true));
        break;
      case "uncompleted":
        setFilter(list.filter((item) => item.completed === false));
        break;
      default:
        setFilter(list);
    }
  };
  const saveToLocal = () => {
    localStorage.setItem("list", JSON.stringify(list));
  };
  const getToLocal = () => {
    if (localStorage.getItem("list") === null) {
      localStorage.setItem("list", JSON.stringify([]));
    } else {
      let listLocal = JSON.parse(localStorage.getItem("list"));
      setList(listLocal);
      console.log(listLocal);
    }
  };

  return (
    <div className="App">
      <Header />
      <Form
        setStatus={setStatus}
        list={list}
        setList={setList}
        setInput={setInput}
        input={input}
      />
      <TodoList setList={setList} list={list} filter={filter} />
    </div>
  );
}

export default App;
