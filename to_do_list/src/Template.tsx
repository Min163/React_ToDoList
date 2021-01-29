import React, { useState, useRef } from 'react';
import  {Todo, CreateStyle } from './Types';
import styles from './Component.module.css';
import Head from './Head';
import List from './List';
import Create from './Create';

function Template()
{
    const [todos, setTodos] = useState<Array<Todo>>([]);
    const [total, setTotal] = useState<number>(0);
    const [finish, setFinish] = useState<number>(0);
    const [input, setInput] = useState<string>('');
    const [createstyles, setCreateProps] = useState<CreateStyle>({
        open : false,
        classname : 'CircleButton',
    });
    const nextId = useRef(0); 
    
    const onToggle = (createstyles : CreateStyle) =>
    {
        setCreateProps(
            {
                ...createstyles,
                ['open'] : !createstyles.open,
                ['classname'] : createstyles.open ? 'CircleButton' : 'OpenCircleButton'
            }
        );
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
            setCreateProps(
                {
                    ...createstyles,
                    ['open'] : false,
                    ['classname'] : 'CircleButton'
                }
            )

            nextId.current += 1;

            setTotal(total => total + 1);
        }
    }

    const doneItem = (id : number, done : boolean) => 
    {
        //console.log(id);
        setTodos(
            todos.map(todo => 
                todo.id === id ? {...todo, done : !done} : todo
            )
        );

        //console.log(done);

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
        //console.log(id);
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
            <Create createstyles={createstyles} input={input} onChange={onChange} addItem={addItem} onToggle={onToggle}/>
        </div>
    );
}

export default Template;