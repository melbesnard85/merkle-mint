pragma solidity ^0.5.0;

import "@openzeppelin/contracts-ethereum-package/contracts/cryptography/MerkleProof.sol";

contract Verify {
  function isValidData(string memory _asset, bytes32 _root, bytes32 _leaf, bytes32[] memory _proof)
    public
    pure
    returns (bool)
  {
    if (keccak256(abi.encodePacked(_asset)) == _leaf) {
      return MerkleProof.verify(_proof, _root, _leaf);
    } else {
      return false;
    }
  }
}
