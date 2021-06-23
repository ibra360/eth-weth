import { nftContract } from "../useContract";

export const balanceOf = async (walletAddress) => {
  try {
    return await nftContract().methods.balanceOf(walletAddress).call();
  } catch (e) {
    console.log("errrr=======================", e);
  }
};
export const ownerToken = async (walletAddress,balance) => {
  try {
    return await nftContract().methods.tokenOfOwnerByIndex(walletAddress,balance).call();
  } catch (e) {
    console.log("errrr=======================", e);
  }
};
export const getPosition = async (ownToken) => {
  try {
    return await nftContract().methods.positions(ownToken).call();
  } catch (e) {
    console.log("errrr=======================", e);
  }
};
