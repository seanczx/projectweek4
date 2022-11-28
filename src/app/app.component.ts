import { Component } from '@angular/core';
import { ethers } from 'ethers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  wallet: ethers.Wallet | undefined;
  provider: ethers.providers.Provider;

  ethBalance: number | undefined;
  tokenBalance: number | undefined;
  votePower: number | undefined;

  constructor() {
    this.provider = ethers.getDefaultProvider("goerli");
  }
  
  
  title = 'my-app';
//  lastBlockNumber;

//  constructor() {
//    this.lastBlockNumber = 0;
//    ethers.getDefaultProvider("goerli").getBlock("latest").then((block) => {
//      this.lastBlockNumber = block.number;
//    });
//  }


}
