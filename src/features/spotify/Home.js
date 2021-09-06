/** @jsxImportSource theme-ui */
import React, { useState } from "react";
import {
  Flex, Button, Text, Spinner
} from "theme-ui";

import Spotify from "./Spotify";

const Authorise = ({ handleAuthorise, isLoading }) => (
  <Flex
    sx={{
      bg: "secondary",
      height: "100vh",
      width: "100vw",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }}
  >
    <Text
      sx={{
        color: "primary",
        fontSize: 5,
        fontWeight: "bold",
        pb: 3
      }}
    >
      Looking for music?
    </Text>
    <Text sx={{ color: "primary", fontSize: 2, pb: 4 }}>
      Start listening to the best new releases.
    </Text>
    <Button onClick={handleAuthorise} sx={{ px: 40 }} disabled={isLoading}>
      {isLoading ? <Spinner size={18} title="loading" sx={{ color: "secondary" }} /> : "Enter" }
    </Button>
  </Flex>
);

const Home = () => {
  const [token, setToken] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleAuthorise = () => {
    setIsLoading(true);
    fetch("/authorise")
      .then((res) => res.json())
      .then((accToken) => setToken(accToken))
      .then(
        () => setIsLoading(false),
        (err) => console.error("Error:", err)
      );
  };

  if (token) return <Spotify />;
  return <Authorise handleAuthorise={handleAuthorise} isLoading={isLoading} />;
};

export default Home;
