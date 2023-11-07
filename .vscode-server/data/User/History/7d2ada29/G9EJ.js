document.addEventListener('DOMContentLoaded', () => {
    
    const uploadButton = document.getElementById('uploadButton');
    const fileItems = document.getElementById('fileItems');

	const client = filestack.init('Aq8UYLMeXR2i6lyeC9twez');  // Replace with your Filestack API key

    uploadButton.addEventListener('click', () => {
		const options = {
            onUploadDone: (response) => {
                // This function is called when a file is successfully uploaded
                console.log('File uploaded:', response);

                // You can access the uploaded file information in the 'response' object
                const uploadedFile = response.filesUploaded[0];
                const fileName = uploadedFile.filename;
                const fileURL = uploadedFile.url;

                // Add the file information to the list
                const listItem = document.createElement('li');
                listItem.innerText = `File Name: ${fileName}, File URL: ${fileURL}`;
                fileItems.appendChild(listItem);
            },
                // ... your existing options
        };
		const picker = client.picker(options);
        picker.open();
    

		
       
        
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
				
			};

        
        
			const clientOptions = {
				security: {
					policy: "eyJleHBpcnkiOiAxNTQ2ODk5NDI4LCAiY2FsbCI6IFsicmVhZCIsICJzdGF0IiwgImNvbnZlcnQiLCAicGljayIsICJzdG9yZSJdfQ==",
					signature: "1fed86599156df046f925e0f773866654a4fc209b0b85b173b5d8088e898b685"
				}
        }
			const Http = new XMLHttpRequest();
			const url='https://cdn.filestackcontent.com/cache=expiry:1523595600/bfTNCigRLq0QMOrsFKzb?policy=ewogICJleHBpcnkiOiAxNTIzNTk1NjAwLAogICJjYWxsIjogWyJyZWFkIiwgImNvbnZlcnQiXSwKICAiaGFuZGxlIjogImJmVE5DaWdSTHEwUU1PcnNGS3piIgp9&signature=5191e4c6c304c08296eab217ee05236a5bacaab9b581b535d5922a41079b77e0';
				Http.open('GET', url);
				Http.send();
			

			const picker = client.picker(options); 
			picker.open();
    });

});