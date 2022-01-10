import React, { useEffect, useState } from "react";

import "../Style/nft.css";

import { Button, FormGroup, Label, Input, Card } from "reactstrap";
import {
  balanceOf,
  ownerToken,
  getPosition,
} from "../Contract/Functions/nftFunction";

const Example = (props) => {
  const [address, setAddress] = useState();
  const [id, setId] = useState();
  const [balance, setBalance] = useState();
  const [nft, setNft] = useState([]);
  const [position, setPosition] = useState();

  const BalanceOf = async (e) => {
    e.preventDefault();

    const bal = await balanceOf(address);
    setBalance(bal);
    console.log("balance===", bal);

    let i;
    let nftArray = [];
    for (i = 0; i < bal; i++) {
      let ownToken = await ownerToken(address, i);
      console.log("ownToken===", ownToken);
      nftArray.push(ownToken);
    }

    setNft(nftArray);
    console.log("nft state ===", nftArray);
  };

  const findPosition = async (e) => {
    let position0 = await getPosition(id);
    console.log("position0===", position0);
    setPosition(position0);
  };

  return (
    <>
      <FormGroup className=" main">
        <Label className=" mb-1">Wallet Address</Label>
        <Input
          placeholder="Enter owner's wallet address amount"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <p>{balance && `Balance : ${balance}`}</p>

        {nft.length > 0 &&
          nft.map((ans) => {
            return (
              <h6>
                <span color="primary">{`Nft's : ${ans}`}</span>
              </h6>
            );
          })}
        <Button
          color="primary"
          className=" mt-3 w-50"
          onClick={(e) => {
            BalanceOf(e);
          }}
        >
          Run
        </Button>

        <br />

        <Label className=" mt-4 mb-1">Nft Id</Label>
        <Input
          placeholder="Enter nft id"
          type="number"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
      </FormGroup>
      {position && (
        <div className="flex">

        <Card style={{ borderColor: '#32cece' }} className=" m-4 p-4 w-50">
          <h6>{`Fee : ${position.fee}`}</h6>
          <h6>{`tickLower : ${position.tickLower}`}</h6>
          <h6>{`tickUpper : ${position.tickUpper}`}</h6>
          <h6>{`token0 : ${position.token0}`}</h6>
          <h6>{`token1 : ${position.token1}`}</h6>
        </Card>
        </div>
      )}
      <Button
        color="primary"
        className=" mt-3 w-25 mb-3"
        onClick={(e) => {
          findPosition(e);
        }}
      >
        Proceed
      </Button>
    </>
  );
};

export default Example;
