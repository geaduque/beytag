import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Titulo from "../../components/Titulo";
import Card from "../../components/Card";
import styles from "./Inicio.module.css";

function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/geaduque/beytag-api/videos')
    .then(resposta => resposta.json())
    .then(dados => {
      setVideos(dados)
    })
  }, [])
  
  return (
    <div>
      <Banner imagem="home" />
      <Titulo>
        <h1>Um lugar para a beyhive favoritar os álbuns da Queen B!</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </section>
    </div>
  );
}

export default Inicio;
