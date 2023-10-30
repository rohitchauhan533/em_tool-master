import React, { useState, useEffect, Fragment } from "react";
import grapesjs from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import axios from "axios";


const Template = () => {
    const [editor, setEditor] = useState(null);
    const [editorCss,setEditorCss]=useState(null)

    const templateData={
        "name":"user_1",
        "html":editor,
        "css":editorCss
    }

    useEffect(() => {
        const editor = grapesjs.init({
            container: "#editor",
            storageManager: true,

            plugins: [gjsPresetWebpage],
            pluginsOpts: {
                gjsPresetWebpage: {},
            },
        });
        // setEditor(editor);
        setEditor(editor.getHtml());
        setEditorCss(editor.getCss())
    }, []);

    const btnSubmit = () => {
        console.log(editor, "hello");
        console.log(editorCss);
        postData(templateData);   
        
    };

    const postData = (data) => {
        var data = data;
        

        var config = {
            method: "post",
            url: "https://webhook.site/4aae5f02-1305-4def-8c1e-cd84f39ff319",
            headers: {
                "Content-Type": "text/html",
                Cookie: "laravel_session=myEC0Ji2dwHTksyx1wSJEmUNRgsBtyXfeDIqh2Qw",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <Fragment>
            <button
                type="submit"
                className="btn btn-success mb-4 mt-2 text-center"
                onClick={btnSubmit}
            >
                Submit
            </button>
            <div id="editor" className="editor-wrapper"></div>
        </Fragment>
    );
};

export default Template;
