import React, { useEffect, useState } from "react";
import { injected } from "../Contract/web3";
import { useWeb3React } from "@web3-react/core";

import "../Style/form.css";

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Example = (props) => {
  const { activate, account, library } = useWeb3React();
  useEffect(() => {
    connectAccount();
  }, []);
  const connectAccount = async (e) => {
    // e.preventDefault();
    await activate(injected);
  };
  return (
    <Button
      disabled={account}
      color="secondary"
      className=" mt-3 w-25"
      onClick={(e) => connectAccount(e)}
    >
      {account ? "Wallet Connected" : "Connect Wallet"}
    </Button>
  );
};
export default Example;
