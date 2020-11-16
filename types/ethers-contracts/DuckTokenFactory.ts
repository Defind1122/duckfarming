/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { DuckToken } from "./DuckToken";

export class DuckTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    presaleWallet: string,
    teamWallet: string,
    overrides?: Overrides
  ): Promise<DuckToken> {
    return super.deploy(presaleWallet, teamWallet, overrides || {}) as Promise<
      DuckToken
    >;
  }
  getDeployTransaction(
    presaleWallet: string,
    teamWallet: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      presaleWallet,
      teamWallet,
      overrides || {}
    );
  }
  attach(address: string): DuckToken {
    return super.attach(address) as DuckToken;
  }
  connect(signer: Signer): DuckTokenFactory {
    return super.connect(signer) as DuckTokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DuckToken {
    return new Contract(address, _abi, signerOrProvider) as DuckToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "presaleWallet",
        type: "address"
      },
      {
        internalType: "address",
        name: "teamWallet",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [],
    name: "MAX_FARMING_POOL",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "PRESALE_SUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "TEAM_SUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "currentFarmingPool",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "liquidityPool",
        type: "address"
      }
    ],
    name: "addLiquidityPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200155938038062001559833981810160405260408110156200003757600080fd5b5080516020918201516040805180820182526009815268223ab1b5aa37b5b2b760b91b8186019081528251808401909352600380845262444c4360e81b9684019690965281519495939491936200009192909190620002ee565b508051620000a7906004906020840190620002ee565b50506005805460ff19166012179055506000620000cc6001600160e01b036200016a16565b60058054610100600160a81b0319166101006001600160a01b03841690810291909117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35062000142826a108b2a2c280290940000006001600160e01b036200016f16565b62000162816a084595161401484a0000006001600160e01b036200016f16565b505062000390565b335b90565b6001600160a01b038216620001cb576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b620001e2600083836001600160e01b036200028716565b620001fe816002546200028c60201b62000d401790919060201c565b6002556001600160a01b038216600090815260208181526040909120546200023191839062000d406200028c821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b505050565b600082820183811015620002e7576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200033157805160ff191683800117855562000361565b8280016001018555821562000361579182015b828111156200036157825182559160200191906001019062000344565b506200036f92915062000373565b5090565b6200016c91905b808211156200036f57600081556001016200037a565b6111b980620003a06000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80638da5cb5b116100ad578063b9c3a81811610071578063b9c3a81814610378578063dd62ed3e14610380578063e9841cb4146103ae578063ee6a934c146103b6578063f2fde38b146103dc5761012c565b80638da5cb5b146102ec5780639418b2581461031057806395d89b4114610318578063a457c2d714610320578063a9059cbb1461034c5761012c565b806339509351116100f4578063395093511461025c57806340c10f191461028857806370a08231146102b6578063715018a6146102dc57806373138e4f146102e45761012c565b806306fdde0314610131578063095ea7b3146101ae57806318160ddd146101ee57806323b872dd14610208578063313ce5671461023e575b600080fd5b610139610402565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561017357818101518382015260200161015b565b50505050905090810190601f1680156101a05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101da600480360360408110156101c457600080fd5b506001600160a01b038135169060200135610498565b604080519115158252519081900360200190f35b6101f66104b6565b60408051918252519081900360200190f35b6101da6004803603606081101561021e57600080fd5b506001600160a01b038135811691602081013590911690604001356104bc565b610246610549565b6040805160ff9092168252519081900360200190f35b6101da6004803603604081101561027257600080fd5b506001600160a01b038135169060200135610552565b6102b46004803603604081101561029e57600080fd5b506001600160a01b0381351690602001356105a6565b005b6101f6600480360360208110156102cc57600080fd5b50356001600160a01b0316610684565b6102b461069f565b6101f661074c565b6102f461075b565b604080516001600160a01b039092168252519081900360200190f35b6101f661076f565b61013961077e565b6101da6004803603604081101561033657600080fd5b506001600160a01b0381351690602001356107df565b6101da6004803603604081101561036257600080fd5b506001600160a01b03813516906020013561084d565b6101f6610888565b6101f66004803603604081101561039657600080fd5b506001600160a01b0381358116916020013516610897565b6101f66108c2565b6102b4600480360360208110156103cc57600080fd5b50356001600160a01b03166108c8565b6102b4600480360360208110156103f257600080fd5b50356001600160a01b0316610949565b60038054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561048e5780601f106104635761010080835404028352916020019161048e565b820191906000526020600020905b81548152906001019060200180831161047157829003601f168201915b5050505050905090565b60006104ac6104a5610a52565b8484610a56565b5060015b92915050565b60025490565b60006104c9848484610b42565b61053f846104d5610a52565b61053a856040518060600160405280602881526020016110ad602891396001600160a01b038a16600090815260016020526040812090610513610a52565b6001600160a01b03168152602081019190915260400160002054919063ffffffff610ca916565b610a56565b5060019392505050565b60055460ff1690565b60006104ac61055f610a52565b8461053a8560016000610570610a52565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff610d4016565b6105ae610a52565b60055461010090046001600160a01b03908116911614610603576040805162461bcd60e51b815260206004820181905260248201526000805160206110d5833981519152604482015290519081900360640190fd5b6007546a39e7139a8c08fa0600000090610623908363ffffffff610d4016565b111561066e576040805162461bcd60e51b8152602060048201526015602482015274195e18d959590819985c9b5a5b99c8185b5bdd5b9d605a1b604482015290519081900360640190fd5b60078054820190556106808282610d9a565b5050565b6001600160a01b031660009081526020819052604090205490565b6106a7610a52565b60055461010090046001600160a01b039081169116146106fc576040805162461bcd60e51b815260206004820181905260248201526000805160206110d5833981519152604482015290519081900360640190fd5b60055460405160009161010090046001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a360058054610100600160a81b0319169055565b6a108b2a2c2802909400000081565b60055461010090046001600160a01b031690565b6a39e7139a8c08fa0600000081565b60048054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561048e5780601f106104635761010080835404028352916020019161048e565b60006104ac6107ec610a52565b8461053a8560405180606001604052806025815260200161115f6025913960016000610816610a52565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff610ca916565b3360009081526006602052604081205460ff16156108775761086f3383610e96565b5060016104b0565b6108818383610f9e565b9392505050565b6a084595161401484a00000081565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60075481565b6108d0610a52565b60055461010090046001600160a01b03908116911614610925576040805162461bcd60e51b815260206004820181905260248201526000805160206110d5833981519152604482015290519081900360640190fd5b6001600160a01b03166000908152600660205260409020805460ff19166001179055565b610951610a52565b60055461010090046001600160a01b039081169116146109a6576040805162461bcd60e51b815260206004820181905260248201526000805160206110d5833981519152604482015290519081900360640190fd5b6001600160a01b0381166109eb5760405162461bcd60e51b815260040180806020018281038252602681526020018061103f6026913960400191505060405180910390fd5b6005546040516001600160a01b0380841692610100900416907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600580546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b3390565b6001600160a01b038316610a9b5760405162461bcd60e51b815260040180806020018281038252602481526020018061113b6024913960400191505060405180910390fd5b6001600160a01b038216610ae05760405162461bcd60e51b81526004018080602001828103825260228152602001806110656022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316610b875760405162461bcd60e51b81526004018080602001828103825260258152602001806111166025913960400191505060405180910390fd5b6001600160a01b038216610bcc5760405162461bcd60e51b8152600401808060200182810382526023815260200180610ffa6023913960400191505060405180910390fd5b610bd7838383610fb2565b610c1a81604051806060016040528060268152602001611087602691396001600160a01b038616600090815260208190526040902054919063ffffffff610ca916565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610c4f908263ffffffff610d4016565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610d385760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610cfd578181015183820152602001610ce5565b50505050905090810190601f168015610d2a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610881576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6001600160a01b038216610df5576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b610e0160008383610fb2565b600254610e14908263ffffffff610d4016565b6002556001600160a01b038216600090815260208190526040902054610e40908263ffffffff610d4016565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b038216610edb5760405162461bcd60e51b81526004018080602001828103825260218152602001806110f56021913960400191505060405180910390fd5b610ee782600083610fb2565b610f2a8160405180606001604052806022815260200161101d602291396001600160a01b038516600090815260208190526040902054919063ffffffff610ca916565b6001600160a01b038316600090815260208190526040902055600254610f56908263ffffffff610fb716565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60006104ac610fab610a52565b8484610b42565b505050565b600061088183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610ca956fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e63654f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657245524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212204c6f6a4006f2a7e873ffaccbec7ad3cfc5d89cc9835dc22c128106000fadaef764736f6c63430006040033";
