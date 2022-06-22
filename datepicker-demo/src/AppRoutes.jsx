import {
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Chart from "./Chart";

const AppRoutes = () => (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="chart/:date" element={<Chart />} />
    </Routes>
);

export default AppRoutes;