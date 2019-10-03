(function() {
  window.Blabber = function(selector, blabs, options) {
    let self = this;

    self.element = document.querySelector(selector);
    self.blabs = blabs || [];
    self.index = 0;

    // Adds text to the blab, if no text is there
    if(self.element.innerText === "") self.element.innerText = self.blabs[self.index];
    // If text is present adds it to the blabs
    else self.blabs.unshift(self.element.innerText);

    this.element.addEventListener("click", function(event) {
      self.index++; // Shows the next blab
      if(self.index >= self.blabs.length) self.index = 0; // Cycles through the
      self.element.innerText = self.blabs[self.index];
    });
  }
})();
