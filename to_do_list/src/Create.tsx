import React from 'react';
import { CreateProps } from './Types';
import styles from './Component.module.css';
import { MdAdd } from 'react-icons/md';

function Create({ createstyles, input, onChange, addItem, onToggle } : CreateProps) {
    return (
        <>
            { 
              createstyles.open && (
                <div className={`${styles.InsertFormPostioner}`}>
                    <div className={`${styles.InsertForm}`}>
                        <input 
                          className={`${styles.InputStyle}`} 
                          autoFocus placeholder="할 일을 입력 후, 엔터를 눌러주세요!" 
                          value={input} 
                          onChange={onChange} 
                          onKeyPress={addItem}
                        />
                    </div>
                </div>)
            }
            {
              createstyles.open ? (
                <div
                  className={`${styles.ButtonDiv} ${styles.OpenCirCleButton}`}
                  onClick={() => onToggle(createstyles)}
                >
                    <MdAdd />
                </div>
              ) :
              (
                <div
                  className={`${styles.ButtonDiv} ${styles.CircleButton}`}
                  onClick={() => onToggle(createstyles)}
                >
                    <MdAdd />
                </div>
              )
            }
            
        </>
    )
}

export default Create;