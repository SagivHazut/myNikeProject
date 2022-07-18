import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

export default function Transactions() {
  const [cardsArr, setCardsArr] = useState([]);
  const [itemArr, setItemArr] = useState([]);
  const URL = "http://localhost:8181/api/transactions/";

  useEffect(() => {
    axios
      .get("/transactions/allCards")
      .then(({ data }) => {
        setCardsArr(data);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    axios
      .get("/transactions/allCards")
      .then(({ data }) => {
        setItemArr(data);
      })
      .catch((err) => {});
  }, []);

  const handleDeleteCard = (id) => {
    axios.delete(`${URL}${id}`).then((res) => {
      const newCardsArr = cardsArr.filter((item) => item._id !== id);
      setCardsArr(newCardsArr);
    });
  };
  console.log(itemArr);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Transactions</h1>
      <table className="table">
        <thead className="table table-bordered table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Payment</th>
            <th scope="col">Buying at:</th>
            <th scope="col">Products</th>
            <th scope="col">Editing</th>
          </tr>
        </thead>
        <tbody>
          {cardsArr.map((item, index) => (
            <tr key={index}>
              <th scope="row" className="table-dark">
                {index}
              </th>
              <td>{item.firstName + " " + item.lastName} </td>
              <td>{item.email} </td>
              <td>
                {item.country} , {item.state} <br />
                {item.address}
                {item.zip}
              </td>
              <td>
                Card Name: {item.cardName} <br />
                Card Number: {item.cardNumber} <br /> Card Expiration :{" "}
                {item.expiration} <br /> Cvv : {item.cvv}
              </td>
              <td>{item.createdAt}</td>
              <td>
                {itemArr.map((item, index) => (
                  <p key={index}>{item.phone}</p>
                ))}
              </td>
              <td>
                <div>
                  <Button
                    style={{ marginTop: 2 }}
                    type="button"
                    className="btn btn-outline-danger"
                    onClick={() => handleDeleteCard(item._id)}
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
