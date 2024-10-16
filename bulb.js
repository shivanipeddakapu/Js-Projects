document.getElementById('light').addEventListener('click', function() {
    const imgElement = document.querySelector('img');
    const currentSrc = imgElement.getAttribute('src');
    
    // Toggle between bulb off and bulb on images
    if (currentSrc === "https://cdn.pixabay.com/photo/2014/11/26/21/09/bulb-546859_1280.jpg") {
        imgElement.setAttribute('src', 'https://cdn.pixabay.com/photo/2014/04/03/10/32/bulb-310821_1280.png'); // Bulb on image
    } else {
        imgElement.setAttribute('src', 'https://cdn.pixabay.com/photo/2014/11/26/21/09/bulb-546859_1280.jpg'); // Bulb off image
    }
});
