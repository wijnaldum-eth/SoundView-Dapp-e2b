import { Routes, Route } from "react-router-dom";
import { HomePage } from "../src/pages/home/HomePage.jsx";
import { FullRanking } from "./pages/full-ranking/FullRanking.jsx";
import { Market } from "./pages/market/Market.jsx";
import { Navigation } from "./pages/navigation/Navigation.jsx";
import { Stream } from "./pages/stream/Stream.jsx";
import { CreateAccount } from "./pages/create/CreateAccount.jsx";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route path="market" element={<Market />} />
        <Route path="statistics" element={<FullRanking />} />
        <Route path="stream" element={<Stream />} />
        <Route path="create" element={<CreateAccount />} />
      </Route>
    </Routes>
  );
};
