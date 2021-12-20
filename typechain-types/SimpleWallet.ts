/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type UserOperationStruct = {
  sender: string;
  nonce: BigNumberish;
  initCode: BytesLike;
  callData: BytesLike;
  callGas: BigNumberish;
  verificationGas: BigNumberish;
  preVerificationGas: BigNumberish;
  maxFeePerGas: BigNumberish;
  maxPriorityFeePerGas: BigNumberish;
  paymaster: string;
  paymasterData: BytesLike;
  signature: BytesLike;
};

export type UserOperationStructOutput = [
  string,
  BigNumber,
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string,
  string
] & {
  sender: string;
  nonce: BigNumber;
  initCode: string;
  callData: string;
  callGas: BigNumber;
  verificationGas: BigNumber;
  preVerificationGas: BigNumber;
  maxFeePerGas: BigNumber;
  maxPriorityFeePerGas: BigNumber;
  paymaster: string;
  paymasterData: string;
  signature: string;
};

export interface SimpleWalletInterface extends utils.Interface {
  functions: {
    "addDeposit()": FunctionFragment;
    "entryPoint()": FunctionFragment;
    "exec(address,uint256,bytes)": FunctionFragment;
    "execFromEntryPoint(address,uint256,bytes)": FunctionFragment;
    "nonce()": FunctionFragment;
    "owner()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "updateEntryPoint(address)": FunctionFragment;
    "verifyUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,address,bytes,bytes),uint256)": FunctionFragment;
    "withdrawDeposit(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "entryPoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "exec",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "execFromEntryPoint",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateEntryPoint",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyUserOp",
    values: [UserOperationStruct, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawDeposit",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "addDeposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exec", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "execFromEntryPoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateEntryPoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyUserOp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawDeposit",
    data: BytesLike
  ): Result;

  events: {
    "EntryPointChanged(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EntryPointChanged"): EventFragment;
}

export type EntryPointChangedEvent = TypedEvent<
  [string, string],
  { oldEntryPoint: string; newEntryPoint: string }
>;

export type EntryPointChangedEventFilter =
  TypedEventFilter<EntryPointChangedEvent>;

export interface SimpleWallet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SimpleWalletInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addDeposit(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    entryPoint(overrides?: CallOverrides): Promise<[string]>;

    exec(
      dest: string,
      value: BigNumberish,
      func: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    execFromEntryPoint(
      dest: string,
      value: BigNumberish,
      func: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nonce(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    transfer(
      dest: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateEntryPoint(
      _entryPoint: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    verifyUserOp(
      userOp: UserOperationStruct,
      requiredPrefund: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawDeposit(
      withdrawAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addDeposit(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  entryPoint(overrides?: CallOverrides): Promise<string>;

  exec(
    dest: string,
    value: BigNumberish,
    func: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  execFromEntryPoint(
    dest: string,
    value: BigNumberish,
    func: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nonce(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  transfer(
    dest: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateEntryPoint(
    _entryPoint: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  verifyUserOp(
    userOp: UserOperationStruct,
    requiredPrefund: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawDeposit(
    withdrawAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addDeposit(overrides?: CallOverrides): Promise<void>;

    entryPoint(overrides?: CallOverrides): Promise<string>;

    exec(
      dest: string,
      value: BigNumberish,
      func: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    execFromEntryPoint(
      dest: string,
      value: BigNumberish,
      func: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    transfer(
      dest: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateEntryPoint(
      _entryPoint: string,
      overrides?: CallOverrides
    ): Promise<void>;

    verifyUserOp(
      userOp: UserOperationStruct,
      requiredPrefund: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawDeposit(
      withdrawAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "EntryPointChanged(address,address)"(
      oldEntryPoint?: null,
      newEntryPoint?: null
    ): EntryPointChangedEventFilter;
    EntryPointChanged(
      oldEntryPoint?: null,
      newEntryPoint?: null
    ): EntryPointChangedEventFilter;
  };

  estimateGas: {
    addDeposit(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    entryPoint(overrides?: CallOverrides): Promise<BigNumber>;

    exec(
      dest: string,
      value: BigNumberish,
      func: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    execFromEntryPoint(
      dest: string,
      value: BigNumberish,
      func: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nonce(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      dest: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateEntryPoint(
      _entryPoint: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    verifyUserOp(
      userOp: UserOperationStruct,
      requiredPrefund: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawDeposit(
      withdrawAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addDeposit(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exec(
      dest: string,
      value: BigNumberish,
      func: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    execFromEntryPoint(
      dest: string,
      value: BigNumberish,
      func: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      dest: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateEntryPoint(
      _entryPoint: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    verifyUserOp(
      userOp: UserOperationStruct,
      requiredPrefund: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawDeposit(
      withdrawAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}