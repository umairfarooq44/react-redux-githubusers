import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col
} from "reactstrap";

const UserDetailComponent = ({ avatarUrl, id, login, htmlUrl }) => (
  <Container>
    <Card>
      <CardBody>
        <CardTitle>User details</CardTitle>
      </CardBody>
      <img width="300" height="300" src={avatarUrl} alt="Card cap" />
      <CardBody>
        <Row>
          <Col md={2}>
            id:
          </Col>
          <Col>
            {id}
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            Login:
          </Col>
          <Col>
            {login}
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            html Url:
          </Col>
          <Col>
            <a href={htmlUrl}>{htmlUrl}</a>
          </Col>
        </Row>
      </CardBody>
    </Card>
    <Link to="/"><Button>Go Back</Button></Link>
  </Container>
);

UserDetailComponent.defaultProps = {
  avatarUrl: "",
  login: "",
  htmlUrl: "",
  id: 0
}

UserDetailComponent.propTypes = {
  avatarUrl: PropTypes.string,
  login: PropTypes.string,
  htmlUrl: PropTypes.string,
  id: PropTypes.number
};

export default UserDetailComponent;
