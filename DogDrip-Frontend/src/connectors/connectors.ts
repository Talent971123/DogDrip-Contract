import { InjectedConnector } from "@web3-react/injected-connector";

import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

export const injected = new InjectedConnector({
  supportedChainIds: [
    1, 3, 4, 5, 25, 42, 56, 97, 137, 1337, 31337, 43114, 137, 80001,
  ],
});

export const WalletConnect = new WalletConnectConnector({
  rpc: {
    1: "https://eth-mainnet.g.alchemy.com/v2/-ajv5spWDkHtKGMnGBrX9FBQSJyeOq-X",
    4: "https://eth-rinkeby.alchemyapi.io/v2/GwOWj5s-v_OUsjrL22kme2rFCSafFvlH",
    80001:
      "https://polygon-mumbai.g.alchemy.com/v2/7trXGQ7EU7tcjVVJ8TibNIoYIpHaSXF7",
    137: "https://polygon-mainnet.g.alchemy.com/v2/9MUdsz3oD99RBbX8tXNdNNIZfOUnn-5d",
  },
  qrcode: true,
  bridge: "https://bridge.walletconnect.org",
});
