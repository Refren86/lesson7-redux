import React from "react";
import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { ProductItem } from "../ProductItem/ProductItem";

export const ProductList = () => {
  const products = useSelector((state) => state.products);

  return (
    <div>
      {products.length ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: "25px",
            marginTop: "25px",
          }}
        >
          <h2 style={{ alignSelf: "center" }}>Products: </h2>
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
        <h1 style={{ textAlign: "center" }}>
          There are no products at the moment, try adding one 🙂
        </h1>
      )}
    </div>
  );
};
