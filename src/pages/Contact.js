import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        city: '',
        state: '',
        zip: '',
        agree: false,
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        username: '',
        city: '',
        state: '',
        zip: '',
        agree: '',
    });

    // Hàm kiểm tra hợp lệ của các trường
    const validate = () => {
        let formErrors = {};
        if (!formData.firstName) formErrors.firstName = 'Please provide a valid first name.';
        if (!formData.lastName) formErrors.lastName = 'Please provide a valid last name.';
        if (!formData.username) formErrors.username = 'Please choose a username.';
        if (!formData.city) formErrors.city = 'Please provide a valid city.';
        if (!formData.state) formErrors.state = 'Please provide a valid state.';
        if (!formData.zip) formErrors.zip = 'Please provide a valid zip.';
        if (!formData.agree) formErrors.agree = 'You must agree before submitting.';

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    // Hàm xử lý thay đổi trong form
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // Hàm xử lý submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert('Form submitted successfully!');
            // Xử lý gửi dữ liệu form
        }
    };

    return (
        <Container className="mt-5">
            <h2>Contact Form</h2>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="firstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                isValid={formData.firstName && !errors.firstName}
                                isInvalid={errors.firstName}
                            />
                            <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="lastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                isValid={formData.lastName && !errors.lastName}
                                isInvalid={errors.lastName}
                            />
                            <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        isValid={formData.username && !errors.username}
                        isInvalid={errors.username}
                    />
                    <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                </Form.Group>

                <Row className="mb-3">
                    <Col>
                        <Form.Group controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                isValid={formData.city && !errors.city}
                                isInvalid={errors.city}
                            />
                            <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="state">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                isValid={formData.state && !errors.state}
                                isInvalid={errors.state}
                            />
                            <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="zip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                                type="text"
                                name="zip"
                                value={formData.zip}
                                onChange={handleChange}
                                isValid={formData.zip && !errors.zip}
                                isInvalid={errors.zip}
                            />
                            <Form.Control.Feedback type="invalid">{errors.zip}</Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="agree">
                    <Form.Check
                        type="checkbox"
                        name="agree"
                        label="Agree to terms and conditions"
                        checked={formData.agree}
                        onChange={handleChange}
                        isInvalid={errors.agree}
                    />
                    <Form.Control.Feedback type="invalid">{errors.agree}</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">Submit form</Button>
            </Form>
        </Container>
    );
};

export default Contact;
