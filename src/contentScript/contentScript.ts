// content.ts (Content Script)

function getTwitterUsername(): string | null {
  const usernameElement = document.querySelector('div[data-testid="User-Name"] span') as HTMLElement | null;
  if (usernameElement) {
    return usernameElement.innerText.trim();
  }
  return null;
}

// Add a listener for messages sent from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // Check if the received message is "getTwitterData"
  if (request.message === "getTwitterData") {
    // Get the Twitter username
    const twitterUsername = getTwitterUsername();

    // Send the Twitter username as a response
    sendResponse({ username: twitterUsername });
  }
});

// Initialize the scroll direction
// let prevScrollY: number = 0;
let contentScriptPrevScrollY: number = 0;


// Listen for scroll events and send the Twitter username and scroll direction
window.addEventListener('scroll', function() {
  const twitterUsername = getTwitterUsername();
  const currentScrollY = window.scrollY;

    let contentScriptScrollDirection = null;

    if (currentScrollY > contentScriptPrevScrollY) {
        contentScriptScrollDirection = "down";
    } else if (currentScrollY < contentScriptPrevScrollY) {
        contentScriptScrollDirection = "up";
    }


  // Update the previous scroll position
  contentScriptPrevScrollY = currentScrollY;

  // Send the Twitter username and scroll direction to the background script
  chrome.runtime.sendMessage({ message: "scrollTwitterUsername", username: twitterUsername, scrollY: currentScrollY, direction: contentScriptScrollDirection });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // Check if the received message is "scrollDirection"
  if (request.message === "scrollDirection") {
      const scrollDirection = request.direction;
      console.log("Content Script Scroll Direction:", scrollDirection);
  }
});
