import React from "react";
import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { ProductItem } from "../ProductItem";

import styles from "./ProductList.module.css";

export const ProductList = () => {
  const products = useSelector((state) => state.products);

  return (
    <div>
      {products.length ? (
        <div className={styles.productsContainer}>
          <h2 className={styles.heading}>Products: </h2>
          <TransitionGroup>
            {products.map((product, index) => (
              <CSSTransition
                key={product.id}
                timeout={500}
                classNames="product"
              >
                <ProductItem product={product} index={index} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      ) : (
        <h1 className={styles.heading}>
          There are no products at the moment, try adding one 🙂
        </h1>
      )}
    </div>
  );
};
