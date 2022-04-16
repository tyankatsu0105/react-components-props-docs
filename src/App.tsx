import * as React from 'react'

import { Input } from "./components/Input";

const App = () => (
  <>
    <Input 
      inputProps={{
        type: 'text',
      }}
    />
    <Input 
      isError 
      errorMessage='this is an error message' 
      inputProps={{
        type: 'text',
      }}
    />
  </>
)

export default App
