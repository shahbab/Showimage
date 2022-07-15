import React, { useState } from "react";
import axios from 'axios';

const File = () => {
    const [file, setFile] = useState()
    function upload(e) {
        console.log(file)
        var data = new FormData();
        data.append('files', data);
    
        // const res = await axios.post(`apiurl`, data)

    }
    return (
        <>
            <input type="file" name="Fileupload" multiple onChange={(e) => setFile(e.target.files)} />
            <button onClick={upload}>Upload</button>
        </>
    )
}
export default File;