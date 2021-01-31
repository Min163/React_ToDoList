import styled from 'styled-components';

const DefaultButton = styled.button`
    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: block;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.125s all ease-in;
    background: #38d9a9;
    &:hover{
        background: #63e6be;
    }
    &:active{
        background: #18946f;
    }
`;

const OpenButton = styled.button`
    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: block;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.125s all ease-in;
    background: #ff6b6b;
    transform: translate(-50%, 50%) rotate(45deg);
    &:hover{
        background: #ff8787;
    }
    &:active{
        background: #fa5252;
    }
`;

export { DefaultButton, OpenButton }