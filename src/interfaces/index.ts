export interface Coin {
  createGenesis: {
    totalPremine: number;
    numberOfDelegates: number;
    genesisAcounts : [{
      address: string,
      totalCoins: number
    }]
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
