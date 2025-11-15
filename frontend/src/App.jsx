import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import AppRoutes from './routes/router.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  )
}

export default App