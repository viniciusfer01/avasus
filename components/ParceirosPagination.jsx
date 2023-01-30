import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import Parceiro from "@/components/Parceiro";
import { Grid, GridItem } from "@chakra-ui/react";
import styles from "./ParceirosPagination.module.css";

function Items({ currentItems }) {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {currentItems &&
        currentItems.map((item) => (
          <GridItem w={"100%"} key={item.id}>
            <Parceiro capa={item.capa} titulo={item.titulo} />
          </GridItem>
        ))}
    </Grid>
  );
}

function PaginatedItems(props) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3004/parceiros").then((res) => {
      setItems(res.data);
      console.log(res.data);
      props.resultadosNumber(res.data.length);
    });
  }, []);

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
        pageRangeDisplayed={3}
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

export default PaginatedItems;
