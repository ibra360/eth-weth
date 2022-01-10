import React, { useEffect, useState } from "react";

import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import ConnectWallet from "./ConnectWallet";
import { deposit, withdraw } from "../Contract/Functions/wethFunction";

import "../Style/form.css";

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Example = (props) => {
  const { activate, account, library } = useWeb3React();

  const [view, setView] = useState(true); //view =true = (eth to weth)
  const [eth, setEth] = useState(0);
  const [weth, setWeth] = useState(0);
  const [avbEth, setAvbEth] = useState(0);

  const web3 = new Web3(window.ethereum);

  const ConvertEth = async (e) => {
    e.preventDefault();
    deposit(account, web3.utils.toWei(eth));
  };
  const ConvertWeth = async (e) => {
    e.preventDefault();
    console.log("weth=======", weth);
    withdraw(account, web3.utils.toWei(`${weth}`));
  };

  useEffect(() => {
    console.log("account ", account);
    if (account) {
      web3.eth.getBalance(account, function (err, result) {
        if (err) {
          console.log("Error in getting eth from web3", err);
        } else {
          console.log("result in getting eth from web3", result);
          console.log(web3.utils.fromWei(result, "ether") + " ETH");
          setAvbEth(web3.utils.fromWei(result, "ether"));
        }
      });
    }
  }, [account]);

  return (
    <>
      <Button
        onClick={() => setView(!view)}
        color="info"
        className=" mt-5 w-25"
      >
        {view ? "Switch from Eth to weth" : "Switch from Weth to Eth"}
      </Button>
      <Form className="main">
        {view ? (
          <FormGroup>
            <Label className=" mb-1">Eth</Label>
            <Input
              max={avbEth}
              min={0}
              type="number"
              placeholder="Enter eth amount"
              onChange={(e) => {
                setEth(e.target.value);
              }}
            />
            {avbEth < eth && (
              <p className="itlaic text-danger">Insufficient funds</p>
            )}
          </FormGroup>
        ) : (
          <FormGroup>
            <Label className="mb-1">Weth</Label>
            <Input
              type="number"
              placeholder="Enter weth amount"
              onChange={(e) => {
                setWeth(e.target.value);
              }}
            />
          </FormGroup>
        )}
        <Button
          onClick={(e) => {
            // ConvertEth(e);
            view ? ConvertEth(e) : ConvertWeth(e);
          }}
          disabled={!account || avbEth < eth || eth == 0}
          color="primary"
          className=" mt-3 w-50"
        >
          Proceed
        </Button>
        <br />
        {/* <ConnectWallet /> */}
      </Form>
    </>
  );
};

export default Example;
