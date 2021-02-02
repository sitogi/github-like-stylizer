window.onload = function() {
  setInterval(() => {
    const aTags = document.getElementsByTagName('a');
    for (let i = 0; i < aTags.length; i++) {
      const aTag = aTags.item(i);
      if (aTag.textContent === `!image`) {
        const img = new Image();
        img.src = aTag.getAttribute('href');
        aTag.replaceWith(img);
      }
    }
  }, 2000);
};
