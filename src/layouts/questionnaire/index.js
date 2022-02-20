import { Steps, StepsProvider, useSteps } from "react-step-builder";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

function Questionnaire() {
  return (
    <StepsProvider>
      <MySteps />
    </StepsProvider>
  );
}

function MySteps() {
  const { next, prev, total, current, progress } = useSteps();

  return (
    <DashboardLayout>
      <Steps>
        <div>
          <h1>Step 1</h1>
        </div>
        <div>
          <h1>Step 2</h1>
        </div>
        <div>
          <h1>Step 3</h1>
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
    </DashboardLayout>
  );
}

export default Questionnaire;
