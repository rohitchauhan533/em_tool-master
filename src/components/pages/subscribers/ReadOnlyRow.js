import React from "react";
import "../../../css/style.css"
const ReadOnlyRow = ({subscriber,handleEditClick,handleDeleteClick}) => {
    return (
        
            <tr>
                <td>{subscriber.name}</td>
                <td >{subscriber.email}</td>
                <td>{subscriber.subscribed}</td>
                <td><button type="button" className="btn btn-primary btn-sm" onClick={(event)=>{handleEditClick(event,subscriber)}}>Edit</button>
                <button type="button" className="btn btn-sm btn-danger" onClick={()=>handleDeleteClick(subscriber.id)}>Delete</button>
                </td>
            </tr>
    );
};

export default ReadOnlyRow;
