import MarkDownEditor from "./components/MarkDownEditor";
import React from "react";

function App() {
    return (
        <>
            <MarkDownEditor onContentChange={console.log} />
        </>
    );
}


export default App
