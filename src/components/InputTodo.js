import { Fragment, useState } from "react";

const InputTodo = () => {

    const [description, setDescription] = useState("");

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch("http://localhost:5000/todos",{
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(body)
            });
            console.log(response);

            window.location = "/";
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div style={{backgroundColor:'#100328', color : 'white',height:'200px',borderRadius:'10px'}}>
            <h1 className="text-center mt-5"> PERN To-do</h1>
            <form className="d-flex m-5" onSubmit={onSubmitForm}>
                <input 
                    type="text" 
                    className="form-control me-2" 
                    value={description}
                    onChange={e => setDescription(e.target.value)}/>
                <button className="btn btn-success" > Add </button>
            </form>
        </div>
        
    )
}

export default InputTodo;