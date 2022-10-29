import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Header from './components/Layout/DefaultLayout/Header';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Header" element={<Header />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
