export type Todo = {
    id : number;
    text : string;
    done : boolean;
}

export type HeadProps = {
    total : number;
    finish : number;
}

export type CreateStyle = {
    open : boolean;
    classname : string;
}

export type CreateProps = {
    createstyles : CreateStyle;
    input : string;
    onChange(e : any) : void;
    addItem(e : any) : void;
    onToggle(e : any) : void;
}

export type ItemProps = {
    todo : Todo;
    doneItem(id : number, done : boolean) : void;
    removeItem(id : number, done : boolean) : void;
}

export type ListProps = {
    todos : Array<Todo>;
    doneItem(id : number, done : boolean) : void;
    removeItem(id : number, done : boolean) : void;
}