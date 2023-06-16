import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import { partInputs, productInputs, userInputs } from "./formSource";

import Hero from "./components/hero/Hero";
import Product from "./components/product/Product";
import Part from "./components/part/Part";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Contact from "./components/contact/Contact";
import PHome from "./page-dashboard/p-home/PHome";
import PLIst from "./page-dashboard/p-list/PList";
import PLIstProduct from "./page-dashboard/p-list/PListProduct";
import PLIstPart from "./page-dashboard/p-list/PListPart";
import PUser from "./page-dashboard/p-user/PUser";
import PAddUser from "./page-dashboard/p-addUser/PAddUser";
import PAddProduct from "./page-dashboard/p-addUser/PAddProduct";
import PAddPart from "./page-dashboard/p-addUser/PAddPart";


function App() {
  const { currentUser } = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Hero />} />
        <Route path="product" element={<Product />} />
        <Route path="part" element={<Part />} />
        <Route path="contact" element={<Contact />} />
        <Route path="dashboard">
          <Route index element={<RequireAuth><PHome /></RequireAuth>} />
          <Route path="users">
            <Route index element={<RequireAuth><PLIst /></RequireAuth>} />
            <Route path=":userId" element={<RequireAuth><PUser /></RequireAuth>} />
            <Route
              path="new-user"
              element={
                <RequireAuth><PAddUser inputs={userInputs} title="Add User" /></RequireAuth>
              }
            />
            <Route
              path="view"
              element={
                <RequireAuth><PUser/></RequireAuth>
              }
            />
          </Route>
          <Route path="products">
            <Route index element={<RequireAuth><PLIstProduct /></RequireAuth>} />
            <Route path=":productId" element={<RequireAuth><PUser /></RequireAuth>} />
            <Route
              path="new-product"
              element={
                <RequireAuth><PAddProduct inputs={productInputs} title="Add Product" /></RequireAuth>
              }
            />
          </Route>
          <Route path="parts">
            <Route index element={<RequireAuth><PLIstPart /></RequireAuth>} />
            <Route path=":partId" element={<RequireAuth><PUser /></RequireAuth>} />
            <Route
              path="new-part"
              element={
                <RequireAuth><PAddPart inputs={partInputs} title="Add Part" /></RequireAuth>
              }
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
