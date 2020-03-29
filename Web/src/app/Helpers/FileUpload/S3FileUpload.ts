/**
 * Created by nicom on 8/20/2017.
 */
import IFileUpload from './IFileUpload';
declare var AWS: any;

class S3FileUpload implements IFileUpload {
    private s3: any;

    constructor(region: string, IdentityID: string, BucketName: string, apiVersion = '2006-03-01') {
        AWS.config.region = region;
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: region + ':' + IdentityID,
        });

        this.s3 = new AWS.S3({
            apiVersion: apiVersion,
            params: {Bucket: BucketName}
        });
    }

    async UploadFileAsync(fileToUpload: File, cb: Function) {
        let fileName = fileToUpload.name;
        let fileType = fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length);
        fileName = fileName.replace(fileType, '');
        let photoKey = fileName + Date.now() + '.' + fileType;
        await this.s3.upload({
                Key: photoKey,
                Body: fileToUpload,
                ACL: 'public-read'
            },
            (err: any, data: any) => {
                if (err) {
                    let ret = {success: false, error: err};
                    cb(ret);
                } else {
                    let ret = {success: true, url: data.Location};
                    cb(ret);
                }
            });
    }
}
export default S3FileUpload;
