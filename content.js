/* chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "replaceImages") {
      replaceImages(request.adUrl);
    }
  }); */

  const NUM_PICS = 21;
  
  function replaceAllImages() {
    console.log("infunc");
    const images = document.querySelectorAll('img');
    console.log(images.length);
    images.forEach((img) => {
      
      const originalWidth = img.width;
      const originalHeight = img.height;

      let img_id = Math.floor(Math.random() * NUM_PICS)
      img.src = chrome.runtime.getURL(`images/pics/${img_id}.png`);

      // Apply CSS to make sure the new image fits within the original dimensions
      img.style.width = `${originalWidth}px`;
      img.style.height = `${originalHeight}px`;

      // Optionally, you might want to use object-fit to control how the image scales
      img.style.objectFit = 'contain';
    });
  }

  window.addEventListener('load', replaceAllImages)
  console.log("done")