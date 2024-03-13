import fs from 'fs'
import { google } from 'googleapis'
import apikeys from '../../apikey.json'

const SCOPE = ['https://www.googleapis.com/auth/drive']

async function authorize() {
    const jwtClient = new google.auth.JWT(
        apikeys.client_email,
        "",
        apikeys.private_key,
        SCOPE
    );
    await jwtClient.authorize();
    return jwtClient;
}

async function getFile(fileId: string, destination: string) {
    try {
        const auth = await authorize();
        const drive = google.drive({ version: 'v3', auth });
        const dest = fs.createWriteStream(destination);

        const response = await drive.files.get(
            { fileId, alt: 'media' },
            { responseType: 'stream' }
        );

        response.data
            .on('end', () => {
                console.log('File downloaded successfully');
            })
            .on('error', err => {
                console.error('Error downloading file:', err);
                fs.unlinkSync(destination);            })
            .pipe(dest);
    } catch (error) {
        console.error('Error downloading file:', error);
    }
}