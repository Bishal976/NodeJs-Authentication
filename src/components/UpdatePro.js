import React from 'react';
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { getDroppedOrSelectedFiles } from 'html5-file-selector'
//import axios from 'axios';
export default function Update_Pro(){
    function submithandler(){
        return ;
    }
    const fileParams = ({ meta }) => {
        return { url: 'https://httpbin.org/post' }
    }
    const onFileChange = ({ meta, file }, status) => { 
        console.log(status, meta, file) 
    }
    const onSubmit = (files, allFiles) => {
        allFiles.forEach(f => f.remove())
    }
    const getFilesFromEvent = e => {
        return new Promise(resolve => {
            getDroppedOrSelectedFiles(e).then(chosenFiles => {
                resolve(chosenFiles.map(f => f.fileObject))
            })
        })
    }
    const selectFileInput = ({ accept, onFiles, files, getFilesFromEvent }) => {
        const textMsg = files.length > 0 ? 'Upload Again' : 'Select Files'
        return (
            <label className="btn btn-danger mt-4">
                {textMsg}
                <input
                    style={{ display: 'none' }}
                    type="file"
                    accept={accept}
                    multiple
                    onChange={e => {
                        getFilesFromEvent(e).then(chosenFiles => {
                            onFiles(chosenFiles)
                        })
                    }}
                />
            </label>
        )
    }
    return (
        <>
        <p> This is update Page</p>
        <form>
            <p style={{display:"inline"}}>Enter Title </p>
            <input type="text"/><br/>
            <p style={{display:"inline"}}>Enter Desc </p>
            <input type="text"/><br/>
            <p style={{display:"inline"}}>Enter Image </p>
            <input type="file"/>
            <button onClick={()=>submithandler()}>Submit</button>
        </form>
        <Dropzone
            onSubmit={onSubmit}
            onChangeStatus={onFileChange}
            InputComponent={selectFileInput}
            getUploadParams={fileParams}
            getFilesFromEvent={getFilesFromEvent}
            accept="image/*,audio/*,video/*"
            maxFiles={5}
            inputContent="Drop A File"
            styles={{
                dropzone: { width: 600, height: 400 },
                dropzoneActive: { borderColor: 'green' },
            }}            
        />
        </>
    )
}