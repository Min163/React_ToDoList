import React from 'react';
import { InsertProps } from '../Types';
import { InsertFormPositioner, InsertForm, InputStyle } from '../layouts/InsertFormStyle';

const InsertFormDiv = ({ input, onChange, addItem } : InsertProps) => {
    return (
        <InsertFormPositioner>
            <InsertForm>
                <InputStyle 
                    autoFocus placeholder="할 일을 입력 후, 엔터를 눌러주세요!" 
                    value={input} 
                    onChange={onChange} 
                    onKeyPress={addItem}
                />
            </InsertForm>
        </InsertFormPositioner>
    );
}

export { InsertFormDiv };