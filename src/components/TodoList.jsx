import React from "react";
import { Box } from "@mantine/core";
import Todo from "./Todo";
const TodoList = ({ list, setList, filter }) => {
  // console.log(list);
  return (
    <Box
      style={{ marginBottom: "20px" }}
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[0],
        textAlign: "center",
        color: theme.colors.gray[9],
        padding: theme.spacing.xl,
      })}
    >
      <ul>
        {filter.map((item) => (
          <Todo
            key={item.id}
            text={item.text}
            setList={setList}
            list={list}
            item={item}
          />
        ))}
      </ul>
    </Box>
  );
};

export default TodoList;
