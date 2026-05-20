import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const NavBar = styled.nav`
  background-color: #1e003c;
  backdrop-filter: blur(16px);
  padding: 3vw 1vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 100%;
  border-bottom: 2px solid #ffffff20;
`;
const Heading = styled.h1`
    color: #ffffff;
    font-size: 2rem;
    margin: 0;
    font-family: Montserrat,Playfair Display;
`;
const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
    width: 40%;
    font-family: Montserrat;
    font-weight: 200;
    justify-content: space-around;
`;
const List = styled.li`
    color: #ffffff;
    font-size: 1.2rem;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #b300ff;
      transform: scale(1.1);
      font-weight: 500;
      transition: all 0.3s ease;
    }
`;

const Signup = styled.button`
    background-color: #74099f;
    font-family: Montserrat;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    width: 20vh;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 8px;
    &:hover {
      background-color: #b300ff;
      transform: scale(1.1);
      box-shadow: 0 0px 4px rgba(255, 255, 255, 0.2);
      font-weight: 500;
      transition: all 0.3s ease;
    }
`;

const Container = styled.div`
    display: flex;
    gap: 1rem;
`;

const NavBarComponent = () => {
  return (
    <NavBar>
      <StyledLink to="/"><Heading>Book & Co.</Heading></StyledLink>
      <NavLinks>
        <StyledLink to="/"><List>Dashboard</List></StyledLink>
        <StyledLink to="/books"><List> View Books</List></StyledLink>
        
        <StyledLink to="/members"><List>View Cart</List></StyledLink>
        
      </NavLinks>
      <Container>
        <StyledLink to="/signup"> <Signup >Register</Signup></StyledLink>
        
      </Container>
    </NavBar>
  );
};

export default NavBarComponent;