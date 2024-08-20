/* chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "replaceImages") {
      replaceImages(request.adUrl);
    }
  }); */
  
  function replaceAllImages() {
    console.log("infunc");
    const images = document.querySelectorAll('img');
    console.log(images.length);
    images.forEach((img) => {
      const originalWidth = img.width;
      const originalHeight = img.height;

      // Set a temporary src to force the image to load
      img.src = chrome.runtime.getURL("images/icon128.png");

      // Apply CSS to make sure the new image fits within the original dimensions
      img.style.width = `${originalWidth}px`;
      img.style.height = `${originalHeight}px`;

      // Optionally, you might want to use object-fit to control how the image scales
      img.style.objectFit = 'contain';
    });
    console.log("inserting!");
  }

  if (!(document.documentElement instanceof HTMLElement)) {
    return; // Only run on HTML pages
  }
  
  console.log("pre load");
  replaceAllImages();
  console.log("post load");
