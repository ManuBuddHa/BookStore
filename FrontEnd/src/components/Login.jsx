import styled from "styled-components";
import NavBarComponent from "./NavBar";

const Container = styled.div`
  
  background: linear-gradient(90deg, #74099f 0%, #1e003c 100%);
  width: 100vw;
  height: 96vh;
`;
const Signup = () => {
    return (
        <>
            <NavBarComponent />
            <Container>
                <h2>Signup</h2>
            </Container>
        </>
    );
};

export default Signup;