import { Routes, Route } from "react-router-dom";
import LoginForm from "./pages/Login";
import "./style/style.scss";
import HeaderView from "./views/header";
import MainPageController from "./controllers/main-page";
import DetailController from "./controllers/detail";

function App() {
  return (
    <>
      <HeaderView />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/coins" element={<MainPageController />} />
        <Route path="/coin/:id" element={<DetailController />} />
      </Routes>
    </>
  );
}

export default App;
