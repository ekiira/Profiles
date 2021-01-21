import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Pagination from "../components/Pagination";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Table from "../components/Table/";
import Profile from "./Profile";

const Profiles = () => {
  const [profiles, setProfiles] = useState(null);
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(null);
  const [searchName, setSearchName] = useState("");
  const [filterPayment, setFilterPayment] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [filteredProfiles, setFilteredProfiles] = useState(null);

  // fetch profiles api
  useEffect(() => {
    const getProfiles = async () => {
      const response = await fetch(
        `https://api.enye.tech/v1/challenge/records`
      );
      const data = await response.json();

      if (data.status === "success") {
        setProfiles(data.records.profiles);
      }
    };
    getProfiles();
  }, []);

  const onReset = () => {
    setSearchName("");
    setFilterPayment("");
    setFilterGender("");
  };

  const onNameSearch = () => {
    if (searchName) {
      setFilteredProfiles(
        profiles.filter(
          (profile) =>
            profile.FirstName.toLowerCase().includes(
              searchName.toLowerCase().trim()
            ) ||
            profile.LastName.toLowerCase().includes(
              searchName.toLowerCase().trim()
            )
        )
      );
    }
  };

  // pagination
  const itemsPerPage = 20;
  const indexofLastPost = page * itemsPerPage;
  const indexofFirstPost = indexofLastPost - itemsPerPage;
  const currentPost = profiles
    ? profiles.slice(indexofFirstPost, indexofLastPost)
    : null;
  const [pn, setPn] = useState("");

  const handlePageChange = (event) => {
    if (event.selected >= 0 && event.selected <= pn) {
      setPage(event.selected + 1);
    }
  };

  useEffect(() => {
    if (profiles) {
      for (let i = 1; i <= Math.ceil(profiles.length / itemsPerPage); i++) {
        setPn(i);
      }
    }
  }, [profiles]);

  // end of pagination

  // modal
  const handleClose = () => setShow(false);
  const handleShow = (profile) => {
    setShow(true);
    setProfile(profile);
  };
  // end of modal

  return (
    <div>
      <Container fluid>
        <h1 className="text-center pt-4 pb-3">ShopHere</h1>
        <h3 className="text-center py-4">Transactions Records</h3>
        <Card className="p-3">
          <div>
            <Card.Title className="mb-0 title font-weight-bold">
              Profiles
            </Card.Title>
          </div>
          <div className="pt-4 pb-3 mb-4">
            <div className="d-flex justify-content-between">
              <p className="">Filter by:</p>
              <p>
                <Button className="reset-btn " variant="link" onClick={onReset}>
                  Reset
                </Button>
              </p>
            </div>
            <Row>
              <Col lg={4} className='pb-2 pb-lg-0'>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="name"
                    aria-label="name"
                    aria-describedby="name"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                  />
                  <Button variant="secondary" onClick={onNameSearch}>
                    Search
                  </Button>
                </InputGroup>
              </Col>

              <Col lg={8}>
                <Row>
                  <Col lg={6} className='pb-4 pb-lg-0'>
                    <InputGroup>
                      <p className="filter-title"> Payment Method</p>

                      <Form.Control
                        as="select"
                        size="md"
                        custom
                        value={filterPayment}
                        onChange={(e) => setFilterPayment(e.target.value)}
                      >
                        <option></option>

                        <option>money order</option>
                        <option>cc</option>
                        <option>paypal</option>
                        <option>check</option>
                      </Form.Control>
                    </InputGroup>
                  </Col>

                  <Col lg={6} className='pb-4 pb-lg-0'>
                    <InputGroup>
                      <p className="filter-title">Gender</p>

                      <Form.Control
                        as="select"
                        size="md"
                        custom
                        value={filterGender}
                        onChange={(e) => setFilterGender(e.target.value)}
                      >
                        <option></option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Prefer to skip</option>
                      </Form.Control>
                    </InputGroup>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <Table data={currentPost} handleShow={handleShow} />

          <Pagination pageCount={Number(pn)} onChange={handlePageChange} />
          <Profile show={show} handleClose={handleClose} profile={profile} />
        </Card>
      </Container>
    </div>
  );
};

export default Profiles;
