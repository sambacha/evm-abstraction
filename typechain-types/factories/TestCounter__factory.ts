/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestCounter, TestCounterInterface } from "../TestCounter";

const _abi = [
  {
    inputs: [],
    name: "count",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "counters",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "repeat",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "gasWaster",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610238806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806306661abd14610046578063a1b4689014610050578063be65ab8c14610063575b600080fd5b61004e610095565b005b61004e61005e36600461013d565b6100c2565b61008361007136600461010d565b60006020819052908152604090205481565b60405190815260200160405180910390f35b336000908152602081905260409020546100b09060016101b9565b33600090815260208190526040902055565b60015b83811161010757600280549060006100dc836101d1565b90915550506002546000908152600160205260409020819055806100ff816101d1565b9150506100c5565b50505050565b60006020828403121561011f57600080fd5b81356001600160a01b038116811461013657600080fd5b9392505050565b60008060006040848603121561015257600080fd5b83359250602084013567ffffffffffffffff8082111561017157600080fd5b818601915086601f83011261018557600080fd5b81358181111561019457600080fd5b8760208285010111156101a657600080fd5b6020830194508093505050509250925092565b600082198211156101cc576101cc6101ec565b500190565b60006000198214156101e5576101e56101ec565b5060010190565b634e487b7160e01b600052601160045260246000fdfea26469706673582212202e43d1ff39a84454c7282da7f446f35f8e87171148c800e51f1769a1e434671e64736f6c63430008070033";

type TestCounterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestCounterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestCounter__factory extends ContractFactory {
  constructor(...args: TestCounterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestCounter> {
    return super.deploy(overrides || {}) as Promise<TestCounter>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestCounter {
    return super.attach(address) as TestCounter;
  }
  connect(signer: Signer): TestCounter__factory {
    return super.connect(signer) as TestCounter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestCounterInterface {
    return new utils.Interface(_abi) as TestCounterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestCounter {
    return new Contract(address, _abi, signerOrProvider) as TestCounter;
  }
}