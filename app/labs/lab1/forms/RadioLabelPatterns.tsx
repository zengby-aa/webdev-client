export default function RadioLabelPatterns() {
  return (
    <>
      {/* Sibling label + htmlFor */}
      <h5>Label next to the input (uses htmlFor)</h5>
      <input type="radio" name="radio-beside" id="wd-radio-beside-yes" />
      <label htmlFor="wd-radio-beside-yes">Yes</label>
      <br />
      <input type="radio" name="radio-beside" id="wd-radio-beside-no" />
      <label htmlFor="wd-radio-beside-no">No</label>
      <br />

    {/* Wrapping label — no htmlFor needed */}
    <h5>Label wrapping the input (no htmlFor needed)</h5>
    <label>
    <input type="radio" name="radio-wrap" /> Yes
    </label>
    <br />
    <label>
    <input type="radio" name="radio-wrap" /> No
    </label>
    <br />

    {/* Separate placement still works with htmlFor */}
    <h5>Separate label and input (not side by side)</h5>
    <h5>With htmlFor, the caption and control do not have to sit next to each other:</h5>
    <label htmlFor="wd-radio-distant-a">Option A</label>
    {/* ... elsewhere in the layout ... */}
    <input type="radio" name="radio-distant" id="wd-radio-distant-a" />
    <br />
    <label htmlFor="wd-radio-distant-a">Option B</label>
    
    {/* ... elsewhere in the layout ... */}
    <input type="radio" name="radio-distant" id="wd-radio-distant-a" />
    <br />
</>
);
}``