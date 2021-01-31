import React from 'react';
import { ItemProps } from '../modules/Types';
import { ItemStyle, DoneCircle, UnDoneCircle, DoneTextDiv, UnDoneTextDiv, RemoveIcon } from '../layouts/ItemStyle';
import { MdDone, MdDelete } from 'react-icons/md'

const ItemDiv = ({ todo, doneItem, removeItem } : ItemProps ) => {
    return (
        <>
            <ItemStyle>
                {
                    todo.done ?
                    (   
                        <>
                            <DoneCircle onClick={() => doneItem(todo.id, todo.done)}>
                                <MdDone />
                            </DoneCircle>
                            <DoneTextDiv>
                                {todo.text}
                            </DoneTextDiv>
                        </>
                    ) :
                    (
                        <>
                            <UnDoneCircle onClick={() => doneItem(todo.id, todo.done)}>
                                <MdDone />
                            </UnDoneCircle>
                            <UnDoneTextDiv>
                                {todo.text}
                            </UnDoneTextDiv>
                        </>
                    )
                }
                <RemoveIcon onClick={() => removeItem(todo.id, todo.done)}>
                    <MdDelete />
                </RemoveIcon>
            </ItemStyle>
        </>
    );
}

export { ItemDiv };