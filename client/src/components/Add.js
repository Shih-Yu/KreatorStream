import { useState } from "react";
import { ethers } from "ethers";
import { Form, Button, Container } from "react-bootstrap";

// Contract ABI
import EthStreamShop from "../build/EthStreamShop.json";

// Contract code on Rinkeby Testnet
const contractAddress = "0xdD6875e93B9c494470C5eb20B43476Eff9A99aD8";

export default function Add() {
  const [formInput, setFormInput] = useState({
    seller: "",
    merchName: "",
    price: "",
    amount: "",
    timeLimit: "",
  });

  // Function to add merchandise
  async function addMerch() {}

  return (
    <div>
      <Container fluid="sm" className="mt-5">
        <h1 className="text-center">Add Merchandise to sell</h1>
        <p className="text-center text-danger mb-5">*only owner of contract may add merchandise</p>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Seller's Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Seller's Address"
              onChange={(e) => setFormInput({ ...formInput, seller: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Name of Merchandise</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name of Merchandise"
              onChange={(e) => setFormInput({ ...formInput, merchName: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Price in Eth"
              onChange={(e) => setFormInput({ ...formInput, price: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="text"
              placeholder="Amount Available"
              onChange={(e) => setFormInput({ ...formInput, amount: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Time Limit</Form.Label>
            <Form.Control
              type="text"
              placeholder="In Minutes"
              onChange={(e) => setFormInput({ ...formInput, timeLeft: e.target.value })}
            />
          </Form.Group>
          <Button variant="warning" type="submit" onClick={addMerch}>
            Add Merch
          </Button>
        </Form>
      </Container>
    </div>
  );
}
