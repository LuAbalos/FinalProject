import React from "react";
import {Container, Row} from "reactstrap"
import Item from "./Item";


export default function ItemList({ productos }) {
    return (
        <>
            <Container>
                <Row>
                {productos.map ((product) => (
                        <Item key={product.id} {...product} />
                    ))}
                </Row>
            </Container>
        </>
    )
}