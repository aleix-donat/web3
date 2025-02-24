This is an ERC-20 smart contract that has been deployed on the Ethereum mainnet. 
That is, it's a custom token created with Solidity and deployed through Hardhat and Infura.

What is the contract doing?

The contract defines a token called "MyToken" (MTK) with the following properties:
ERC-20 standard: Compatible with wallets and exchanges that support ERC-20 tokens.
Token ownership: The owner of the contract is the only one who can mint (create) new tokens.
Token burning: Any user can burn their own tokens to reduce the total supply.
Pause and resume transactions: The contract owner can pause all transfers if necessary.
