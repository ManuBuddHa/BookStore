import styled from "styled-components";
import NavBarComponent from './NavBar';

const BGimg = styled.div`
    background-color: #1e003c;
    width: 99vw;
    min-height: 100vh; 
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1vh;
`;

const SignupBox = styled.div`
    width: 40vw;
    height: fit-content;
    border: 2px solid #74099f;
    box-shadow: 0 0 10px #74099f;
    backdrop-filter: blur(10px);
    background-color: #ffffff20;
    border-radius: 10px;
    margin: 5vh 15vh 5vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 4rem;
`;

const FormComponent = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2vh;
    color: #ffffff;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-top: 2vh;
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

const SignupBtn = styled.button`
    margin: 1em auto 0;
    padding: 0.8em;
    font-size: 1.1em;
    background-color: #a200e1;
    color: white;
    border: 2px solid #a200e1;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    transition: all 0.3s ease;
    &:hover {
        background-color: #74099f;
        box-shadow: 0 0px 12px #a200e1;
        transform: scale(1.05);
        transition: all 0.3s ease;
    }
`;

const TextContainer = styled.div`
    text-align: center;
    margin-left: 15vh;
    border-right: 2px solid #74099f;
    height: 20vw;
    padding-right: 10vh;
`;

const Signup = () => {
    return (
        <>
            <NavBarComponent />
            <BGimg>
                <TextContainer>
                    <p style={{ color: 'white', fontSize: '3em', fontFamily: 'Playwrite GB S', fontWeight: '700', padding: '10px' }}>
                        "Collecting stories,<br /> one book at a time"
                    </p>
                </TextContainer>
                
                <SignupBox>
                        <h1 style={{ color: 'white', fontSize: '3em', fontFamily: 'Montserrat', fontWeight: '700' }}>
                            Signup
                        </h1>
                    <Form>
                        <FormComponent>
                            <label htmlFor="name">Name : </label>
                            <Input type="text" id="name" placeholder="Name" />
                        </FormComponent>
                        <FormComponent>
                            <label htmlFor="username">Username : </label>
                            <Input type="text" id="username" placeholder="Username" />
                        </FormComponent>
                        <FormComponent>
                            <label htmlFor="email">Email :  </label>
                            <Input type="email" id="email" placeholder="Email" />
                        </FormComponent>
                        <FormComponent>
                            <label htmlFor="phone">Phone : </label>
                            <Input type="tel" id="phone" placeholder="Phone" />
                        </FormComponent>
                        <FormComponent>
                            <label htmlFor="password">Password : </label>
                            <Input type="password" id="password" placeholder="Password" />
                        </FormComponent>
                        <FormComponent>
                            <label htmlFor="confirmPassword">Confirm Password :</label>
                            <Input type="password" id="confirmPassword" placeholder="Confirm Password" />
                        </FormComponent>
                        <SignupBtn type="submit">Sign Up</SignupBtn>
                    </Form>
                </SignupBox>
            </BGimg>
        </>
    );
}

export default Signup;