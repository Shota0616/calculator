import { Route, Routes } from 'react-router-dom';
import App from '../App';

const RoutesConfig = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </>
    );
};

export default RoutesConfig;