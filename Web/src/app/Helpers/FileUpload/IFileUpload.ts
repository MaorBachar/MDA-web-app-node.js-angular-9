
interface IFileUpload {
    UploadFileAsync(fileToUpload: File , cb: Function): any ;
}

export default IFileUpload;
