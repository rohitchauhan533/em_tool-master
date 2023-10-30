import React from "react";

function Message({msg}) {
    return (
        <div
            class="alert alert-info  fade show "
            role="alert"
        >
         {msg}
        </div>
    );
}

export default Message;
