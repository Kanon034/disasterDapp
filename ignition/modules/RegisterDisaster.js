const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const RegisterDisasterModule = buildModule("RegisterDisaster", (m) => {
    const registerDisaster = m.contract("RegisterDisaster");

    return { registerDisaster };
});

module.exports = RegisterDisasterModule;