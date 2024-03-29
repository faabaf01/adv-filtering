import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import "./index.css";
import { ShopContextProvider } from "./context/shop-context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Database
import products from "./db/data";
import Card from "./components/Card";
import Cart from "./pages/cart/cart";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //------------Input Filter--------------
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  //------------Radio Filter--------------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //------------Buttons Filter--------------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    //Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ id, img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={id}
          id={id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <ShopContextProvider>
        <Router>
          <Navigation query={query} handleInputChange={handleInputChange} />

          {/* <Products result={result} /> */}

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Sidebar handleChange={handleChange} />
                  <Recommended handleClick={handleClick} />
                  <Products result={result} />
                </>
              }
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  );
}

export default App;
