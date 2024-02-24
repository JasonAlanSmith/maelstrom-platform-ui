import MPButton from '../ui/mpbutton.tsx';

function Landing() {
  return (
    <div className="landing">
      <div className="row">
        <div className="col welcome">
          <h2>Welcome to the Maelstrom Platform.</h2>
        </div>
      </div>
      <div className="row">
        <div className="col instruction">
          <h3>
            Please sign in or create an account to continue.
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col signup-buttons">
          <MPButton
            css="signup-button-width"
            route=""
            caption="Sign In"
          />
        </div>
        <div className="col signup-buttons">
          <MPButton
            css="signup-button-width"
            route="/signup/account"
            caption="Sign Up"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
