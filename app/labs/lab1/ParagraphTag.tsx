export default function ParagraphTag() {
  return (
    <div id="wd-p-tag">
      <h4>Paragraph Tag</h4>
      <p id="wd-p-1">...</p>
      This is the first paragraph. The paragraph tag is used to format
      vertical gaps between long pieces of text like this one.
      This is the second paragraph. Even though there is a deliberate white
      gap between the paragraph above and this paragraph, by default browsers
      render them as one contiguous piece of text as shown here on the right.
      This is the third paragraph. Wrap each paragraph with the paragraph tag
      to tell browsers to render the gaps.
      <p id="wd-ai-p">
        The p element creates a separate block of text. Browsers give paragraphs top and bottom margins by default, creating vertical spacing.
      </p>
      <p id="wd-p-your-1">My name is Baoyuan Zeng. I am from China.</p>
      <p id="wd-p-your-2">I want to learn web development. in this course.</p>
    </div>
  );
}