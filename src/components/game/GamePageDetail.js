
import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { BASE_URL } from "../../constants/api";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";


function GamePageDetail() {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();

    const url = BASE_URL + "/" + id;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setDetail(json))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [url]);

    if (loading) {
        return <h1 ><Spinner animation="border" className="spinner" variant="info" />Loading Store..</h1>
    }

    return (
        <Container className="detail__container">
            <Row>
                <Col xl={8}>
                    <Image className="detail__image" fluid src={detail.background_image} />
                </Col>
                <Col className="detail">
                    <h1 className="detail__title">{detail.name}</h1>
                    <p>{detail.description_raw}</p>
                    <Button className="primary_btn" variant="info" href={detail.website} target="_blank">Go to Website</Button>
                </Col>
            </Row>
        </Container >
    );
}

export default GamePageDetail;