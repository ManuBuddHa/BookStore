import styled from "styled-components";
import NavBar from "./NavBar";

const Container = styled.div`
    background-color: #d5d5d5;
    padding: 5vh;
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));
    gap: 20px;
`;
const Para = styled.div`
    background-color: red;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    `;

const Books = () => {
    return (
        <>
            <NavBar />
            <Container>
                <Para>
                    <img src="#" alt="Books will be displayed here." style={{width:'100%',backgroundColor:'green',height:'50%'}} />
                    <b>Book Name</b>
                    <p>Book Price</p>
                    <p>Author Name</p>
                    <div style={{display:'flex',justifyContent:'space-between',width:'100%',padding:'0 10px'}}>
                    <button className="bg-white hover:bg-blue-700 text-red-600 font-bold rounded p-2">Add to Favourites</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">Add to Cart</button>
                    </div>
                    </Para>
                <Para>Books will be displayed here.</Para>
                <Para>Books will be displayed here.</Para>
                <Para>Books will be displayed here.</Para>
                <Para>Books will be displayed here.</Para>
                <Para>Books will be displayed here.</Para>
                <Para>Books will be displayed here.</Para>
                <Para>Books will be displayed here.</Para>
                <Para>Books will be displayed here.</Para>
                <Para>Books will be displayed here.</Para>
                <Para>Books will be displayed here.</Para>
                <Para>Books will be displayed here.</Para>

            </Container>
        </>
    )
}

export default Books