import React, { useEffect, useState } from "react";
import ItemList from './ItemList'
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../js-components/firestoreFetch";

const ItemListContainer = () => {
  const [dato, setDato] = useState ([]);
  const { idCategory } = useParams ();

  useEffect (() => {
    firestoreFetch(idCategory)
      .then(result => setDato(result))
      .catch(err => console.log(err));
  }, [idCategory]);
console.log(dato);
  useEffect (() => {
    return (() => {
      setDato([]);
    })
  }, []);
  
  return (
    <>
      <ItemList productos={dato} />
    </>
  );
}
  
export default ItemListContainer;