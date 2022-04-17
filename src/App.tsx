import * as React from "react";

import { Input } from "./components/Input";
import { Button } from "./components/Button";

const App = () => (
  <>
    <Input
      inputProps={{
        type: "text",
      }}
    />
    <Input
      isError
      errorMessage="this is an error message"
      inputProps={{
        type: "text",
      }}
    />
    <Button variant="contained">contained</Button>
    <Button variant="outlined">outlined</Button>
    <Button variant="text">text</Button>
  </>
);

export default App;
