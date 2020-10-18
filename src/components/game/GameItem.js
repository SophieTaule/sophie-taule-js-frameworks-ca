import React from 'react';
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


function GameItem({ id, title, image, rating, released }) {

    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={image} alt="game-img" />
            <Card.Body>
                <Card.Title className="game__title">{title}</Card.Title>
                <div className="game__info">
                    <p className="game__info--stat">&#9733; {rating} <span>Rating</span></p>
                    <p className="game__info--stat">{released} <span>Release Date</span></p>
                </div>
                <Button className="game_btn" variant="info" size="lg" block href={"game/" + id}>View</Button>
            </Card.Body>
        </Card>
    );
}

GameItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    released: PropTypes.number.isRequired
}

export default GameItem;