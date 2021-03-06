import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Head from './Head';
import List from './List';
import Create from './Create';

const TemplateDiv = styled.div`
  width: 512px;
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: navy;
  border-radius: 16px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function Template()
{
    const [todos, setTodos] = useState([]);
    const [total, setTotal] = useState(0);
    const [finish, setFinish] = useState(0);
    const [input, setInput] = useState('');
    const [open, setOpen] = useState(false);
    const nextId = useRef(0); 
    
    const onToggle = open =>
    {
        setOpen(open => !open);
    }

    const onChange = e =>
    {
        setInput(input => e.target.value);
    }

    const addItem = e =>
    {
        if  (e.key === 'Enter')
        {
            const todo = {
                id : nextId.current,
                text : input,
                done : false
            }

            //console.log(todo);

            setTodos(
                //todos.concat(todo)
                [...todos, todo]
            );

            setInput(input => '');
            setOpen(open => false);

            nextId.current += 1;

            setTotal(total => total + 1);
        }
    }

    const doneItem = (id, done) => 
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

    const removeItem = (id, done) =>
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
        <TemplateDiv>
            <Head total={total} finish={finish} />
            <List todos={todos} doneItem={doneItem} removeItem={removeItem}/>
            <Create open={open} input={input} onChange={onChange} addItem={addItem} onToggle={onToggle}/>
        </TemplateDiv>
    );
}

export default Template;