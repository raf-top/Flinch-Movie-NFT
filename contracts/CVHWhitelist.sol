// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CVHCinema is Ownable {
  using Strings for uint256;

  uint256 public cost = 0.01 ether;

  address[] public whitelistedAddresses;
  address[] public customers;
  
  function addCustomer() public payable {
    require(msg.value >= cost, "You do not have enough funds");
    customers.push(msg.sender);
  }

  function getwhitelistedAddresses() public view returns(address[] memory) {
    return whitelistedAddresses;
  }

  function getCustomers() public view returns(address[] memory){
    return customers;
  }

  function customersLengh() public view returns(uint256) {
    return customers.length;
  }

  function whitelistedAddressesLength() public view returns(uint256) {
    return whitelistedAddresses.length;
  }

  // Only owner
  function whitelistUsers(address[] calldata _users) public onlyOwner {
    delete whitelistedAddresses;
    whitelistedAddresses = _users;
  }

  function setCost(uint256 _newCost) public onlyOwner {
    cost = _newCost;
  }

  function removeCustomers() public onlyOwner {
    delete customers;
  }
 
  function withdraw() public payable onlyOwner {
    (bool os, ) = payable(owner()).call{value: address(this).balance}("");
    require(os);
  }
}