function handleSearch(event) {
    event.preventDefault(); // Prevent default
    const website = document.getElementById('websiteSelect').value;
    const searchName = document.getElementById('searchName').value;

    // Show the loading bar
    const loadingBar = document.getElementById('loadingBar');
    loadingBar.style.transform = 'scaleX(1)';

    const urlMap = {
        google: `https://www.google.com/search?q=${encodeURIComponent(searchName)}`,
        instagram: `https://www.instagram.com/${encodeURIComponent(searchName)}`,
        linkedin: `https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(searchName)}`,
        googlemaps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchName)}`,
        facebook: `https://www.facebook.com/search?q=${encodeURIComponent(searchName)}`,
        youtube: `https://www.youtube.com/search?q=${encodeURIComponent(searchName)}`,
        chatgpt: `https://www.bing.com/chat?q=${encodeURIComponent(searchName)}`,
        amazon: `https://www.amazon.com/s?k=${encodeURIComponent(searchName)}`,
        gtranslate: `https://translate.google.com/?source=hello&sl=auto&tl=hi&text=${encodeURIComponent(searchName)}&op=translate`
    };

    const url = urlMap[website];
    if (url) {
        setTimeout(() => {
            window.location.href = url; // search URL
            loadingBar.style.transform = 'scaleX(0)'; // Hide loading bar
        }, 500); // time
    }
    document.getElementById('searchName').value = ''; // Clear the search field
}