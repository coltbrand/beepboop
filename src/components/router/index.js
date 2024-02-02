import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as pages from "../../pages";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<pages.Home />} />
      <Route path="/login" element={<pages.Login />} />
    </Routes>
  );
}

export default Router;
