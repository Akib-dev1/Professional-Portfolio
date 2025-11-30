import React from "react";

const VideoIntro = () => {
  return (
    <div>
      <h1 className="font-bold text-xl mb-1.5">Video Introduction</h1>
      <div className="h-0.5 w-15 -translate-x-0.5 rounded-full bg-[#444444] mb-4 md:mb-12">
        <div className="w-1/3 rounded-full bg-[#007CED] h-full"></div>
      </div>
      <div className="flex justify-center">
        <iframe
          width="800"
          height="500"
          src="https://www.youtube.com/embed/WW4dLBhbUc4?si=k1u5f2CQObuzhLa9"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="max-w-9/12 max-md:max-w-11/12 max-h-96"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoIntro;
