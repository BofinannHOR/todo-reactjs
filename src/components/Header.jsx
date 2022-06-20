import React from "react";
import { Title, Box } from "@mantine/core";
const Header = () => {
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
      <Title order={2}>What's the plan for today ?</Title>
    </Box>
  );
};

export default Header;
