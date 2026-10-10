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
    <div id="wd-assignments-editor" className="max-w-3xl text-sm text-neutral-700">
      <label htmlFor="wd-name" className="mb-2 block">Assignment Name</label>
      <input key={aid} id="wd-name" className="mb-5 block w-full rounded border border-neutral-300 bg-white px-3 py-2" defaultValue={assignmentName} />




      <textarea
        id="wd-description"
        rows={10}
        aria-label="Description"
        className="mb-5 block w-full resize-y rounded border border-neutral-300 bg-white p-3 leading-6"
        defaultValue={`The assignment is available online.

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kambaz application
- Links to all relevant source code repositories

The Kambaz application should include a link to navigate back to the landing page.`}
      />

      <div className="space-y-5 [&_select]:w-full [&_select]:rounded [&_select]:border [&_select]:border-neutral-300 [&_select]:bg-white [&_select]:px-3 [&_select]:py-2">
        
          <div className="grid grid-cols-[minmax(0,28%)_minmax(0,1fr)] items-start gap-4">
            <div className="pt-2 text-right">
              <label htmlFor="wd-points">Points</label>
            </div>
            <div className="min-w-0">
              <input className="box-border w-full rounded border border-neutral-300 bg-white px-3 py-2" id="wd-points" type="number" defaultValue={100} />
            </div>
          </div>
          <div className="grid grid-cols-[minmax(0,28%)_minmax(0,1fr)] items-start gap-4">
            <div className="pt-2 text-right"><label htmlFor="wd-group">Assignment Group</label></div>
            <div className="min-w-0">
              <select id="wd-group" defaultValue="ASSIGNMENTS">
                <option>ASSIGNMENTS</option>
                <option>QUIZZES</option>
                <option>EXAMS</option>
                <option>PROJECT</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-[minmax(0,28%)_minmax(0,1fr)] items-start gap-4">
            <div className="pt-2 text-right"><label htmlFor="wd-display-grade-as">Display Grade as</label></div>
            <div className="min-w-0">
              <select id="wd-display-grade-as" defaultValue="Percentage">
                <option>Percentage</option>
                <option>Points</option>
                <option>Complete/Incomplete</option>
                <option>Letter Grade</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-[minmax(0,28%)_minmax(0,1fr)] items-start gap-4">
            <div className="pt-2 text-right"><label htmlFor="wd-submission-type">Submission Type</label></div>
            <div className="min-w-0">
  <fieldset className="m-0 min-w-0 rounded border border-neutral-300 p-4 [&_h4]:font-semibold [&_input]:mb-4 [&_input]:mr-2">
    <select id="wd-submission-type" defaultValue="Online">
      <option>Online</option>
      <option>No Submission</option>
      <option>On Paper</option>
      <option>External Tool</option>
    </select>

    <h4>Online Entry Options</h4>

    <input type="checkbox" id="wd-text-entry" />
    <label htmlFor="wd-text-entry">Text Entry</label><br />
    <br />

    <input type="checkbox" id="wd-website-url" defaultChecked />
    <label htmlFor="wd-website-url">Website URL</label><br />
    <br />

    <input type="checkbox" id="wd-media-recordings" />
    <label htmlFor="wd-media-recordings">Media Recordings</label><br />
    <br />

    <input type="checkbox" id="wd-student-annotation" />
    <label htmlFor="wd-student-annotation">Student Annotation</label><br />
    <br />

    <input type="checkbox" id="wd-file-upload" />
    <label htmlFor="wd-file-upload">File Uploads</label><br />
</fieldset>
</div>
          </div>
          <div className="grid grid-cols-[minmax(0,28%)_minmax(0,1fr)] items-start gap-4">
            <div className="pt-2 text-right">Assign</div>
            <div className="min-w-0">
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
            </div>
          </div>
          <div className="grid grid-cols-[minmax(0,28%)_minmax(0,1fr)] items-start gap-4">
            
            <div className="col-span-2"><EditorActions cid={cid} /></div>
          </div>
        
      </div>
    </div>
  );
}


