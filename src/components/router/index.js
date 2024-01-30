import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Blog, SignIn, NoPage } from "../../pages";
import { Header } from "../header";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
