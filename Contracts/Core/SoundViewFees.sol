pragma solidity ^0.8.16;

/*
SoundView Marketplace
SoundViewFees
*/

import '@oasisprotocol/sapphire-hardhat';
import "https://github.com/oasisprotocol/contracts-sol-compiler/contracts/SafeMath.sol";

contract SoundViewFees {
    using SafeMath for uint256;

    // Event for token creation
    event TokenCreated(address indexed _from, uint256 _tokenId);

    // Event for token transfer
    event TokenTransferred(address indexed _from, address indexed _to, uint256 _tokenId);

    // Event for fee collection
    event FeeCollected(address indexed _from, address indexed _to, uint256 _tokenId, uint256 _fee);

    // Mapping of token owners
    mapping(uint256 => address) public tokenOwners;

    // Array of token IDs
    uint256[] public tokenIds;

    // Counter for token IDs
    uint256 public tokenIdCounter;

    // Address of the fee recipient
    address public feeRecipient;

    // Constant for the fee percentage (5%)
    uint256 constant public FEE_PERCENTAGE = 500;

    // Function to create a new token
    function createToken() public {
        // Increment the token ID counter
        tokenIdCounter = tokenIdCounter.add(1);

        // Add the new token ID to the array
        tokenIds.push(tokenIdCounter);

        // Set the msg.sender as the owner of the new token
        tokenOwners[tokenIdCounter] = msg.sender;

        // Emit the TokenCreated event
        emit TokenCreated(msg.sender, tokenIdCounter);
    }

    // Function to transfer the token
    function transferToken(uint256 _tokenId, address _to) public {
        // Check that the msg.sender is the owner of the token
        require(tokenOwners[_tokenId] == msg.sender);

        // Calculate the fee
        uint256 fee = _tokenId.mul(FEE_PERCENTAGE).div(10000);

        // Transfer the token
        tokenOwners[_tokenId] = _to;

        // Transfer the fee to the fee recipient
        feeRecipient.transfer(fee);

        // Emit the TokenTransferred and FeeCollected events
        emit TokenTransferred(msg.sender, _to, _tokenId);
        emit FeeCollected(msg.sender, _to, _tokenId, fee);
    }

    // Function to set the fee recipient
    function setFeeRecipient(address _feeRecipient) public {
        // Check that the msg.sender is the contract owner
        require(msg.sender == owner);

        // Set the new fee recipient
        feeRecipient = _feeRecipient;
    }

    address public owner;

    constructor() public {
        owner = msg.sender;
    }
}
