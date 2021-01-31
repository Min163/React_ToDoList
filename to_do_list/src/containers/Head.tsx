import React from 'react';
import { HeadProps } from '../Types';
import { HeadDiv } from '../presentationals/HeadDiv';

const Head = ({total, finish} : HeadProps) => {
    return (
        HeadDiv({total, finish})
    );
}

export default Head;