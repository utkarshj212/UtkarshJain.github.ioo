import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import relience from "../../Assets/Projects/relience.png";
import toggle from "../../Assets/Projects/toggletrack.png";
 import basket from "../../Assets/Projects/bigbasket.png";
 import movie from "../../Assets/Projects/toggletrack.png";
 import resta from "../../Assets/Projects/resta.png";
// import meanBuy from "../../Assets/Projects/meanBuy.png";
// import countryDetails from "../../Assets/Projects/countryDetails.png";
// import fitnessClub from "../../Assets/Projects/fitnessClub.png";

function Projects() {
  return (
    <div className="project-background activeNavlink" id="scrollProjects">
      {/* <Particle2 /> */}
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Projects </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
           
            {/* Toggle-Track Clone -------------------------------------------------------------------*/}
            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={basket}
                isBlog={false}
                title="J.Crew Clone"
                tool=" React,Chakra-Ui, JavaScript, HTML, CSS"
                description="J. Crew is in the industry of: Apparel & Accessories Retail, Retail"
                link="https://github.com/utkarshj212/jaded-burst-5558/tree/main/jcrew"
                demoLink="https://tranquil-griffin-aab5d6.netlify.app/"
              />
            </Col>


            {/* greenhouse Clone -------------------------------------------------------------------*/}
            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={relience}
                isBlog={false}
                title="Reliance Digital Clone"
                tool= "React,Redux,ChakraUi,JavaScript, CSS"
                description="Reliance Digital is an Indian consumer electronics retailer. It is a subsidiary of Reliance Retail, a wholly owned subsidiary of Reliance Industries."
                link="https://github.com/RajParmar03/Reliance_digital_clone"
                demoLink="https://delightful-twilight-10e5bd.netlify.app/"
              />
            </Col>

            {/* movie 2.0 ------------------------------------------------------------- */}
            <Col md={6} className="project-card">
              <ProjectCard
                imgPath={toggle}
                isBlog={false}
                title="Skin-Store Clone"
                tool="  React,JavaScript,API,Local-Storage HTML, CSS"
                description="SkinStore is the online hub where beauty and science click, delivering the latest in innovative clinical skincare and luxury products for over 20 years."
                link="https://github.com/Vishal6300/-rhetorical-division-3531"
                demoLink="https://elegant-sprite-192e51.netlify.app/"
              />
            </Col>

                {/* movie 2.0 ------------------------------------------------------------- */}
                <Col md={6} className="project-card">
              <ProjectCard
                imgPath={resta}
                isBlog={false}
                title="Monday.com Clone"
                tool="React,JavaScript,HTML, CSS"
                description="monday.com is a powerful project management system — a complete Work OS designed to help your team complete projects efficiently, collaborate effectively, and grow online. "
                link="https://github.com/utkarshj212/honorable-lace-4969"
                demoLink="https://cool-begonia-ee30b2.netlify.app/"
              />
            </Col>

                  {/* movie 2.0 ------------------------------------------------------------- */}
                  {/* <Col md={6} className="project-card">
              <ProjectCard
                imgPath={movie}
                isBlog={false}
                title="Movie Tickit"
                tool="  JavaScript,API,Local-Storage HTML, CSS"
                description="This is A simple movie tickit booking app"
                link="https://github.com/utkarshj212/freezing-value-6715"
                demoLink="https://bejewelled-strudel-1e42ae.netlify.app/"
              />
            </Col> */}





          </Row>
        </Container>
      </Container>

    </div>
  );
}

export default Projects;
