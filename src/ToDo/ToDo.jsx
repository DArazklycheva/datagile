import React, { useState } from 'react';
import styles from './ToDo.module.css';
import ToDoItem from './ToDoItem';

const ToDo = () => {
    const [name, setName] = useState('');
    const [todos, setTodos] = useState([
        {
            _id: 0,
            name: 'Городской цикл',
            isChecked: false
        },
        {
            _id: 1,
            name: 'Утверждено. Без нарушения',
            isChecked: true
        },
        {
            _id: 2,
            name: 'Утверждено. С нарушением',
            isChecked: true
        },
        {
            _id: 3,
            name: 'Не утверждено',
            isChecked: true
        },
        {
            _id: 4,
            name: 'Закрыто',
            isChecked: true
        }
    ]);

    const onClickNameHandler = e => {
        e.preventDefault();
        setTodos(prev => [...prev, { _id: todos.length, name: name, isChecked: false }])
        setName('')
    }

    const deleteToDoItem = function (e) {
        e.target.parentNode.parentNode.remove();
    }

    const onChangeStatusAll = function () {
        document.location.reload();
    }

    const onChangeStatusActive = function () {
        let newArrayByNotDone = todos.filter((todo) => todo.isChecked === false);
        setTodos(newArrayByNotDone);
    }

    const onChangeStatusCompleted = function () {
        let newArrayByDone = todos.filter((todo) => todo.isChecked === true);
        setTodos(newArrayByDone);
    }

    const toogleCheckedToDo = id => {
        const newArray = [].concat(todos);
        newArray[id].isChecked = !newArray[id].isChecked;
        setTodos(newArray);
    }

    const onSortingByName = function (e) {
        if (e.target.value === 'nameSort') {
            function byFieldName(field) {
                return function (a, b) {
                    return a[field] > b[field] ? 1 : -1;
                }
            }
            let newArrayByName = todos.sort(byFieldName('name'));
            setTodos(newArrayByName);
        } else if (e.target.value === 'statusSort') {
            let newArrayByStatus = todos.sort(function (x, y) {
                // true values first
                // return (x === y)? 0 : x? -1 : 1;
                // false values first
                return (x === y) ? 0 : x ? 1 : -1;
            });
            setTodos(newArrayByStatus);
        }
    }

    return (
        <>
            <div className={styles.addTask}>
                <span className={styles.addTaskName}>Новая задача</span>
                <input className={styles.todoInput}
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <div className={styles.headerButton} onClick={onClickNameHandler}>
                    <span className={styles.span}>+</span>
                    <span>Добавить</span>
                </div>
            </div>

            <div className={styles.todoTitle}>Список задач</div>

            <div className={styles.todoBlog}>
                <div className={styles.todoBlogItems}>
                    {todos &&
                        todos.map(todo => (
                            <ToDoItem
                                key={`_todo_${todo._id}`}
                                name={todo.name}
                                toogleCheckedToDo={toogleCheckedToDo}
                                isChecked={todo.isChecked}
                                id={todo._id}
                                deleteToDoItem={deleteToDoItem}
                            />
                        ))}
                </div>
                <div className={styles.todoBlogStatus}>
                    <div className={styles.todoBlogStatusAction}>
                        <span className={styles.addTaskName}>Статус</span>
                        <label className={styles.labelRadio}>
                            <input type="radio" name='status' className={styles.inputRadio} defaultChecked={true} onChange={onChangeStatusAll} />Все
                        </label>
                        <label className={styles.labelRadio}>
                            <input type="radio" name='status' className={styles.inputRadio} onChange={onChangeStatusActive} />Активные
                        </label>
                        <label className={styles.labelRadio}>
                            <input type="radio" name='status' className={styles.inputRadio} onChange={onChangeStatusCompleted} />Завершенные
                        </label>
                    </div>
                    <div>
                        <span className={styles.addTaskName}>Сортировка</span>
                        <select className={styles.todoSelect} onChange={onSortingByName}>
                            <option value="nameSort">Наименование</option>
                            <option value="statusSort">Статус</option>
                        </select>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ToDo;