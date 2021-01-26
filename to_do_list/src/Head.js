import React from 'react';
import styled from 'styled-components';

const HeadDiv = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  //border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    //color: #343a40;
    color : white;
  }
  .day {
    margin-top: 4px;
    //color: #868e96;
    color : white;
    font-size: 21px;
  }
  .tasks-left {
    //color: #20c997;
    color : white;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function Head({total, finish}) {
    return (
        <HeadDiv>
            <h1>Minseon's To Do List</h1>
            <div className="day">2021년 1월 26일</div>
            <div className="tasks-left">{finish} / {total}</div>
        </HeadDiv>
    );
}

export default Head;