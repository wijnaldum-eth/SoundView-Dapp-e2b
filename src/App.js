import { Routes, Route } from "react-router-dom";
import { HomePage } from "../src/pages/home/HomePage.jsx";
import { Navigation } from "./pages/navigation/Navigation.jsx";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
