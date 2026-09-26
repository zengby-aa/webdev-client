export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://www.bilibili.com/" id="wd-your-link">
        Bilibili
      </a>
      <br />
        <a
        href="https://github.com/zengby-aa"
        target="_blank"
        rel="noreferrer"
        id="wd-your-github"
        >
        GitHub (new tab)
        </a>
        <br />

        <a
        id="wd-ai-link"
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        target="_blank"
        rel="noreferrer"
        >
        MDN: table element
        </a>
        <br />
    </>
  );
}