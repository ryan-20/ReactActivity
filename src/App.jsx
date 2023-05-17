import { useState } from 'react'
import { Button, Container, TextField, Box } from '@mui/material'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
    <Box
      component="form"
      sx={{ display:'flex', flexDirection: 'column', flexGrow: '1' }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Username@email.com" variant="outlined" type='Text' />
      <TextField id="outlined-basic" label="Password" variant="outlined" type='Password' sx={{ mt:1 }} />
    </Box>
    <Button variant="contained" sx={{ mt:1}} >Log In</Button>
    </Container>
  )
}

export default App
