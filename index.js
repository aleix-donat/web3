function generateWallet() {
    const Aleixwallet = ethers.Wallet.createRandom();
    document.getElementById("address").innerText = Aleixwallet.address;
    document.getElementById("privateKey").innerText = Aleixwallet.privateKey;
    document.getElementById("mnemonic").innerText = Aleixwallet.mnemonic.phrase;
    /*const provider = ethers.getDefaultProvider("sepolia");
    const connectedAleixwallet = Aleixwallet.connect(provider);
    provider.getBalance(Aleixwallet.address).then((balance) => {
        console.log("Balance:", ethers.utils.formatEther(balance), "ETH");
    });*/
}