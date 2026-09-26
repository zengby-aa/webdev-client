import EditorActions from "./EditorActions";
import AssignTo from "./AssignTo";
import UntilInput from "./UntilInput";
import styles from "./AssignSection.module.css";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid, aid } = await params;
  const assignmentNames: Record<string, string> = {
    A1: "A1 - ENV + HTML",
    A2: "A2 - CSS + TAILWIND",
    A3: "A3 - JAVASCRIPT + REACT",
  };
  const assignmentName = assignmentNames[aid] ?? aid;
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input key={aid} id="wd-name" defaultValue={assignmentName} />
      <br />
      <br />

      <br />
      <textarea
        id="wd-description"
        rows={10}
        cols={60}
        defaultValue={`The assignment is available online.

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kambaz application
- Links to all relevant source code repositories

The Kambaz application should include a link to navigate back to the landing page.`}
      />
      <br />
      <table className={styles.editorTable}>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right"><label htmlFor="wd-group">Assignment Group</label></td>
            <td>
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECT</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right"><label htmlFor="wd-display-grade-as">Display Grade as</label></td>
            <td>
              <select id="wd-display-grade-as" defaultValue="Percentage">
                <option>Percentage</option>
                <option>Points</option>
                <option>Complete/Incomplete</option>
                <option>Letter Grade</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top"><label htmlFor="wd-submission-type">Submission Type</label></td>
            <td>
  <fieldset>
    <select id="wd-submission-type" defaultValue="Online">
      <option>Online</option>
      <option>No Submission</option>
      <option>On Paper</option>
      <option>External Tool</option>
    </select>

    <h4>Online Entry Options</h4>

    <input type="checkbox" id="wd-text-entry" />
    <label htmlFor="wd-text-entry">Text Entry</label>
    <br />

    <input type="checkbox" id="wd-website-url" defaultChecked />
    <label htmlFor="wd-website-url">Website URL</label>
    <br />

    <input type="checkbox" id="wd-media-recordings" />
    <label htmlFor="wd-media-recordings">Media Recordings</label>
    <br />

    <input type="checkbox" id="wd-student-annotation" />
    <label htmlFor="wd-student-annotation">Student Annotation</label>
    <br />

    <input type="checkbox" id="wd-file-upload" />
    <label htmlFor="wd-file-upload">File Uploads</label>
</fieldset>
</td>
          </tr>
          <tr>
            <td align="right" valign="top">Assign</td>
            <td>
              <div className={styles.panel} role="group" aria-label="Assign">
                <AssignTo key={aid} />
                <div className={styles.field}>
                  <label htmlFor="wd-due-date">Due</label>
                  <input id="wd-due-date" type="datetime-local" defaultValue="2024-05-13T23:59" />
                </div>
                <div className={styles.dates}>
                  <div className={styles.field}>
                    <label htmlFor="wd-available-from">Available from</label>
                    <input id="wd-available-from" type="datetime-local" defaultValue="2024-05-06T00:00" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="wd-available-until">Until</label>
                    <UntilInput key={aid} />
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td />
            <td><EditorActions cid={cid} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
