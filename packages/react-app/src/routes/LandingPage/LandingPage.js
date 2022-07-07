import "./LandingPage.css"

import { useQuery } from "@apollo/client"
import { Contract } from "@ethersproject/contracts"
import { useCall } from "@usedapp/core"
import React, { useEffect, useState } from "react"

import { Body, Container, Header, Image, Link } from "../../components"
import WalletButton from "../../components/WalletButton/WalletButton"
import logo from "../../assets/POP_logo_inverted.png"

import { addresses, abis } from "@my-app/contracts"
import GET_TRANSFERS from "../../graphql/subgraph"

function LandingPage() {
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
                <img src={logo} height={50} alt="POP logo" />
                <WalletButton />
            </Header>
            <Body>
                <div className="SplashText">
                    <h1 style={{ fontSize: 130, margin: 0 }}>23,534</h1>
                    <h3 style={{ width: "50%" }}>
                        Estimated tonnes of CO2 removed from our atmosphere from
                        registered projects
                    </h3>
                </div>
            </Body>
        </Container>
    )
}

export default LandingPage
