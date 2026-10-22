export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  const courseTitle = "Web Development";
  const weekNumber = 4;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  let isCourseTitle = typeof courseTitle;
  let isWeekNumber = typeof weekNumber;
  let isSampleCount = typeof sampleCount;
  let isSampleLabel = typeof sampleLabel;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}
      <br />
      floatingPointNumber = {floatingPointNumber}
      <br />
      stringVariable = {stringVariable}
      <br />
      booleanVariable = {booleanVariable + ""}
      <br />
      isNumber = {isNumber}
      <br />
      isString = {isString}
      <br />
      isBoolean = {isBoolean}
      <br />
      courseTitle = {courseTitle}
      <br />
      isCourseTitle = {isCourseTitle}
      <br />
      weekNumber = {weekNumber}
      <br />
      isWeekNumber = {isWeekNumber}
      <br />
      sampleCount = {sampleCount}
      <br />
      isSampleCount = {isSampleCount}
      <br />
      sampleLabel = {sampleLabel}
      <br />
      isSampleLabel = {isSampleLabel}
      <hr />
    </div>
  );
}
