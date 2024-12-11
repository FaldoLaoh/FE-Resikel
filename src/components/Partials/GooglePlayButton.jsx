import React from "react";
import clsx from "clsx"; // Import clsx for conditional classNames

function GooglePlayButton({
  bgColor = "bg-[#007042]", // Default background color
  textColor = "text-white", // Default text color
  className, // Allow additional custom classes to be passed
  ...props // Handle other props like onClick, etc.
}) {
  return (
    <a
      href="#"
      className={clsx(
        "inline-flex items-center gap-4 px-3 py-3 lg:px-6 lg:py-4 rounded-xl", // static classes
        bgColor, // dynamic background color
        textColor, // dynamic text color
        className // allow other classes to be passed via props
      )}
      {...props} // spread other props like onClick, etc.
    >
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current lg:w-9 lg:h-9 w-7 h-7"
      >
        <title>Google Play</title>
        <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
      </svg>
      <h1 className="font-nunito text-xl lg:text-2xl font-bold">Google Play</h1>
    </a>
  );
}

export default GooglePlayButton;
