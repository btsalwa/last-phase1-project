document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const fileItems = document.getElementById('fileItems');

    uploadButton.addEventListener('click', () => {
        const apikey = 'Aq8UYLMeXR2i6lyeC9twez'; // Replace with your Filestack API key
        const apiUrl = 'https://www.filestackapi.com/api/file'; // The API URL

        const client = filestack.init(apikey);

        // Set up event handler for upload errors
        client.on('upload.error', (filestackError) => {
            console.log('Filestack error:', filestackError);
        });

        // Define options for the Filestack picker
        const options = {
            onUploadDone: (res) => console.log(res),
            accept: [
                ".pdf",
                "image/jpeg",
                "image/png",
                "image/*",
                "video/*",
                "audio/*",
                "application/*"
            ],
            fromSources: [
                "local_file_system",
                "url",
                "local_file_system",
                "facebook",
                "instagram",
                "audio",
                "video",
                "webcam",
                "dropbox"
            ],
            transformations: {
                crop: true,
                circle: true,
                rotate: false
            },
            maxFiles: 10,
            minFiles: 1,
            maxSize: 10000000000,
            imageDim: [500, 600]
        };

    });
});
