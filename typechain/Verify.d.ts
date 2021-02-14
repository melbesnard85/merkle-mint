/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface VerifyInterface extends ethers.utils.Interface {
  functions: {
    "isValidData(string,bytes32,bytes32,bytes32[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "isValidData",
    values: [string, BytesLike, BytesLike, BytesLike[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "isValidData",
    data: BytesLike
  ): Result;

  events: {};
}

export class Verify extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: VerifyInterface;

  functions: {
    isValidData(
      _asset: string,
      _root: BytesLike,
      _leaf: BytesLike,
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isValidData(string,bytes32,bytes32,bytes32[])"(
      _asset: string,
      _root: BytesLike,
      _leaf: BytesLike,
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  isValidData(
    _asset: string,
    _root: BytesLike,
    _leaf: BytesLike,
    _proof: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isValidData(string,bytes32,bytes32,bytes32[])"(
    _asset: string,
    _root: BytesLike,
    _leaf: BytesLike,
    _proof: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    isValidData(
      _asset: string,
      _root: BytesLike,
      _leaf: BytesLike,
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isValidData(string,bytes32,bytes32,bytes32[])"(
      _asset: string,
      _root: BytesLike,
      _leaf: BytesLike,
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    isValidData(
      _asset: string,
      _root: BytesLike,
      _leaf: BytesLike,
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isValidData(string,bytes32,bytes32,bytes32[])"(
      _asset: string,
      _root: BytesLike,
      _leaf: BytesLike,
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    isValidData(
      _asset: string,
      _root: BytesLike,
      _leaf: BytesLike,
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isValidData(string,bytes32,bytes32,bytes32[])"(
      _asset: string,
      _root: BytesLike,
      _leaf: BytesLike,
      _proof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
