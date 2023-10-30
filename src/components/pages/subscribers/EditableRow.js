import React from "react";

const EditableRow = ({ editFormData, handleEditFormChange,handleCancelClick ,}) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    required="required"
                    name="name"
                    placeholder="Enter a name..."
                    value={editFormData.name}
                    onChange={handleEditFormChange}
                    className="form-control text-center"
                />
            </td>
            <td>
                {}
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    name="subscribed"
                    placeholder="subscription date"
                    value={editFormData.subscribed}
                    onChange={handleEditFormChange}
                    className="form-control text-center"
                />
            </td>
            <td>
                <button type="submit" className="btn btn-secondary btn-sm">Save</button> <br /><br />
                <button type="button" className="btn btn-secondary btn-sm " onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    );
};

export default EditableRow;
