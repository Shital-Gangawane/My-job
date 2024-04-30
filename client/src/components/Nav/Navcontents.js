import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa6";
import { navigationLinks } from "./navData";
import logo from "../../assets/projob-logo1.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Login from "../../pages/Login/Login";

const Navcontents = ({ bgColor }) => {

  const [showform,setShowForm]=useState(false);


  //   const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMouseOver = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    // <div className="w-full">
      
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className={` ${
          location.pathname === "/" ? "" : bgColor
        } w-full  z-50 opacity-100`}
      >
        {["lg"].map((expand) => (
          <Navbar key={expand} expand={expand} className="">
            <Container fluid>
              <Navbar.Brand href="#">
                <img className=" h-10" src={logo} />{" "}
              </Navbar.Brand>

              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
              >
                <Offcanvas.Header closeButton className="">
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <img className=" h-10" src={logo} />
                  </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body className="">
                {navigationLinks.map((link, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Nav className="">
                   
                  <Nav.Link href="#"  to={link.url}
                    className="text-black hover:scale-110 transition-all hover:text-blue-600 px-3 py-2 rounded-md text-xs font-light"
                    >
                       {link.label}{" "}
                    {link.hasDropdown && (
                      <span className="inline-block align-bottom">
                        <RiArrowDropDownLine size={20} />
                      </span>
                    )}
                    </Nav.Link>
                  {link.hasDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={
                        activeDropdown === index
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: -10 }
                      }
                      transition={{ duration: 0.3 }}
                      className="w-auto absolute left-0  py-2 mt-5 flex space-x-16 bg-white border-t-2 whitespace-nowrap border-t-blue-600 rounded-b-md shadow-lg"
                    >
                      {link.dropdownOptions.map((option, optionIndex) => (
                       <Nav.Link href="#"
                          key={optionIndex}
                          to={option.url}
                          className="block px-8 py-2 text-sm text-gray-700 hover:bg-blue-100 z-40"
                        >
                          {option.label}
                          </Nav.Link>
                      ))}
                    </motion.div>
                  )}
                  </Nav>
                </div>
              ))}
             
                  
                  <Nav.Link href="/Login" className="ms-auto ">
                  <motion.button
                  onClick={() => setShowForm(true)}
                  className="  md:max-w-60  hover:text-blue-600  rounded-full hover:bg-white text-blackpx-7 whitespace-nowrap py-3 px-4 text-md md:text-md  hover:shadow-md transition duration-300 ease-in-out transform "
                >

                 Login/Register
                </motion.button>
                  </Nav.Link>

                  <Nav.Link href="/Login" className=" ms-4 me-3 mr-sm-2 mb-1">
                  <motion.button
                   onClick={() => setShowForm(true)}
                  className="bg-stone-900  md:max-w-60 rounded-full  hover:bg-blue-600 text-white  whitespace-nowrap py-3 px-10 text-sm md:text-md shadow-md transition duration-300 ease-in-out transform "
                >
                  Login
                </motion.button>
                  </Nav.Link>

                  <Nav.Link href="#" className="mt-3">
                    <FaRegBell className=""/>
                  </Nav.Link>
                 
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </motion.nav>
    
      
    // </div>
  );

  
};

export default Navcontents;
