import AnchorTag from "./AnchorTag";
import Forms from "./forms/Forms";
import RadioLabelPatterns from "./forms/RadioLabelPatterns";
import HeadingTags from "./HeadingTags";
import HighlightedBox from "./HighlightedBox";
import HighlightedParagraph from "./HighlightedParagraph";
import Images from "./Images";
import ListTags from "./ListTags";
import ParagraphTag from "./ParagraphTag";
import Tables from "./Tables";  

export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <HeadingTags />
      <ParagraphTag />
      <ListTags />
      <Tables />
      <Images />
      <Forms />
      <HighlightedParagraph />
      <HighlightedBox />
      <AnchorTag />
    
      {/* do the next exercise here */}
    </div>
  );
}