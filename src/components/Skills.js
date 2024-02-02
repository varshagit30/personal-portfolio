import skill1 from "../assets/img/skill1.svg";
import skill2 from "../assets/img/skill2.svg";
import skill3 from "../assets/img/skill3.png";
import skill4 from "../assets/img/skill4.png";
import skill5 from "../assets/img/skill5.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p></p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
               <div className="item">
                  <img src={skill1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={skill2} alt="Image" />
                  <h5>React.js</h5>
                </div>
                <div className="item">
                  <img src={skill3} alt="Image" />
                  <h5>Agile Development</h5>
                </div>
                <div className="item">
                  <img src={skill5} alt="Image" />
                  <h5>HTML/CSS</h5>
                </div>
                <div className="item">
                  <img src={skill4} alt="Image" />
                  <h5>Data Structures</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
