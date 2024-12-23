import { Route, Routes } from 'react-router-dom';
import App from '../App';
import Home from '../components/Home';

const RoutesConfig = () => {
    return (
        <>
            <Routes>
                <Route path="/react" element={<App />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
};

export default RoutesConfig;