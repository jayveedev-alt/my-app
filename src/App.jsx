import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
        </Routes>
      </Router>
    </div>
  )
}

export default App
