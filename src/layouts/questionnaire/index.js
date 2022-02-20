import { Steps, useSteps, StepsProvider } from "react-step-builder";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

export default function Questionnaire() {
  const { prev, next, total, current, progress } = useSteps();

  return (
    <DashboardLayout>
      <StepsProvider>
        <div className="steps_wrapper">
          <h1>React Step Builder v3</h1>
          <Steps>
            <div className="step">
              <h1>Step 1</h1>
              <p>
                <b>React Step Builder</b> is a UI-agnostic, unopinionated step-by-step interface
                builder for React applications.
              </p>
              <ul>
                <li>
                  In this example, buttons are used for navigation. But you can use any elements you
                  want. Or you can call the next and prev methods on anotlly up to you!
                </li>
                <li>The order you write your components becomes the order for the steps.</li>
                <li>
                  With version 3, React Step Builder does not provide the methods and props for
                  global state management. You get to decide whatever you want to use to control
                  your state!
                </li>
                <li>
                  Version 3 is designed with <i>Composition over Inheritance</i> principle in mind,
                  which makes creating and managing your steps eaiser than before. No
                  special-powered components. Just simple React.
                </li>
              </ul>
            </div>
            <div className="step">
              <h1>Step 2</h1>
              <p>
                Thian be shared across steps easily. Fill up the form and you will see them in the
                next step!
              </p>
              <div className="form" />
            </div>
            <div className="step">
              <h1>Step 3</h1>
              <p>
                No more magical state handling methods or props receiving. All the data you entered
                is here because App component is still alive.
              </p>
              <div className="form_data">
                <p>First Name</p>
                <p>Last Name: </p>
                <p>Email:</p>
              </div>
            </div>
            <div className="step">
              <h1>Step 4</h1>
              <p>This is the final step.</p>
              <p>Thanks for checking out React Step Builder!</p>
              <p>
                Please read{" "}
                <a
                  href="https://www.npmjs.com/package/react-step-builder"
                  target="_blank"
                  rel="noreferrer"
                >
                  the documentation
                </a>{" "}
                for all the features. If you want to contribute, check out{" "}
                <a
                  href="https://github.com/sametweb/react-step-builder"
                  target="_blank"
                  rel="noreferrer"
                >
                  the GitHub repository
                </a>
                .
              </p>
            </div>
          </Steps>
          <div className="navigation">
            <button type="button" onClick={prev}>
              Prev
            </button>
            <button type="button" onClick={next}>
              Next
            </button>
          </div>
          <div className="steps_data">
            <div>Total Steps: {total}</div>
            <div>Current Step: {current}</div>
            <div>Progress: {progress * 100}%</div>
          </div>
        </div>
      </StepsProvider>
    </DashboardLayout>
  );
}
