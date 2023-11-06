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

        // Define security options (policy and signature)
        const clientOptions = {
            security: {
                policy: "YOUR_POLICY_HERE", // Replace with your actual policy
                signature: "YOUR_SIGNATURE_HERE" // Replace with your actual signature
            }
        };

        // Create a new XMLHttpRequest to fetch data from a URL
        const Http = new XMLHttpRequest();
        const url = 'YOUR_DATA_URL_HERE'; // Replace with the actual URL

        Http.open('GET', url);
        Http.send();

        // Open the Filestack picker with the specified options
        const picker = client.picker(options, clientOptions);

        // Handle file upload with the specified API URL
        picker.open().then(function (response) {
            if (response && response.filesUploaded && response.filesUploaded.length > 0) {
                const fileUrl = response.filesUploaded[0].url;
                const fileName = response.filesUploaded[0].filename;

                // You can now send the file URL to your API endpoint (https://www.filestackapi.com/api/file)
                // for further processing or storage.
                console.log('File URL:', fileUrl);
                console.log('File Name:', fileName);
            } else {
                console.error('No files uploaded.');
            }
        });
    });
});
