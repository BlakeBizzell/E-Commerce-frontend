import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useGetCartItemsQuery, useGetUserQuery } from "../api/soapApi";
import { useSelector } from "react-redux";

const Review = () => {
  const storedUserId = localStorage.getItem("userId");
  const userId = useSelector((state) => state.user.id) || storedUserId;

  const { data: cartData } = useGetCartItemsQuery(userId);
  const { data: userData } = useGetUserQuery(userId);

  const [cartItems, setCartItems] = useState([]);
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");

  useEffect(() => {
    if (cartData && cartData.cartItems) {
      setCartItems(cartData.cartItems);
    }
  }, [cartData]);

  useEffect(() => {
    if (userData) {
      setAddress(userData.address);
      setPayment(userData.payment);
    }
  }, [userData]);

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.product.price, 0);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems.map((item) => (
          <ListItem key={item.id} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={item.product.name}
              secondary={item.product.description}
            />
            <Typography variant="body2">${item.product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${totalPrice.toFixed(2)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{address}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Typography gutterBottom>{payment}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Review;
