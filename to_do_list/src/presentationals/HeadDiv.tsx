import React from 'react';
import { HeadProps } from '../modules/Types';
import { HeadStyle, DayStyle, LeftStyle } from '../layouts/HeadStyle';

const HeadDiv = ({total, finish} : HeadProps): any => {
    const date = new Date();
    const yyyymmdd = date.toDateString();

    return (
        <HeadStyle>
            <h1>Minseon's To Do List</h1>
            <DayStyle>{yyyymmdd}</DayStyle>
            <LeftStyle>{finish} / {total}</LeftStyle>
        </HeadStyle>
    );
}

export { HeadDiv };