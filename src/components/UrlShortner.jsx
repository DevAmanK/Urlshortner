import React, { useState } from "react";

const UrlShortner = () => {
  const [inputValue, setInputValue] = useState("");
  const [shortUrl, setShortenedUrl] = useState("");

  function createShortYouTubeUrl(fullUrl) {
    const videoId = fullUrl.split("v=")[1]?.split("&")[0];
    const shortUrl = `https://youtu.be/${videoId}`;
    setShortenedUrl(shortUrl);
  }

  let handleInput = (e) => {
    setInputValue(e.target.value);
  };

  let shorten = (url) => {
    createShortYouTubeUrl(url);
  };

  let submithandler = (e) => {
    e.preventDefault();
    setInputValue("");
  };

  return (
    <div className="min-h-screen minw-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 w-full max-w-md text-center shadow-md rounded">
        <h1 className="text-2xl font-medium mb-6">Youtube URL Shortner</h1>
        <form onSubmit={submithandler} className="space-y-4">
          <label htmlFor="url" className="block text-left font-medium">
            Enter the URL
          </label>
          <input
            className="w-full border border-gray-500/20 px-2 py-3 rounded outline-none"
            type="text"
            placeholder="https://www.youtube.com/watch?v=example"
            onChange={handleInput}
            value={inputValue}
          />
          <button
            onClick={() => shorten(inputValue)}
            className="bg-blue-600 hover:bg-blue-700 text-white w-full px-4 py-2 text-lg rounded"
          >
            Short Url
          </button>
        </form>
        {shortUrl && (
          <div>
            <p className="mt-5 text-xl text-orange-600">Shortened URL:</p>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium underline break-words"
            >
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default UrlShortner;
