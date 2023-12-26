import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import PrivateRouter from "./PrivateRouter";
import Home from "../Pages/Home";
import Products from "../Pages/Products"
import NotFound from "../Pages/NotFound";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<PrivateRouter />}>
        <Route path="" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:title" element={<ProductDetail/>} />
        <Route path="about" element={<About/>} />
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
};

export default AppRouter;
