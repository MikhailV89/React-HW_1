import React, {Component, useEffect, useRef} from "react";
import Editor from "@toast-ui/editor";
import PropTypes from "prop-types";
import "@toast-ui/editor/dist/toastui-editor.css"

const MarkdownEditor = ({onContentChange}) => {
    const editorRef = useRef(null);

    useEffect(() => {
        const editorInstance = new Editor({
            el: editorRef.current,
            hideModeSwitch: true,
    },);

        editorInstance.on('change', () => {
            const content = editorInstance.getMarkdown();
            onContentChange(content);
        });

        return () => {
            editorInstance.destroy();
        };
    }, [onContentChange]);

    return <div ref={editorRef}></div>;
};

MarkdownEditor.propTypes = {
    onContentChange: PropTypes.func.isRequired,
};
export default MarkdownEditor;