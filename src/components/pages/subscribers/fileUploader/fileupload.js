import React, { Fragment, useState } from "react";
import Message from "./message";
import axios from "axios";

const Fileupload = () => {
    const [file, setFile] = useState("");

    const [filename, setFilename] = useState("choose file");

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    //extension getter for the validation
    const extensiongetter = (str) =>
        str === undefined ? false : str.slice(str.lastIndexOf("."));

    const handleSubmit = (e) => {
        e.preventDefault();
        let extension = extensiongetter(file.name);
        let xlsExtension = ".xls";
        let xlsxExtension = ".xlsx";

        if (file === "") {
            // console.log("empty");
            setMessage("Choose file to upload");
            console.log(message);
            setTimeout(() => {
                setMessage("");
            }, 3000);
            return false;
        }

        if (extension !== xlsExtension && extension !== xlsxExtension) {
            // console.log("not supported");
            setMessage("File Format not supported");
            console.log(message);
            setTimeout(() => {
                setMessage("");
            }, 3000);
        } else if (extension === xlsExtension || extension === xlsxExtension) {
            // const formData=new FormData()
            // formData.append('file',file)
            //todo
            // api call here
            postData(file)
            setMessage("File uploaded");
            console.log(message);
            setTimeout(() => {
                setMessage("");
            }, 3000);
        }
    };

    const postData = (values) => {;
        var data = JSON.stringify({
           values
        });

        var config = {
            method: "post",
            url: "backend url",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <Fragment>
            {message ? <Message msg={message} /> : null}
            <form
                method="POST"
                className="mt-4 text-center d-grid gap-2"
                onSubmit={handleSubmit}
            >
                <div className="input-group mb-3">
                    <input
                        type="file"
                        className="form-control"
                        id="CustomFile"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <h6 style={{ display: "inline" }}>File:</h6>
                    <span style={{ color: "red" }}>{filename}</span>
                </div>
                <input
                    type="submit"
                    value="upload"
                    className="btn btn-primary btn-lg "
                />
            </form>
        </Fragment>
    );
};

export default Fileupload;
