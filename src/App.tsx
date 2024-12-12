import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from './components/Content';
import NotFound from './components/Utilities/404';


function App() {

  return (
    <Router>
    <div className="min-w-screen min-h-screen">
      <Routes>
        <Route path="" element={<Content/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
    </Router>
  )
}

export default App


