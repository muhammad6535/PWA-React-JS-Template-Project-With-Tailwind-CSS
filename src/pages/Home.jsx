import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Box } from "@mui/material"; // Importing Button and Box from Material-UI

function Home({ count, increment, decrement }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">{t("welcome")}</h1>
      <p className="mb-4">{t("description")}</p>

      <Box className="mb-4" sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button
          variant="contained"
          onClick={() => changeLanguage("en")}
          className="mx-2"
        >
          English
        </Button>

        <Button
          variant="contained"
          onClick={() => changeLanguage("ar")}
          className="mx-2"
        >
          Arabic
        </Button>

        <Button variant="contained" onClick={() => changeLanguage("he")}>
          Hebrew
        </Button>
      </Box>

      <h2 className="text-xl font-semibold mb-2">Home Count: {count}</h2>

      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Button variant="contained" onClick={increment}>
          Increment
        </Button>

        <Button variant="contained" onClick={decrement}>
          Decrement
        </Button>
      </Box>
    </div>
  );
}

export default Home;
