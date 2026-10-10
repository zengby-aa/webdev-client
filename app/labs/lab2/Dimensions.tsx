export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This long sample sentence wraps inside a fixed yellow box without
          changing its declared width or height.
        </div>
        <div id="wd-personal-dimension" className="wd-personal-dimension wd-bg-color-gray">
          My fixed-size box
        </div>
        <div id="wd-personal-dimension-long" className="wd-personal-dimension wd-bg-color-gray">
          My longer sentence uses exactly the same fixed width and height as
          the short sentence above, even when more words are added.
        </div>
      </div>
    </div>
  );
}
