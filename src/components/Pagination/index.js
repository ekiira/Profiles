import React from "react";
import ReactPaginate from "react-paginate";

import "./pagination.scss";

const Pagination = ({ pageCount, onChange }) => {
  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      activeClassName={"active-page"}
      containerClassName={"pagination"}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={onChange}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      previousClassName={"page-item"}
      previousLinkClassName={"page-link"}
      nextClassName={"page-item"}
      nextLinkClassName={"page-link"}
    />
  );
};

export default Pagination;
