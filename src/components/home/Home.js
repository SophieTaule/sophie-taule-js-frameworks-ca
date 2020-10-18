import React from 'react';
import GameList from "../game/GameList";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Home() {
    return (
        <div className="home">
            <Container className="card-container">
                <Row>
                    <GameList />
                </Row>
            </Container>
        </div>
    );
}
export default Home;