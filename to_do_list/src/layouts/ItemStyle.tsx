import styled from 'styled-components';

export const DoneCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    border : 1px solid #38d9a9;
    color : #38d9a9;
`;

export const UnDoneCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    border: 1px solid #ced4da;
`;

export const DoneTextDiv = styled.div`
    flex: 1;
    font-size: 21px;
    color : #ced4da;
`;

export const UnDoneTextDiv = styled.div`
    flex: 1;
    font-size: 21px;
    color: #495057;
`;

export const RemoveIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor: pointer;
    display: none;
    &:hover{
        color: #ff6b6b;
    }
`;

export const ItemStyle = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        ${RemoveIcon} {
        display: initial;
        }
    }
`;