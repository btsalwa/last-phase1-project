document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const fileItems = document.getElementById('fileItems');

	const apikey = 'Aq8UYLMeXR2i6lyeC9twez';

	

	

    uploadButton.addEventListener('click', () => {
        
        const client = filestack.init(apikey);  // Replace with your Filestack API key
        client.on('upload.error', (filestackError) => {
            console.log(filestackError);
          });
        const options ={

 	        onUploadDone: (res) => console.log(res), 
             
	        "accept": [
		        ".pdf",
		        "image/jpeg",
		        "image/png",
		        "image/*",
		        "video/*",
		        "audio/*",
		        "application/*"
	        ],
	        "fromSources": [

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
	        "transformations": {
		        "crop": true,
		        "circle": true,
		        "rotate": false
	        },
	        "maxFiles": 10,
	        "minFiles": 1,
	        "maxSize": 10000000000,
	        "imageDim": [
		        500,
		        600
	        ]
            
        }
        const picker = client.picker(options); 
        picker.open();
    });

});


