import React, { useEffect } from "react";

export const Snackbar = ({ open, success, message, counts, handleClose}) => {
    useEffect(() => {
        if(open) {
            showSuccess();
        }
    })

    const showSuccess = () => {
        const x = document.getElementById("snackbar");
        if(success) x.className = "success show";
        else x.className = "error show";
        setTimeout(function(){
            x.className = x.className.replace("show", "");
            handleClose()
        }, counts);
    }

    return (
        <div>
            <div id="snackbar" className="card shadow"> { message } </div>
        </div>
    )
}
