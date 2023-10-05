import styles from "./Favoritos.module.css";
import React from "react";
import Card from "../../components/Card";
import Titulo from "../../components/Titulo";
import Banner from "../../components/Banner";
import { useFavoritoContext } from "../../contextos/Favoritos";

function Favoritos(titulo, capa) {
  const { favorito } = useFavoritoContext();
  return (
    <div>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Esses são seus álbuns favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </div>
  );
}

export default Favoritos;
