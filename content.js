/* chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "replaceImages") {
      replaceImages(request.adUrl);
    }
  }); */

  const NUM_PICS = 18;
  
  function replaceAllImages() {
    console.log("infunc");

    const iframes = document.querySelectorAll('iframe[id*=ad]');
    const allElements = document.querySelectorAll('*');
    const custom_types = Array.from(allElements).filter(el => {
      return el.tagName.toLowerCase().includes('-ad-') || el.tagName.toLowerCase().includes('-ads-');
    });
    
    const ads = [... iframes, ...custom_types];
    console.log(custom_types.length);
    ads.forEach((e) => {
      
      const computedStyles = window.getComputedStyle(e);
      
      let img_id = Math.floor((Math.random() * NUM_PICS)+1);
      
      const link = document.createElement("a");
      const img = document.createElement("img");

      img.src = `https://konstantinhoward.github.io/pics/${img_id}.jpeg`;
      link.href = img.src;
      link.target = '_blank';

      img.style.width = computedStyles.width;
      img.style.height = computedStyles.height;
      img.style.position = computedStyles.position;
      img.style.top = computedStyles.top;
      img.style.left = computedStyles.left;
      img.style.margin = computedStyles.margin;
      img.style.padding = computedStyles.padding;
      img.style.display = computedStyles.display;

      link.appendChild(img);

      e.parentNode.insertBefore(link, e);
      e.remove();
    });
  }

  setTimeout(() => { replaceAllImages()
    //window.addEventListener('DOMContentLoaded', replaceAllImages);
  }, 6000);
  console.log("done");


  