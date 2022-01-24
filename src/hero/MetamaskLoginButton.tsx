import React, { ReactNode, useEffect, useState} from 'react';
import { ButtonConnectMetamask } from '../button/Button';
import { ethers } from "ethers";

interface Window {
  ethereum: any;
}

type MetamaskLoginButtonProps = {
  title: ReactNode;
  description: string;
};

const MetamaskLoginButton = (props: MetamaskLoginButtonProps) => {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account)
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  return (
    <header className="text-center">
      <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
        {props.title}
      </h1>
      <div className="text-2xl mt-4 mb-16">{props.description}</div>
      { }
      {!currentAccount && (
        <ButtonConnectMetamask xl connectWallet={connectWallet} checkWalletConnected={checkIfWalletIsConnected}>
          Connect wallet
        </ButtonConnectMetamask>
      )}
    </header>
  );
};

export { MetamaskLoginButton };
