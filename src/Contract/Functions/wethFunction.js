import { wethContract } from "../useContract";

export const deposit = async (walletAddress, ethWei) => {
  try {
    await wethContract().methods
      .deposit()
      .send({ from: walletAddress, value: ethWei })
      .on("transactionHash", (txnHash) => {
        console.log("Loading......");
      })
      .then((receipt) => {
        console.log("Success  receipt......", receipt);
      })
      .catch((e) => {
        if (e.code === 4001) {
          console.log("e.code === 4001");
        } else {
          console.log("error",e);
        }
      });
  } catch (e) {
    console.log("e=======================", e);
  }
};
export const withdraw = async (walletAddress, wethWei) => {
  try {
    await wethContract().methods
      .withdraw(wethWei)
      .send({ from: walletAddress })
      .on("transactionHash", (txnHash) => {
        console.log("Loading......");
      })
      .then((receipt) => {
        console.log("Success  receipt......", receipt);
      })
      .catch((e) => {
        if (e.code === 4001) {
          console.log("e.code === 4001");
        } else {
          console.log("error",e);
        }
      });
  } catch (e) {
    console.log("e=======================", e);
  }
};
