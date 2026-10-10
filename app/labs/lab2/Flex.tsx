import "./index.css";

export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-75px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-flex-grow-1">Growing left</div>
        <div className="wd-bg-color-blue wd-fg-color-white wd-width-75px">Fixed width</div>
      </div>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-75px">Fixed left</div>
        <div className="wd-bg-color-blue wd-fg-color-white wd-flex-grow-1">Growing middle</div>
        <div className="wd-bg-color-red wd-width-75px">Fixed right</div>
      </div>
      <div id="wd-personal-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-gray wd-flex-grow-1">My growing column</div>
        <div className="wd-bg-color-green wd-fg-color-white wd-width-75px">My fixed column</div>
      </div>
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-75px">Fixed width</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Content column</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">Sample growing column</div>
      </div>
    </div>
  );
}

