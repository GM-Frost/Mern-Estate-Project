import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const FilterPagination = () => {
  ////////////---- PAGINATION FUNCTIONS -----/////////

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 2;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = userListings.slice(firstIndex, lastIndex);
  const npages = Math.ceil(userListings.length / recordsPerPage);
  const numbers = [...Array(npages + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changeCurrentPage = (id) => {
    setCurrentPage(id);
  };
  const nextPage = () => {
    if (currentPage !== npages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <nav className="flex justify-center items-center mx-auto py-10">
      <ul className="flex">
        <li
          className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-baseDark transition duration-150 ease-in-out hover:bg-light-300 cursor-pointer hover:bg-primaryLight hover:text-white"
          aria-label="Previous"
          onClick={prevPage}
        >
          <span className="material-icons text-sm">
            <IoIosArrowBack />
          </span>
        </li>
        {numbers.map((number, index) => (
          <li
            key={index}
            className={`mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr ${
              currentPage === number
                ? "from-primary to-primaryDark shadow-primaryDark/20 text-white"
                : "border border-blue-gray-100 bg-transparent text-blue-gray-500"
            }  p-0 text-sm  shadow-md  transition duration-150 ease-in-out hover:bg-primaryLight hover:text-white cursor-pointer`}
            onClick={() => changeCurrentPage(number)}
          >
            {number}
          </li>
        ))}

        <li
          className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-baseDark transition duration-150 ease-in-out hover:bg-light-300 cursor-pointer hover:bg-primaryLight hover:text-white"
          aria-label="Next"
          onClick={nextPage}
        >
          <span className="material-icons text-sm">
            <IoIosArrowForward />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default FilterPagination;
