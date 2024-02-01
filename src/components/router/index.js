import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as pages from "../../pages";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<pages.Home />} />
        <Route path="/login" element={<pages.Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
