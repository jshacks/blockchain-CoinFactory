export interface Coin {
  createGenesis: {
    totalPremine: number;
    numberOfDelegates: number;
    genesisAcounts : string[]
  }
  networkjson: {
    token: string;
    pubKeyHash: number;
    symbol: string;
  }
  constants : {
    date: {
      year : string,
      month: string,
      day: string,
      hour: string,
    };

  }
}
