import { Col, Container, Row } from "react-grid-system";

const BoardPage = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>Top nav </Col>
      </Row>
      <Row>
        <Col md={9}>Dnd Columns</Col>
      </Row>
      <Row>
        <Col md={3}>Ticket view</Col>
      </Row>
    </Container>
  );
};

export { BoardPage };
