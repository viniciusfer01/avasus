import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Button, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import ModuloEducacional from "./ModuloEducacional";
import axios from "axios";

// Example items, to simulate fetching from another resources.
//const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function PaginatedItems({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [items, setItems] = useState([]);

  //fetch items from API
  useEffect(() => {
    axios
      .get(
        "http://localhost:3004/cursos?cateroriacateroria=Acessibilidade&_page=1&_limit=30"
      )
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      });
  }, []);

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
        nextLabel="Próximo >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Anterior"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

function Items({ currentItems }) {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {currentItems &&
        currentItems.map((item) => (
          <GridItem w={"100%"} key={item.id}>
            <ModuloEducacional
              capa={item.capa}
              titulo={item.titulo}
              parceiros={item.parceiros}
              matriculados={item.matriculados}
              duracao={item.duracao}
              avaliacao={item.avaliacao}
              sobre={item.sobre}
            />
          </GridItem>
        ))}
    </Grid>
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
      <PaginatedItems itemsPerPage={6} />
    </>
  );
};

export default ModulosEducacionaisGrid;
