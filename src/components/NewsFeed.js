import React from "react";
import "./NewsFeed.css";

const NewsFeed = () => {
  return (
    <div className="newsfeed-container">
      <h4 className="text-center">This is the News Feed Component</h4>
      <p>
        Here is some sample news content to display in the news feed. Stay
        updated with the latest information and trends!
      </p>
      <p>
        Breaking News: Major event happening in the city. Stay tuned for more
        updates.
      </p>
      <p>
        Weather Update: Expect sunny skies throughout the week with mild
        temperatures.
      </p>
    </div>
  );
};

export default NewsFeed;
