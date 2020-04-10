import React from "react";
import { ReCaptcha } from "react-recaptcha-v3";

const ReCaptchaTest = (props) => {
  const mySitekey = props.recaptchaKey;

  const submitScript = () => {
    // This works
    //alert(`submitted! ${props.recaptchaKey}`);
  };

  const verifyCallback = (recaptchaToken) => {
    alert(recaptchaToken, "<= Recaptcha token!");
  };

  return (
    <div>
      <form>
        Please submit your e-mail address:
        <br />
        <input type="text" defaultValue="This works" />
        <br />
        <button value="submit" onClick={submitScript}>
          Click me!
        </button>
        <ReCaptcha
          sitekey={mySitekey}
          action="reacaptchaAction"
          verifyCallback={verifyCallback}
        />
      </form>
    </div>
  );
};

export default ReCaptchaTest;
