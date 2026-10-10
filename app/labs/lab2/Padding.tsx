export default function Padding() {
  return (
    <div id="wd-css-paddings">
      <h2>Padding</h2>
      <div className="wd-padded-top-left wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
        Padded top left
      </div>
      <div className="wd-padded-bottom-right wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
        Padded bottom right
      </div>
      <div className="wd-padding-fat wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
        Padded all around
      </div>
      <div
        id="wd-ai-padded"
        className="wd-padded-top-only wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow"
      >
        Sample box with 40px of top padding only
      </div>
      <div
        id="wd-personal-padded"
        className="wd-padded-left-only wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow"
      >
        My box with 40px of left padding only
      </div>
    </div>
  );
}
