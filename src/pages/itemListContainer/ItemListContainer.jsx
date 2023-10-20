
import Layout from "../../components/Layout/Layout"
import { ThreeBody } from '@uiball/loaders'


import Item from "../../components/Item/Item"
import React, { useContext, useEffect, useState} from "react"

import { useParams, Link } from 'react-router-dom'
import "./style.css"
import { CartCtx } from "../../context/CartContext"
import {collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../db/db"
import ItemList from "../../components/ItemList/ItemList"


const ItemListContainer = () => {
  const { category } = useParams();
  const { listBooks, setListBooks } = useContext(CartCtx);
  const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
    const bookCollection = collection(db, "Librería");
    getDocs(bookCollection).then((response) => {
      const booksFireBase = response.docs.map((books) => ({
        id: books.id,
        ...books.data()
      }));
      setListBooks(booksFireBase);
      setIsLoading(false);
    });

    const filterByCategory = query(bookCollection, where("Category", "==", "Comic"));
    getDocs(filterByCategory).then((response) => {
      const book = response.docs.map((books) => ({ id: books.id, ...books.data() }));
     console.log(book);
      
    })
  }, [category]);

  const MemoizedItem = React.memo(Item);

  const bookList = listBooks.map((book) => (
    <MemoizedItem
      id={book.id}
      nombre={book.Name}
      descripcion={book.Description}
      precio={book.Price}
      stock={book.Stock}
      imgUrl={book.Image}
    />
  ));

   const booksFilter= listBooks.filter(books=>books.Category === category)
            .map((biblio) => (
              <MemoizedItem
                id={biblio.id}
                nombre={biblio.Name}
                descripcion={biblio.Description}
                precio={biblio.Price}
                stock={biblio.Stock}
                imgUrl={biblio.Image}
              />
            ))

  const ItemListMemo = React.memo(ItemList);

  return (
    <Layout>
      <ItemListMemo>
        <div className="cardMenu">
          <Link className="linkMenu" to={'/Filosofía/${}'}>Filosofía</Link>
          <Link className="linkMenu" to={'/Comic/${}'}>Comic</Link>
          <Link className="linkMenu" to={'/Ciencia ficción/${}'}>Ciencia ficción</Link>
          <Link className="linkMenu" to={'/Suspenso/${}'}>Suspenso</Link>
          <Link className="linkMenu" to={'/Poesía/${}'}>Poesía</Link>
        </div>
        <div className="itemListContainer">
          {isLoading ? (
            <ThreeBody size={35} speed={2.5} color="black"/>) :!category? bookList: booksFilter}
        </div>
      </ItemListMemo>
    </Layout>
  );
};

export default ItemListContainer;
        
    
   

 


