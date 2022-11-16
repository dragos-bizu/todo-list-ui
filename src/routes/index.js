import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import FinishedItems from "../components/FinishedItems";
import TopBar from "../components/TopBar";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TopBar pages={["Done", "Pending"]} />}>
        <Route index path="/pending" element={<Dashboard />} />
        <Route path="/done" element={<FinishedItems />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
