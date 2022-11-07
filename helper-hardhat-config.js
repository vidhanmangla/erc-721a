const { ethers } = require("hardhat")

const networkConfig = {

    default: {
        name: "hardhat",
    },

    31337: {
        name: "localhost",
        gasLane: "", // 30 gwei
        callbackGasLimit: "500000", // 500,000 gas
    },

    5: {
        name: "goerli",
        gasLane: "", // 30 gwei
        callbackGasLimit: "500000", // 500,000 gas
    },

    1: {
        name: "mainnet",
    },

}

const developmentChains = ["hardhat", "localhost"]
const VERIFICATION_BLOCK_CONFIRMATIONS = 6

module.exports = {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
}
