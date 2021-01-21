import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";

const Profile = ({ handleClose, show, profile }) => {
  return (
    <div className="">
      {profile ? (
        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
          centered
          size="lg"
          scrollable={true}
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-center">{`${profile.FirstName}`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col md={6}>
                  <Card className="p-3">
                    <h4>Personal Information</h4>
                    <dl>
                      <dt>Full Name</dt>
                      <dd>{`${profile.FirstName} ${profile.LastName}`}</dd>
                      <dt>Username</dt>
                      <dd>{profile.UserName}</dd>
                      <dt>Gender</dt>
                      <dd>{profile.Gender}</dd>
                    </dl>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="p-3">
                    <h4>Payment Information</h4>
                    <dl>
                      <dt>Payment Method</dt>
                      <dd>{profile.PaymentMethod}</dd>
                      <dt>Credit Card Type</dt>
                      <dd>{profile.CreditCardType}</dd>
                      <dt>Credit Card Number</dt>
                      <dd>{profile.CreditCardNumber}</dd>
                    </dl>
                  </Card>
                </Col>
              </Row>

              <Row className="pt-5">
                <Col xs={12}>
                  <Card className="p-3">
                    <h4>Device Information</h4>
                    <dl>
                      <dt>MAC Address</dt>
                      <dd>{profile.MacAddress}</dd>
                      <dt>Last Login</dt>
                      <dd>{profile.LastLogin}</dd>
                    </dl>
                  </Card>
                </Col>
              </Row>

              <Row className="pt-5">
                <Col xs={12}>
                  <Card className="p-3">
                    <h4>Contact Information</h4>
                    <dl>
                      <dt>Email</dt>
                      <dd>{profile.Email}</dd>
                      <dt>Phone Number</dt>
                      <dd>{profile.PhoneNumber}</dd>
                      <dt>Domain Name</dt>
                      <dd>{profile.DomainName}</dd>
                      <dt>URL</dt>
                      <dd>{profile.URL}</dd>
                      <dt>Location</dt>
                      <dd>
                        <iframe
                          title={`${profile.FirstName}'s Location`}
                          src={`https://maps.google.com/maps?q=${profile.Latitude},${profile.Longitude}&z=13&output=embed`}
                          //   src={`https://maps.google.com/maps?q=${profile.Latitude},${profile.Longitude}&z=14&output=embed`}
                          width="100%"
                          height="300"
                          frameBorder="0"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          aria-hidden="false"
                          tabIndex="0"
                          scrolling="yes"
                        ></iframe>
                      </dd>
                    </dl>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      ) : null}
    </div>
  );
};

export default Profile;
