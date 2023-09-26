   // Function to style the last word of h1, h2, and h3 tags
   function styleLastWord() {
    // Select all h1, h2, and h3 elements
    const headers = document.querySelectorAll('section h1,section h2,section h3');
  
    headers.forEach(header => {
      // Split the text content into words
      const words = header.textContent.split(' ');
  
      if (words.length > 1) {
        // Get the last word
        const lastWord = words.pop();
  
        // Create a span element to wrap the last word
        const span = document.createElement('span');
        span.textContent = lastWord;
  
        // Replace the last word in the header with the span element
        header.innerHTML = words.join(' ') + ' ' + span.outerHTML;
      }
    });
  }
  
  // Call the function to style the last word when the page loads
  document.addEventListener('DOMContentLoaded', styleLastWord);
  