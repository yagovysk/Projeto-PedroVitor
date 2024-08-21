import logo from "../../assets/logo.png";
import carro from "../../assets/carro-home.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

export function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Inicializa o AOS com uma duração de 1000ms
  }, []);

  return (
    <section className="section-home">
      <article className="article-home">
        <img className="logo" src={logo} alt="" />
        <h1>Title</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam fugiat
          iure non quibusdam ea minus, est similique veniam aperiam quis quod
          necessitatibus corrupti repellendus nobis excepturi. Cupiditate
          delectus ipsa necessitatibus.
        </p>
        <div className="container-buttons">
          <a href="" target="blank_">
            Sms
          </a>
          <a href="" target="blank_">
            Call
          </a>
        </div>
      </article>
      <div className="container-responsive">
        <div className="container-car">
          <img data-aos="fade-up" className="img-car" src={carro} alt="" />
          <p>Tenha a melhor revisão pré compra de veículos</p>
        </div>
      </div>
    </section>
  );
}
