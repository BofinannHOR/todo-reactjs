import React from "react";
import { Button, Text } from "@mantine/core";
import { Check, Trash } from "tabler-icons-react";

const Todo = ({ text, list, setList, item }) => {
  // console.log(list.length);
  // const emptyList = "No List in here...";
  const deleteHandler = () => {
    setList(list.filter((el) => el.id !== item.id));
  };
  const completedHandler = () => {
    setList(
      list.map((el) => {
        if (el.id === item.id) {
          return {
            ...el,
            completed: !item.completed,
          };
        }
        return el;
      })
    );
  };
  return (
    <div
      className="heading1"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: "15px",
      }}
    >
      <Text className={`${item.completed ? "completed" : ""}`}>{text}</Text>
      <div>
        <Button
          onClick={completedHandler}
          variant="outline"
          leftIcon={<Check size={14} />}
          color="teal"
        >
          Check
        </Button>
        <Button
          onClick={deleteHandler}
          variant="outline"
          leftIcon={<Trash size={14} />}
          color="red"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Todo;
