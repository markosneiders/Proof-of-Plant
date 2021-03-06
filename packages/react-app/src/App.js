import { useQuery } from "@apollo/client"
import { Contract } from "@ethersproject/contracts"
import { useCall } from "@usedapp/core"
import React, { useEffect, useState } from "react"

import { Body, Container, Header, Image, Link } from "./components"
import logo from "./ethereumLogo.png"
import WalletButton from "./components/WalletButton/WalletButton"

import { addresses, abis } from "@my-app/contracts"
import GET_TRANSFERS from "./graphql/subgraph"

function App() {
    const { error: contractCallError, value: tokenBalance } =
        useCall({
            contract: new Contract(addresses.ceaErc20, abis.erc20),
            method: "balanceOf",
            args: ["0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C"]
        }) ?? {}

    const { loading, error: subgraphQueryError, data } = useQuery(GET_TRANSFERS)

    useEffect(() => {
        if (subgraphQueryError) {
            console.error(
                "Error while querying subgraph:",
                subgraphQueryError.message
            )
            return
        }
        if (!loading && data && data.transfers) {
            console.log({ transfers: data.transfers })
        }
    }, [loading, subgraphQueryError, data])

    return (
        <Container>
            <Header>
                <WalletButton />
            </Header>
            <Body>
                <Image src={logo} alt="ethereum-logo" />
                <p>
                    Edit <code>packages/react-app/src/App.js</code> and save to
                    reload.
                </p>
                <Link href="https://reactjs.org">Learn React</Link>
                <Link href="https://usedapp.io/">Learn useDapp</Link>
                <Link href="https://thegraph.com/docs/quick-start">
                    Learn The Graph
                </Link>
            </Body>
        </Container>
    )
}

export default App
