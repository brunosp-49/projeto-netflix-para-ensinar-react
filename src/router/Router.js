import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../pages/detail/Detail";
import Home from "../pages/home/Home";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
