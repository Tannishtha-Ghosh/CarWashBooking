// src/components/Pagination.js
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => onPageChange(i)}
        className={`px-3 py-1 mx-1 border rounded ${
          currentPage === i ? "bg-blue-500 text-white" : "bg-white"
        }`}
      >
        {i}
      </button>
    );
  }

  return <div className="flex justify-center my-4">{pages}</div>;
};

export default Pagination;
