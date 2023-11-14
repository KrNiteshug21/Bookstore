"use client";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  console.log("cartitems", cartItems);

  const price = (num) => {
    while (num >= 999) {
      num /= 10;
    }
    return +num.toFixed(2);
  };

  useEffect(() => {
    const newCartItems = JSON.parse(localStorage.getItem("books")) || [];
    setTotalCartPrice(() => {
      if (newCartItems && cartItems.length !== 0) {
        const prices = newCartItems?.map((book) => price(book.download_count));
        const totalPrice = prices?.reduce((sum, curr) => sum + curr);
        return totalPrice;
      } else {
        return 0;
      }
    });
    setCartItems(() => newCartItems);
  }, []);

  const handleAddCart = (book) => {
    if (cartItems) {
      const check = cartItems.filter((cartItem) => cartItem.id === book.id);
      if (check.length === 0) {
        var newCartItems = cartItems.slice(0, cartItems.length);
        newCartItems.push(book);
        localStorage.setItem("books", JSON.stringify(newCartItems));
        if (!cartItems) setTotalCartPrice(() => 0);
        else setTotalCartPrice((prev) => prev + price(book.download_count));
        setCartItems(newCartItems);
        // console.log(cartItems);
      }
    } else {
      localStorage.setItem("books", JSON.stringify(book));
      if (!cartItems) setTotalCartPrice(() => 0);
      else setTotalCartPrice((prev) => prev + price(book.download_count));
      setCartItems([book]);
      // console.log(cartItems);
    }
  };

  const handleDeleteCart = (book) => {
    if (cartItems.length !== 0) {
      const newCartItems = cartItems?.filter(
        (cartItem) => cartItem.id !== book.id
      );
      setCartItems(newCartItems);
      if (newCartItems.length === 0) setTotalCartPrice(0);
      else setTotalCartPrice((prev) => prev - price(book.download_count));
      localStorage.setItem("books", JSON.stringify(newCartItems));
      // console.log(cartItems);
    }
  };

  return (
    <DataContext.Provider
      value={{
        cartItems,
        setCartItems,
        handleAddCart,
        handleDeleteCart,
        price,
        totalCartPrice,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
