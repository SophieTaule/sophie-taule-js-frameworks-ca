import React from 'react';
import "./sass/style.scss";
import GameList from "./components/game/GameList";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <div className="App">
        <h1 className="StoreName">Game Shop</h1>
        <Container className="card-container">
          <Row>
            <GameList />
          </Row>
        </Container>
      </div>
    </Layout>
  );
}
export default App;