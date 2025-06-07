import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from './components/Content';
import NotFound from './components/Utilities/404';
import WriteUp_page from './components/WriteUp/WriteUp_page';


function App() {

  return (
    <Router>
    <div className="min-w-screen min-h-screen">
      <Routes>
        <Route path="" element={<Content/>} />
        <Route path="/writeups" element={<WriteUp_page/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
    </Router>
  )
}

export default App


