import styled from "styled-components"

export const Body = styled.div`
    align-items: center;
    color: white;
    display: flex;
    flex-direction: column;
    font-size: calc(10px + 2vmin);
    justify-content: center;
    margin-top: 40px;
`

export const Button = styled.button`
    background-color: white;
    border: none;
    border-radius: 8px;
    color: #fff;
    background-color: #4da167;
    cursor: pointer;
    font-size: 16px;
    margin: 0px 20px;
    padding: 12px 24px;
    text-align: center;
    text-decoration: none;
    transition: 0.3s;
    &:hover {
        background-color: #23ce6b;
    }
`

export const Container = styled.div`
    background-color: #23ce6b;
    display: flex;
    flex-direction: column;
    height: calc(100vh);
`

export const Header = styled.header`
    align-items: center;
    background-color: #fff;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    min-height: 70px;
`

export const Image = styled.img`
    height: 40vmin;
    margin-bottom: 16px;
    pointer-events: none;
`

export const Link = styled.a.attrs({
    target: "_blank",
    rel: "noopener noreferrer"
})`
    color: #61dafb;
    margin-top: 8px;
`
