import React, { useState, useRef } from 'react';
import  { Todo } from './Types';
import styles from './Component.module.css';
import Head from './containers/Head';
import List from './containers/List';
import CreateItem from './containers/CreateItem';

function Template()
{
    const [todos, setTodos] = useState<Array<Todo>>([]);
    const [total, setTotal] = useState<number>(0);
    const [finish, setFinish] = useState<number>(0);
    const [input, setInput] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);
    const nextId = useRef(0); 
    
    const onToggle = () =>
    {
        setOpen(open => !open);
    }

    const onChange = (e : any) =>
    {
        setInput(input => e.target.value);
    }

    const addItem = (e : any) =>
    {
        if  (e.key === 'Enter')
        {
            const todo = {
                id : nextId.current,
                text : input,
                done : false
            }

            setTodos(
                //todos.concat(todo)
                [...todos, todo]
            );

            setInput(input => '');
            setOpen(open => !open);

            nextId.current += 1;

            setTotal(total => total + 1);
        }
    }

    const doneItem = (id : number, done : boolean) => 
    {
        setTodos(
            todos.map(todo => 
                todo.id === id ? {...todo, done : !done} : todo
            )
        );

        if (done) 
        {
            setFinish(finish => finish - 1);
        }
        else
        {
            setFinish(finish => finish + 1);
        }
    };

    const removeItem = (id : number, done : boolean) =>
    {
        setTodos(
            todos.filter(todo =>
                todo.id === id ? null : todo
            )
        );
        
        setTotal(total => total - 1);

        if (done) 
        {
            setFinish(finish => finish - 1);
        }
    }

    return (
        <div className={`${styles.TemplateDiv}`}>
            <Head total={total} finish={finish} />
            <List todos={todos} doneItem={doneItem} removeItem={removeItem}/>
            <CreateItem open={open} input={input} onChange={onChange} addItem={addItem} onToggle={onToggle}/>
        </div>
    );
}

export default Template;