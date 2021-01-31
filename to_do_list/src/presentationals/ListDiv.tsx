import React from 'react';
import { ListProps } from '../Types';
import { ListStyle } from '../layouts/ListStyle';
import { ItemDiv } from '../presentationals/ItemDiv';

const ListDiv = ({ todos, doneItem, removeItem } : ListProps) => {
    return (
        <ListStyle>
            {
                todos.map(todo =>(
                    <ItemDiv
                        todo={todo}
                        key={todo.id}
                        doneItem={doneItem}
                        removeItem={removeItem}
                    />
                ))
            }
        </ListStyle>
    );
}

export { ListDiv };