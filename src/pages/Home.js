import React from "react";
import { Container, Carousel, Row, Col, Image, Card } from "react-bootstrap";
import Quiz from "./Quiz"; // Import Quiz Component
import "../CSS/Home.css"; // Import CSS cho Home

function Home() {
    const pizzas = [
        { id: 1, name: "Pizza Margherita", image: "/images/menu1.jpg" },
        { id: 2, name: "Pepperoni Pizza", image: "/images/menu2.jpg" },
        { id: 3, name: "BBQ Chicken Pizza", image: "/images/menu3.jpg" },
        { id: 4, name: "Seafood Pizza", image: "/images/menu4.jpg" },
    ];

    const otherDishes = [
        { id: 5, name: "Spaghetti Carbonara", image: "/images/menu-01.jpg", category: "Pasta" },
        { id: 6, name: "Grilled Salmon", image: "/images/menu-02.jpg", category: "Main Dish" },
        { id: 7, name: "Caesar Salad", image: "/images/menu-03.jpg", category: "Salad" },
        { id: 8, name: "Tiramisu", image: "/images/menu-04.jpg", category: "Dessert" },
        { id: 9, name: "Spaghetti Carbonara", image: "/images/menu-05.jpg", category: "Pasta" },
        { id: 10, name: "Grilled Salmon", image: "/images/menu-06.jpg", category: "Main Dish" },
        { id: 11, name: "Caesar Salad", image: "/images/menu-07.jpg", category: "Salad" },
        { id: 12, name: "Tiramisu", image: "/images/menu-08.jpg", category: "Dessert" },
    ];

    return (
        <div className="home-container"> {/* Chỉ áp dụng CSS cho phần Home */}
            {/* Carousel Section */}
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="/images/pizza1.jpg" alt="Slide-1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/images/pizza2.jpg" alt="Slide-2" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/images/pizza3.jpg" alt="Slide-3" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/images/pizza4.jpg" alt="Slide-4" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="/images/pizza5.jpg" alt="Slide-5" />
                </Carousel.Item>
            </Carousel>

            {/* Pizza Section */}
            <Container className="text-center my-5">
                <h2 className="mb-4">🍕 Our Pizzas</h2>
                <Row className="justify-content-center">
                    {pizzas.map((pizza) => (
                        <Col key={pizza.id} xs={12} sm={6} md={3} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={pizza.image} style={{ width: "200px", height: "150px", objectFit: "cover" }} />
                                <Card.Body>
                                    <Card.Title>{pizza.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* Other Dishes Section */}
            <Container className="text-center my-5">
                <h2 className="mb-4">🍽 Other Dishes</h2>
                <Row className="justify-content-center">
                    {otherDishes.map((dish) => (
                        <Col key={dish.id} xs={12} sm={6} md={3} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={dish.image} style={{ width: "220px", height: "150px", objectFit: "cover" }} />
                                <Card.Body>
                                    <Card.Title>{dish.name}</Card.Title>
                                    <Card.Text>{dish.category}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Home;
