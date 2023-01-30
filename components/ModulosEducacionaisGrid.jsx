import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import {
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import ModuloEducacional from "./ModuloEducacional";
import axios from "axios";
import styles from "./ModulosEducacionaisGrid.module.css";

// Example items, to simulate fetching from another resources.
//const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function PaginatedItems(props) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [items, setItems] = useState([]);

  //fetch items from API
  useEffect(() => {
    if (props.filter == "") {
      axios
        .get(
          "http://localhost:3004/cursos?cateroria=Acessibilidade&_page=1&_limit=30"
        )
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
          props.resultadosNumber(res.data.length);
        });
    }
    if (props.filter == "covid") {
      axios
        .get("http://localhost:3004/cursos?cateroria=Covid%2019")
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
          props.resultadosNumber(res.data.length);
        });
    }
    if (props.filter == "sifilis") {
      axios
        .get(
          "http://localhost:3004/cursos?cateroria=S%C3%ADflis%20e%20outras%20ist"
        )
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
          props.resultadosNumber(res.data.length);
        });
    }
    if (props.filter == "opas") {
      axios.get("http://localhost:3004/cursos?cateroria=OPAS").then((res) => {
        console.log(res.data);
        setItems(res.data);
        props.resultadosNumber(res.data.length);
      });
    }
    if (props.filter == "doencas") {
      axios
        .get("http://localhost:3004/cursos?cateroria=Doen%C3%A7as%20raras")
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
          props.resultadosNumber(res.data.length);
        });
    }
    if (props.filter == "web") {
      axios
        .get("http://localhost:3004/cursos?cateroria=WebPalestras")
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
          props.resultadosNumber(res.data.length);
        });
    }
    if (props.filter == "sistema") {
      axios
        .get("http://localhost:3004/cursos?cateroria=Sistema%20prisional")
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
          props.resultadosNumber(res.data.length);
        });
    }
    if (props.filter == "preceptoria") {
      axios
        .get("http://localhost:3004/cursos?cateroria=Preceptoria")
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
          props.resultadosNumber(res.data.length);
        });
    }
  }, [props.filter]);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + props.itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / props.itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * props.itemsPerPage) % items.length;
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
        containerClassName={styles.pagination}
        pageClassName={styles.pageClassName}
        breakClassName={styles.breakClassName}
        nextClassName={styles.nextClassName}
        previousClassName={styles.previousClassName}
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
              id={item.id}
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
  const [filter, setFilter] = useState("");
  const [resultados, setResultados] = useState(0);

  const handleFilterCovid = () => {
    setFilter("covid");
  };
  const handleFilterSifilis = () => {
    setFilter("sifilis");
  };
  const handleFilterOpas = () => {
    setFilter("opas");
  };
  const handleFilterDoencas = () => {
    setFilter("doencas");
  };
  const handleFilterWeb = () => {
    setFilter("web");
  };
  const handleFilterSistema = () => {
    setFilter("sistema");
  };
  const handleFilterPreceptoria = () => {
    setFilter("preceptoria");
  };

  const changeResultadosHandler = (resultados) => {
    setResultados(resultados);
  };

  return (
    <>
      <Heading paddingTop={"2rem"} paddingBottom={"2rem"}>
        Módulos Educacionais
      </Heading>
      <Flex>
        <Button
          margin={".5rem"}
          backgroundColor={"white"}
          onClick={handleFilterCovid}
        >
          Covid 19
        </Button>
        <Button
          margin={".5rem"}
          backgroundColor={"white"}
          onClick={handleFilterSifilis}
        >
          Sífilis e outras Ist’s
        </Button>
        <Button
          margin={".5rem"}
          backgroundColor={"white"}
          onClick={handleFilterOpas}
        >
          OPAS
        </Button>
        <Button
          margin={".5rem"}
          backgroundColor={"white"}
          onClick={handleFilterDoencas}
        >
          Doenças raras
        </Button>
        <Button
          margin={".5rem"}
          backgroundColor={"white"}
          onClick={handleFilterWeb}
        >
          Web Palestras
        </Button>
        <Button
          margin={".5rem"}
          backgroundColor={"white"}
          onClick={handleFilterSistema}
        >
          Sistemas prisional
        </Button>
        <Button
          margin={".5rem"}
          backgroundColor={"white"}
          onClick={handleFilterPreceptoria}
        >
          Preceptoria
        </Button>
      </Flex>
      <Text textAlign={"left"} textColor={"gray"}>
        6 de {resultados} Resultados
      </Text>
      <PaginatedItems
        itemsPerPage={6}
        filter={filter}
        resultadosNumber={changeResultadosHandler}
      />
    </>
  );
};

export default ModulosEducacionaisGrid;
