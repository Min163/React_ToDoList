import React from 'react';
import { CreateProps } from '../modules/Types';
import { InsertFormDiv } from '../presentationals/InsertFormDiv';
import { AddButton } from '../presentationals/AddButton';

function CreateItem({ open, input, onChange, addItem, onToggle } : CreateProps) {
    return (
        <>
            { 
              open && (InsertFormDiv({input, onChange, addItem}))
            }
            {
              AddButton({open, onToggle})
            }
        </>
    )
}

export default CreateItem;