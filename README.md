# BeautyBox.com

### Larger Collection of Beauty Products from Various Brands



import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import MakeUpBtn from "./MakeUpBtn";
import SkinBtn from "./SkinBtn";
import { NavbarContext } from "../../Context/NavbarContextProvider";
import { useContext } from "react";

function OffcanvasExample() {
  const { makeup,skin } = useContext(NavbarContext);
  const expand = "sm";
  return (
    <>
      <Navbar key={expand} bg="#ffffff" expand={expand} className="mb-3 ">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Categories</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <MakeUpBtn  heading={makeup.heading} makeupData={makeup.MakeUpData} />
              <SkinBtn heading={skin.heading} skinData={skin.skinData} image={skin.image}/>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
