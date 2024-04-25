import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Varsha Selvaraju`} </h1>
                  <p>
                    A year of experience working as a Front-End web Developer at
                    Cantik Technologies Pvt Ltd. Completed my bachelors in
                    Computer science from Bennett university.
                  </p>
                  <p>
                    Able to effectively collaborate in a team setting. Excellent
                    at communication both in english and hindi.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
