import React from 'react';
import styles from './ToDo.module.css';

type ToDoItemProps = {
    name: string;
    isChecked: boolean; 
    id: number;
    deleteToDoItem: any;
    toogleCheckedToDo: Function;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ name, isChecked, id, deleteToDoItem, toogleCheckedToDo }) => {

    return (
        <div className={styles.todoItem}>
            <div onChange={() => { toogleCheckedToDo(id) }}>
                <input className={styles.todoItemInput} type="checkbox" defaultChecked={isChecked} id={'id'} />
                <label className={styles.todoItemName} htmlFor={'id'}>{name}</label>
            </div>
            <div className={styles.todoTrash} onClick={deleteToDoItem}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABH0lEQVR4nO3WP0rDcBjG8RfiEXTxDzq1k05Ke4CK3RQ9gGKnCu0BtJ3aoR7AOLWLHsBuCpLu6gV0bx1zASUS+HZzqM8bkUoe+I2fhychgZ9ZnjzfJ/mlM38Dssr8voHkrwakeQNtmp4tOl4VPALvOQZU6YgUfAs+dQyo0XGj4EtwyzGgTUdPwU1w6BhwTUdDwUfgO8eAIR2HCi6DnxwDnukoKXgNPHYMmNCxquAFM/vgBIIPsJ90SXnnCZYFu4JN34KcF0q2BbuDTb8D91e8L9iDDP4iCympC/YMe+UZcEFJR7Bd7LlnwAklfcEOsMeeAbuU3Av2AVvxDNigJDazwg9cEZPadXMmctyAHi2DLHE3mD7RLCfmDrCYxYA8/ztffRS81D0ah94AAAAASUVORK5CYII=" alt="empty-trash" className={styles.imgTrash}></img>
            </div>
        </div>
    )
}

export default ToDoItem;