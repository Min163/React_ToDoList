import React from 'react';
import { ButtonProps } from '../modules/Types';
import { DefaultButton, OpenButton } from '../layouts/AddButtonStyle';
import { MdAdd } from 'react-icons/md';

const AddButton = ({open, onToggle} : ButtonProps) => {
    return (
        <>
            {
                open ? 
                <OpenButton onClick={() => onToggle()}>
                    <MdAdd />
                </OpenButton>
                : 
                <DefaultButton onClick={() => onToggle()}>
                    <MdAdd />
                </DefaultButton>
            }
        </>
    );
}

export { AddButton };