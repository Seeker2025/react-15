import css from './ToDo.module.css';


export const ToDo = ({ todo, handleCheckCompleted, handleDelete })=>{
    console.log(todo.completed);
    console.log(todo);
    
    return (
        <li className={css.listGroupItem}>
            <div className={css.row}>
                <div className={css.col10}>

                </div>

                <div>
                    <input
                        className={css.formCheck}
                        type="checkbox"
                        checked={todo.completed}
                        onChange={()=>handleCheckCompleted(todo.id)}
                    />
                    {todo.title}

                </div>

                <div className={css.col}>
                    
                    <button
                        disabled={!todo.completed}
                        type="button"
                        className={css.btnClose}
                        arial-label = "close"
                        onClick={()=>{handleDelete(todo.id)}}
                    > &#10006;   
                    </button>

                </div>
 <p>todo: {`${todo.completed}`}</p>
            </div>

        </li>
    )
}