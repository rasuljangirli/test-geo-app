import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import NoteFound from "./pages/NoteFound";
import Employee from "./pages/Employee";
import Company from "./pages/Company";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />}>
          <Route path="employee" element={<Employee />} />
          <Route path="company" element={<Company />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<NoteFound />} />
      </Routes>
    </div>
  );
}

export default App;
