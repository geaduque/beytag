import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Inicio from "../src/pages/Inicio";
import Favoritos from "../src/pages/Favoritos";
import Player from "../src/pages/Player";
import NaoEncontrada from "../src/pages/NaoEncontrada";
import PaginaBase from "../src/pages/PaginaBase";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />}></Route>
          <Route path="favoritos" element={<Favoritos />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NaoEncontrada />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
