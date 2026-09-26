import TextFields from "./TextFields";
import Textarea from "./Textarea";
import RadioButtons from "./RadioButtons";
import Checkboxes from "./Checkboxes";
import Dropdowns from "./Dropdowns";
import OtherFieldTypes from "./OtherFieldTypes";
import RadioLabelPatterns from "./RadioLabelPatterns";
import Buttons from "./Buttons";
import YourForm from "./YourForm";
export default function Forms() {
  return (
    <div id="wd-forms">
      <h4>Form Elements</h4>
      <form id="wd-text-fields">
        <TextFields />
        <Textarea />
        <RadioButtons />
        <OtherFieldTypes />
        <RadioLabelPatterns />
        <Checkboxes /> 
        <Dropdowns />
        <Buttons />
        
        {/* add the next form components here */}
      </form>
      <YourForm />
    </div>
  );
}