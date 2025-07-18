import React from "react";
import { Card, CardContent, Button, Box } from "@mui/material"; // Importing Material-UI components

function About({ count, increment, decrement }) {
  return (
    <Card className="mx-auto max-w-md shadow-md" sx={{ maxWidth: 400, margin: 'auto' }}>
      <CardContent>
        <h2 className="text-xl font-semibold mb-2 text-center">
          About Count: {count}
        </h2>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 2 }}>
          <Button variant="contained" onClick={increment} className="mx-2">
            Increment
          </Button>
          <Button variant="contained" color="error" onClick={decrement}>
            Decrement
          </Button>
        </Box>
        <h1 className="text-2xl font-bold mt-4 text-center">About Page</h1>
      </CardContent>
    </Card>
  );
}

export default About;
