import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import User from '../pages/User';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Alert from './layout/Alert';
import { GithubContextProvider } from '../Context/github/GithubContext';
import { AlertContextProvider } from '../Context/alert/AlertContext';

function App() {
  return (
    <GithubContextProvider>
      <AlertContextProvider>
        <Router>
          <div className="flex flex-col h-screen justify-between">
            <Navbar />

            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/user/:login" element={<User />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="*" element={<NotFound />}></Route>
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AlertContextProvider>
    </GithubContextProvider>
  );
}

export default App;
