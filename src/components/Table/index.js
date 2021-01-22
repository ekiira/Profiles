import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import "./table.scss";

import Loader from "../Loader";

const ProfileTable = ({ data, handleShow,}) => {
  return (
    <>
      {data ? (
        data.length ? (
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Username</th>
                <th>Gender</th>

                <th>Email</th>

                <th>Payment Method</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, index) => (
                <tr key={data.UserName}>
                  <td>{index + 1}</td>
                  <td>{`${data.FirstName} ${data.LastName}`}</td>
                  <td>{data.UserName}</td>
                  <td>{data.Gender}</td>

                  <td>{data.Email}</td>

                  <td>{data.PaymentMethod}</td>

                  <td>
                    <Button
                      className="view-btn "
                      variant="link"
                      onClick={() => handleShow(data)}
                    >
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="text-center">No Profiles found</div>
        )
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ProfileTable;
