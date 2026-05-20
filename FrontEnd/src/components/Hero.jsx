import styled from 'styled-components';
import bgImg from '../images/homeBG.jpg';
import NavBarComponent from './NavBar';
import Img from '../images/girl_book.jpg';
import { Link } from 'react-router-dom';
const Container = styled.div`
    background-color: #1e003c;
    height: 90vh;
    width: 100%;
    display: flex;
    padding-top: 5vh;
`;

const Quote1 = styled.h1`
    color: #ffffff;
    font-size: 4rem;
    font-family: Montserrat, serif;
    padding: 2rem;
    font-weight: 500;
    background: linear-gradient(90deg, #1e003c 0%, #74099f 100%);
    margin-left: 10vh;
    line-height: 1.2;
`;

const Quote2 = styled.h1`
    color: #ffffff;
    font-size: 3rem;
    font-family: Montserrat, serif;
    padding: 2rem;
    font-weight: 200;
    margin-left: 30vh;
    text-align: right;
    line-height: 1.2;
    `;

const LoginBox = styled.div`
    width: 30vw;
    height: 70vh;
    border: 2px solid #74099f;
    box-shadow: 0 0 10px #74099f;
    backdrop-filter: blur(10px);
    background-color: #ffffff20;
    border-radius: 10px;
    margin: auto 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 4rem;
`;
const FormComponent = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 5vh;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-top: 5vh;
`;
const Input = styled.input`
        margin-top: 0.5vh;
        background-color: #ffffff20;
        border: none;
        border-radius: 5px;
        padding: 0.75rem;
        color: #ffffffaa;
        &:focus {
            outline: none;
            box-shadow: 0 0 5px #74099f;
        }
`;
const LoginBtn = styled.button`
    padding: 0.75rem;
    font-size: 1.25rem;
    cursor: pointer;
    width: 100%;
    margin-top: 1vh;
`;
const SignupDiv = styled.div`
    margin-top: 2vh;
    color: #ffffff;
`;

const StyledLink = styled(Link)`
    color: #e0d508;
    font-weight: 500;
    &:hover {
        color: #fff700;
        transition: all 0.3s ease;
    }
`;
const Hero = () => {
    return (
        <>
            <NavBarComponent />
            <Container>
                <div style={{width:'70vw'}}>
                    <Quote1>The More That You Read, The More Things<br /> You'll Know.</Quote1>
                    <Quote2>The More That You Learn,<br /> The More Places You'll Go.</Quote2>
                </div>
                <LoginBox>
                    <h2 className='text-5xl font-light text-white'>Login</h2>
                    <Form action="" method="POST">
                        <FormComponent>
                            <label htmlFor="email" className='text-white'>Email:</label>
                            <Input type="email" id="email" name="email" placeholder="Enter your email" />
                        </FormComponent>
                        <FormComponent>
                            <label htmlFor="password" className='text-white'>Password:</label>
                            <Input type="password" id="password" name="password" placeholder="Enter your password" />
                        </FormComponent>
                        <LoginBtn type="submit" className='bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-md transition duration-300'>Login</LoginBtn>
                        <SignupDiv>Don't have an account? <StyledLink to="/signup">Register</StyledLink></SignupDiv>
                    </Form>
                </LoginBox>
            </Container>
        </>
    )
}

export default Hero;