import React, { useEffect, useState } from "react";
import ErrorMessage from '../component/Error';
import MyLoader from "../component/MyLoader";
import Header from "../component/Header";
import Fact from "../component/Facts";
import { throttle } from 'lodash';

const Popup = () => {
    const [twitterData, setTwitterData] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const [scrollDirection, setScrollDirection] = useState<string | null>(null);

    useEffect(() => {
      // Get active tab information
      chrome.tabs.query({ active: true, currentWindow: true }, ([activeTab]) => {
          if (activeTab) {
              const tabUrl = activeTab.url || "";
              if (tabUrl.includes("twitter.com")) {
                  // Proceed only if the active tab URL contains "twitter.com"

                  // Fetch Twitter data
                  chrome.tabs.sendMessage(activeTab.id, { message: "getTwitterData" }, (response) => {
                      if (response) {
                          setLoading(false);
                          setTwitterData([response.username] || []);
                      } else {
                          setError(true);
                      }
                  });

                  // Set up a listener for background messages
                  function messageListener(message) {
                      if (message.message === "scrollTwitterUsername") {
                          setTwitterData(prevData => {
                              // Check if the username is not already in the state
                              if (!prevData.includes(message.username)) {
                                  return [...prevData, message.username];
                              }
                              return prevData;
                          });

                          // Set the scroll direction in the state
                          setScrollDirection(message.direction);
                      }
                  }

                  // Add the listener
                  chrome.runtime.onMessage.addListener(messageListener);

                  // Set up throttling for scroll events
                  const throttledScrollHandler = throttle(() => {
                      // Your existing code to fetch Twitter data and update state goes here
                  }, 100); // Adjust the throttle interval as needed (e.g., 300 milliseconds)

                  // Add scroll event listener with throttling
                  window.addEventListener('scroll', throttledScrollHandler);

                  // Clean up the listener and throttled function on component unmount
                  return () => {
                      chrome.runtime.onMessage.removeListener(messageListener);
                      window.removeEventListener('scroll', throttledScrollHandler);
                      throttledScrollHandler.cancel(); // Ensure the throttled function is canceled on unmount
                      setScrollDirection(null); // Clear the scroll direction on unmount
                  };
              } else {
                console.log(error,"error12")

                  setError(true);
                  return;
              }
          } else {
              setError(true);
              return;
          }
      });
  }, []);


   

    return (
      <div className="popup-container">
        <Header header="Twitter Reader" />
        {error ? (
          <ErrorMessage message="Please Go to Twitter Acc or Refresh." />
        ) : (
          <div className="content-container">
            <div className="overflow-y-auto h-full text-container">
              <div className="px-4">
                <div
                  className="prose prose-sm prose-primary mb-4 max-w-none overflow-auto break-words dark:prose-invert"
                  id="main"
                  dir="auto"
                >
                  {loading ? (
                    <div className="loader-container">
                      <MyLoader />
                    </div>
                  ) : (
                    <div>
                      {twitterData.map((username, index) => (
      <Fact key={index} text={`Name: ${username}`} />
    ))}

                      {scrollDirection && (
                        <div className="scroll-direction">
                          Scroll Direction: {scrollDirection}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
};

export default Popup;
