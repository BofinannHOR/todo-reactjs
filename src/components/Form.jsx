import React, { useState } from "react";
import { Box, TextInput, Button, Alert } from "@mantine/core";

const Form = ({ setInput, setList, list, input, setStatus }) => {
  // const [error, setError] = useState();
  const InputHandler = (e) => {
    setInput(e.target.value);
  };
  const SubmitHanlder = (e) => {
    e.preventDefault();
    if (input.trim().length === 0) {
      return;
    }
    setList([
      ...list,
      { id: Math.random() * 20, text: input, completed: false },
    ]);
    setInput("");
  };
  const StatusHandler = (e) => {
    setStatus(e.target.value);
  };
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
      <form
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TextInput
          value={input}
          onChange={InputHandler}
          placeholder="Add new ..."
          required
        />
        <Button onClick={SubmitHanlder} type="submit" variant="outline">
          Add
        </Button>
        <select name="todos" onChange={StatusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </form>
    </Box>
  );
};

export default Form;
