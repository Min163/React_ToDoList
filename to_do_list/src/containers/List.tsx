import React from 'react';
import { ListProps } from '../modules/Types';
import { ListDiv } from '../presentationals/ListDiv';

const List = ({ todos, doneItem, removeItem } : ListProps) => {
    return (
        <ListDiv
          todos={todos}
          doneItem={doneItem}
          removeItem={removeItem}
        />
    );
}

export default List;