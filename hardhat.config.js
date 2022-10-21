require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const PRIVATE =
  "a177758d80937e5e71a4d6429b6acd6c6db55606522429aebca144664097171c";

module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/7trXGQ7EU7tcjVVJ8TibNIoYIpHaSXF7",
      accounts: [`${PRIVATE}`],
    },
  },
  etherscan: {
    apiKey: "K6R5J9MKUFF863MPMAIEI6BJDTERW3YUMQ",
  },
};
