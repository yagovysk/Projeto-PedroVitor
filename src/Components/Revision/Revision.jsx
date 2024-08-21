import revision from "../../assets/revision-img.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Revision.css";

export function Revision() {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Inicializa o AOS com uma duração de 1000ms
  }, []);

  return (
    <section className="revision-section">
      <div className="container-revision">
        <h2 className="title-revision">Revisão e Manutenção</h2>
        <div data-aos="fade-up" className="border">
          <img src={revision} alt="" />
        </div>
        <article data-aos="fade-up" className="revision-article">
          <h2>Revisão e Manutenção</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            explicabo porro qui pariatur dolorum ipsum amet, culpa dignissimos
            repudiandae quae voluptatum facilis quis quaerat aut accusamus
            debitis hic a. Consequuntur.
          </p>
          <div className="container-buttons">
            <a href="">Sms</a>
            <a href="">Call</a>
          </div>
        </article>
      </div>
      <div data-aos="fade-up" className="revision-cards">
        <div data-aos="fade-up">
          <h3>Checklist Geral</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            blanditiis ut similique illum quibusdam? Repellendus quidem ratione
            dolorum eos, nihil rerum officiis impedit distinctio, excepturi sit
            id laboriosam, voluptates numquam!
          </p>
        </div>
        <div data-aos="fade-up">
          <h3>Scanner aprofundado</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            labore suscipit soluta sunt! Itaque ad deserunt, ducimus fuga
            accusantium, iure, minima facere autem harum exercitationem
            distinctio quod animi? Nulla, inventore.
          </p>
        </div>
        <div data-aos="fade-up">
          <h3>Original ou Performance</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus deleniti nostrum rem commodi. Culpa atque libero,
            incidunt, repellendus ex quasi eum, laudantium consequatur veniam
            vero labore assumenda voluptatum dolor tempore!
          </p>
        </div>
      </div>
    </section>
  );
}
