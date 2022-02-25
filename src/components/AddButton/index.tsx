import "./styles.scss";

interface propsAddButton{
    title:string,
    handleAddTask: () => void;
}

export function AddButton({title,handleAddTask} : propsAddButton){
    return (
        <button className="addButton" type="button" onClick={handleAddTask}>{title}</button>
    )
}