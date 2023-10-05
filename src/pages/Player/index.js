import Titulo from "../../components/Titulo";
import Banner from "../../components/Banner";
import styles from "./Player.module.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NaoEncontrada from "../../pages/NaoEncontrada";

function Player() {
  const [video, setVideo] = useState();
  const parametros = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/geaduque/beytag-api/videos?id=${parametros.id}`
    )
    .then(resposta => resposta.json())
    .then (dados => {
      setVideo(...dados)
    })
  });

  if (!video) {
    return <NaoEncontrada />;
  }

  return (
    <div>
      <Banner imagem="player" />
      <Titulo>
        <h1>Ouça o álbum completo!</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="500px"
          height="100px"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
    </div>
  );
}

export default Player;
