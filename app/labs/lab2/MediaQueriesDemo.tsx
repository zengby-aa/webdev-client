import "./MediaQueriesDemo.css";

export default function MediaQueriesDemo() {
  return (
    <div className="wd-media-queries-demo">
      <h2>Media Query Demo</h2>
      <p>
        This demo uses CSS media queries to change colors based on screen width:
      </p>
      <ul>
        <li className="wd-mq-rule-default">
          Base fallback: White text on Green background (when no range matches)
        </li>
        <li className="wd-mq-rule-750">
          750px to below 1000px: Black text on Yellow background
        </li>
        <li className="wd-mq-rule-1000">
          1000px to below 1250px: White text on Blue background
        </li>
        <li className="wd-mq-rule-1250">
          1250px to below 1500px: White text on Red background
        </li>
        <li className="wd-mq-rule-ai">
          749px and below: White text on Purple background (AI sample)
        </li>
        <li className="wd-mq-rule-personal">
          1500px and above: White text on Dark cyan background (my breakpoint)
        </li>
      </ul>
    </div>
  );
}
