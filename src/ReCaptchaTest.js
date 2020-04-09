import React, { useEffect } from "react";
import { loadReCaptcha } from "react-recaptcha-v3";

const ReCaptchaTest = () => {
  useEffect(() => {
    //This is "componentdidmount"
    loadReCaptcha(process.env.RECAPTCHA_SITE_KEY);
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
        <input type="text" value={process.env.REACT_APP_TEST_CODE} />
      </form>
    </div>
  );
};

export default ReCaptchaTest;
