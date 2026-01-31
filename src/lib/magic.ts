import { Magic } from "magic-sdk";
import { ethers } from "ethers";
const MAGIC_KEY = import.meta.env.VITE_MAGIC_KEY;
const INFURA_KEY = import.meta.env.VITE_INFURA_KEY;

export const magic = new Magic(MAGIC_KEY, {
  network: {
    rpcUrl: `https://sepolia.infura.io/v3/${INFURA_KEY}`,
    chainId: 11155111,
  },
});

export const getSigner = async () => {
  const provider = new ethers.BrowserProvider(magic.rpcProvider);
  return provider;
};
