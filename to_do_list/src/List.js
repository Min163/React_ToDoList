import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md'

const ListDiv = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: white;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const ItemDiv = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function Item({ todo, doneItem, removeItem }) {
    return (
        <ItemDiv>
            <CheckCircle done={ todo.done } onClick={() => doneItem(todo.id, todo.done)}>
              { todo.done && <MdDone /> }
            </CheckCircle>
            <Text done={ todo.done }>
              { todo.text }
            </Text>
            <Remove onClick={() => removeItem(todo.id, todo.done)}>
              <MdDelete />
            </Remove>
        </ItemDiv>
    );
}

function List({ todos, doneItem, removeItem }) {
    return (
        <ListDiv>
          {todos.map(todo => (
            <Item todo={todo} key={todo.id} doneItem={doneItem} removeItem={removeItem} />
          ))}
        </ListDiv>
    );
}

export default List;