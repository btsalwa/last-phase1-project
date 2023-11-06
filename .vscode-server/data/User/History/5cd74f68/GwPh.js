document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const fileItems = document.getElementById('fileItems');

    uploadButton.addEventListener('click', () => {
        const client = filestack.init('YOUR_API_KEY'); // Replace with your Filestack API key
        client.pick({
            fromSources: ['local_file_system', 'url', 'image_search'],
            maxFiles: 5,
        }).then(response => {
            response.filesUploaded.forEach(file => {
                const listItem = document.createElement('li');
                listItem.innerText = file.filename;
                fileItems.appendChild(listItem);
            });
        }).catch(error => {
            console.error('Filestack upload failed:', error);
        });
    });
});
