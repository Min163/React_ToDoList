import React from 'react';
import { MdDone, MdDelete } from 'react-icons/md'
import { ItemProps, ListProps } from './Types';
import styles from './Component.module.css'


function Item({ todo, doneItem, removeItem } : ItemProps) {
    return (
      <>
        {
          todo.done ?
          (
            <div className={`${styles.ItemDiv}`}>
              <div className={`${styles.CheckCircle} ${styles.DoneCircle}`} onClick={() => doneItem(todo.id, todo.done)}>
                <MdDone />
              </div>
              <div className={`${styles.TextDiv} ${styles.DoneText}`}>
                { todo.text }
              </div>
              <div className={`${styles.RemoveIcon}`} onClick={() => removeItem(todo.id, todo.done)}>
                <MdDelete />
              </div>
            </div>
          ) :
          (
            <div className={`${styles.ItemDiv}`}>
              <div className={`${styles.CheckCircle} ${styles.UnDoneCircle}`} onClick={() => doneItem(todo.id, todo.done)}>
                <MdDone />
              </div>
              <div className={`${styles.TextDiv} ${styles.UnDoneText}`}>
                { todo.text }
              </div>
              <div className={`${styles.RemoveIcon}`} onClick={() => removeItem(todo.id, todo.done)}>
                <MdDelete />
              </div>
            </div>
          )
        }
      </>  
    );
}

function List({ todos, doneItem, removeItem } : ListProps) {
    return (
        <div className={`${styles.ListDiv}`}>
          {todos.map(todo => (
            <Item todo={todo} key={todo.id} doneItem={doneItem} removeItem={removeItem} />
          ))}
        </div>
    );
}

export default List;