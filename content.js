/* chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "replaceImages") {
      replaceImages(request.adUrl);
    }
  }); */

  const NUM_PICS = 18;
  
  function replaceAllImages() {
    console.log("infunc");
    const ads = document.querySelectorAll('img');
    //const ads = document.querySelectorAll('iframe[id*=ad]');
    //const adScripts = document.querySelectorAll('script[src*="ad"], script[src*="advertisement"]');
    //const ads = document.querySelectorAll('div[class*="ad"], div[class*="promo"]');
    
    console.log(ads.length);

    ads.forEach((e) => {
      
      const originalWidth = e.width;
      const originalHeight = e.height;
      
      let img_id = Math.floor(Math.random() * NUM_PICS);
      console.log("insert " + img_id);

      e.src = chrome.runtime.getURL(`images/pics/${img_id}.png`);

      // Apply CSS to make sure the new image fits within the original dimensions
      //e.style.width = `${originalWidth}px`;
      //e.style.height = `${originalHeight}px`;

      // Optionally, you might want to use object-fit to control how the image scales
      e.style.objectFit = 'contain';
    });
  }

  setTimeout(() => { replaceAllImages()
    //window.addEventListener('DOMContentLoaded', replaceAllImages);
  }, 6000);
  console.log("done");