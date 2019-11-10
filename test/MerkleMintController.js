"use strict"

const {BN, expectEvent} = require("openzeppelin-test-helpers")
const {root, leaf, proof, validWord} = require("./utils/utils.js")

const keccak256 = require("keccak256")

const MerkleMintCore = artifacts.require("MerkleMintCore")
const MerkleMintController = artifacts.require("MerkleMintController")

contract("MerkleMintController", async ([sender]) => {
    let mmController
    let mmCore

    let tokenName = "MerkleMintToken"
    let tokenSymbol = "MMT"

    let tokenId = 1

    let series = 1
    let seriesName = "First Series"
    let ipfsHash = keccak256(seriesName)

    beforeEach(async () => {
        mmCore = await MerkleMintCore.new()
        mmController = await MerkleMintController.new()

        await mmController.initializeController(mmCore.address)
        await mmController.addSerie(series, root, seriesName, ipfsHash)
        await mmCore.initialize(
            tokenName,
            tokenSymbol,
            [mmController.address],
            [mmController.address],
        )
    })

    it("beforeEach properly deploys the contract", async () => {
        const name = await mmCore.name()
        const symbol = await mmCore.symbol()

        assert.equal(name, tokenName)
        assert.equal(symbol, tokenSymbol)
    })

    it("it can mint a token", async () => {
        //ValidWord is the token URI
        const result = await mmController.mintAsset(validWord, leaf, proof, tokenId, series, {
            from: sender,
        })
        const URI = await mmCore.tokenURI(tokenId)

        assert.equal(URI, validWord)
    })

    it("it can add additional IPFSHash", async () => {
        const newHash = keccak256("The second Thing")
        const receipt = await mmController.addIpfsRefToSerie(newHash, 1, {
            from: sender,
        })

        expectEvent(receipt, "IPFSHashAdded", {SerieNumber: new BN(1)})
    })
})
