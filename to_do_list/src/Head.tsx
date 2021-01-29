import React from 'react';
import { HeadProps } from './Types';
import styles from './Component.module.css';

function Head({total, finish} : HeadProps) {
    return (
        <div className={`${styles.HeadDiv}`}>
            <h1>Minseon's To Do List</h1>
            <div className={`${styles.day}`}>2021년 1월 26일</div>
            <div className={`${styles.lefts}`}>{finish} / {total}</div>
        </div>
    );
}

export default Head;