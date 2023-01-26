import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import { Button, Flex, Heading } from "@chakra-ui/react";
import ModuloEducacional from "./ModuloEducacional";

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function PaginatedItems({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

const ModulosEducacionaisGrid = () => {
  return (
    <>
      <Heading paddingTop={"2rem"} paddingBottom={"2rem"}>
        Módulos Educacionais
      </Heading>
      <Flex>
        <Button
          margin={".5rem"}
          backgroundColor={"white"}
          onClick={console.log("fui clicado!")}
        >
          Covid 19
        </Button>
        <Button
          margin={".5rem"}
          backgroundColor={"white"}
          onClick={console.log("fui clicado!")}
        >
          Sífilis e outras Ist’s
        </Button>
        <Button
          margin={".5rem"}
          backgroundColor={"white"}
          onClick={console.log("fui clicado!")}
        >
          OPAS
        </Button>
        <Button
          margin={".5rem"}
          backgroundColor={"white"}
          onClick={console.log("fui clicado!")}
        >
          Doenças raras
        </Button>
        <Button
          margin={".5rem"}
          backgroundColor={"white"}
          onClick={console.log("fui clicado!")}
        >
          Web Palestras
        </Button>
        <Button
          margin={".5rem"}
          backgroundColor={"white"}
          onClick={console.log("fui clicado!")}
        >
          Sistemas prisional
        </Button>
        <Button
          margin={".5rem"}
          backgroundColor={"white"}
          onClick={console.log("fui clicado!")}
        >
          Preceptoria
        </Button>
      </Flex>
      <PaginatedItems itemsPerPage={4} />
      <ModuloEducacional />
    </>
  );
};

export default ModulosEducacionaisGrid;
