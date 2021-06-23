import Web3 from "web3";

import wethAbi from "../abi/wethAbi.json";
import nonfungiblepositionmanagerAbi from "../abi/nonfungiblepositionmanagerAbi.json";



export const wethContract = () => {
  let contract;
  let web3 = new Web3(window?.web3?.currentProvider);
  try {
    contract = new web3.eth.Contract(
      wethAbi,
      '0xf70949bc9b52deffcda63b0d15608d601e3a7c49'
    );

    return contract;
  } catch (e) {
    console.log("wethTokenContract", e);
  }
};
export const nftContract = () => {
  let contract;
  let web3 = new Web3(window?.web3?.currentProvider);
  try {
    contract = new web3.eth.Contract(
      nonfungiblepositionmanagerAbi,
      '0xC36442b4a4522E871399CD717aBDD847Ab11FE88'
    );

    return contract;
  } catch (e) {
    console.log("nftContract", e);
  }
};


