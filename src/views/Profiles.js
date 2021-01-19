import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Pagination from "../components/Pagination";
import Card from "react-bootstrap/Card";

import Table from "../components/Table/";

const Profiles = () => {
  const [profiles, setProfiles] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getProfiles = async () => {
      const response = await fetch(
        `https://api.enye.tech/v1/challenge/records`
      );
      const data = await response.json();
      console.log(data);

      if (data.status === "success") {
        setProfiles(data.records.profiles);
      } else {
        console.log("error");
      }
    };
    getProfiles();
  }, []);

  const itemsPerPage = 10;
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

  return (
    <div>
      <Container fluid>
      <h2 className='text-center py-4'>ShopHere</h2>
      <h4 className='text-center py-4'>Transactions Records</h4>
        <Card className="mb-5">
          <Card.Header>
            <Card.Title className="mb-0">Profiles</Card.Title>
          </Card.Header>
          <Card.Body>
            <Table data={currentPost} />

            <Pagination pageCount={Number(pn)} onChange={handlePageChange} />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Profiles;
