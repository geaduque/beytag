import styles from "./NaoEncontrada.module.css";
import React from "react";

function NaoEncontrada() {
  return (
    <section className={styles.container}>
      <h2>Ops!</h2>
      <p>O conteúdo que você procurou não foi encontrado</p>
      <iframe
        src="https://giphy.com/embed/T42wd4BkGPap2"
        title=" "
        width="480"
        height="301"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
    </section>
  );
}

export default NaoEncontrada;
