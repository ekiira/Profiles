import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Pagination from "../components/Pagination";
import Card from "react-bootstrap/Card";

import Table from "../components/Table/";
import Profile from "./Profile";

const Profiles = () => {
  const [profiles, setProfiles] = useState(null);
  const [page, setPage] = useState(1);

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

  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (profile) => {
    setShow(true);
    setProfile(profile);
  };

  return (
    <div>
      <Container fluid>
        <h1 className="text-center pt-4 pb-3">ShopHere</h1>
        <h3 className="text-center py-4">Transactions Records</h3>
        <Card className="mb-5">
          <Card.Header>
            <Card.Title className="mb-0">Profiles</Card.Title>
          </Card.Header>
          <Card.Body>
            <Table data={currentPost} handleShow={handleShow} />

            <Pagination pageCount={Number(pn)} onChange={handlePageChange} />
            <Profile show={show} handleClose={handleClose} profile={profile} />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Profiles;
