import React, { useEffect } from "react";
import { loadReCaptcha } from "react-recaptcha-v3";

const ReCaptchaTest = () => {
  useEffect(() => {
    //This is "componentdidmount"
  });

  const submitScript = () => {
    alert("submitted!");
  };

  return (
    <div>
      <form>
        Please submit your e-mail address:
        <br />
        <input type="text" />
        <br />
        <button value="submit" onClick={submitScript}>
          Click me!
        </button>
      </form>
    </div>
  );
};

export default ReCaptchaTest;
