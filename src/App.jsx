import MarkdownEditor from "./components/MarkdownEditor";
import React from "react";

function App() {
    return (
        <>
            <MarkdownEditor onContentChange={console.log} />
        </>
    );
}


export default App
