import React from 'react';
import { Wallet, CreditCard, Download, ExternalLink } from 'lucide-react';

const SuiGuide = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8 font-sans">
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">How to Buy SUI and Install a Wallet by Donapeqo</h1>
        <p className="text-lg sm:text-xl text-gray-600">A Beginner's Guide</p>
      </header>

      <main className="max-w-3xl">
        <section className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
            <Wallet className="mr-2 text-blue-500" />
            Step 1: Choose and Install a SUI Wallet
          </h2>
          <ol className="list-decimal list-outside ml-5 space-y-2 text-gray-700">
            <li>Research SUI-compatible wallets (e.g., Sui Wallet, OKX Wallet)</li>
            <li>Visit the official website of your chosen wallet</li>
            <li>Download the wallet extension for your browser</li>
            <li>Follow the installation instructions provided by the wallet</li>
            <li>Create a new wallet and securely store your recovery phrase</li>
          </ol>
          <div className="mt-4 flex items-center text-blue-500">
            <Download className="mr-2" />
            <a href="https://chrome.google.com/webstore/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Download Sui Wallet for Chrome
            </a>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 flex items-center">
            <CreditCard className="mr-2 text-blue-500" />
            Step 2: Buy SUI
          </h2>
          <ol className="list-decimal list-outside ml-5 space-y-2 text-gray-700">
            <li>Choose a cryptocurrency exchange that supports SUI (e.g., Binance, KuCoin)</li>
            <li>Create an account on the chosen exchange and complete any required KYC procedures</li>
            <li>Fund your exchange account with fiat currency or another cryptocurrency</li>
            <li>Navigate to the SUI trading pair (e.g., SUI/USDT)</li>
            <li>Place a buy order for the desired amount of SUI</li>
            <li>Once the order is filled, withdraw the SUI to your wallet address</li>
          </ol>
          <div className="mt-4 flex items-center text-blue-500">
            <ExternalLink className="mr-2" />
            <a href="https://www.binance.com/en/trade/SUI_USDT" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Buy SUI on Binance
            </a>
          </div>
        </section>

        <section className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <h3 className="font-semibold text-lg mb-2 text-blue-700">Important Tips:</h3>
          <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700">
            <li>Always double-check wallet addresses before sending any cryptocurrency</li>
            <li>Keep your recovery phrase and private keys secure and offline</li>
            <li>Be cautious of phishing attempts and only use official websites</li>
            <li>Start with small amounts until you're comfortable with the process</li>
          </ul>
        </section>
      </main>

      <footer className="text-gray-500 mt-8">
        <p>&copy; 2024 SUI Beginner's Guide by Donapeqo. This is not financial advice. Always do your own research.</p>
      </footer>
    </div>
  );
};

export default SuiGuide;