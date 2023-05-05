import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import ContactsFormPage from './pages/ContactFormPage/ContactsFormPage';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<ContactsPage />} />
          <Route path='/contact-form' element={<ContactsFormPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
