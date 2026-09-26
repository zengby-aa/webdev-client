export default function YourForm() {
  return (
    <form id="wd-your-form">
      <h4>Student Profile</h4>

      <fieldset>
        <legend>Personal Information</legend>

        <label htmlFor="wd-your-first-name">First name:</label>
        <input
          id="wd-your-first-name"
          name="firstName"
          type="text"
          placeholder="First name"
          defaultValue="Baoyuan"
        />
        <br />

        <label htmlFor="wd-your-last-name">Last name:</label>
        <input
          id="wd-your-last-name"
          name="lastName"
          type="text"
          placeholder="Last name"
          defaultValue="Zeng"
        />
        <br />

        <label htmlFor="wd-your-student-id">Student ID:</label>
        <input
          id="wd-your-student-id"
          name="studentId"
          type="text"
          placeholder="Student ID"
          defaultValue="002833266"
        />
        <br />

        <label htmlFor="wd-your-bio">Why I am taking this course:</label>
        <br />
        <textarea
          id="wd-your-bio"
          name="bio"
          cols={50}
          rows={4}
          placeholder="Describe yourself and what you hope to learn."
          defaultValue="I want to learn web development and become a full-stack developer. And I want to create a project for work."
        />
      </fieldset>

      <fieldset>
        <legend>Class Standing</legend>

        <input
          id="wd-your-freshman"
          type="radio"
          name="your-standing"
          value="freshman"
        />
        <label htmlFor="wd-your-freshman">Freshman</label>
        <br />

        <input
          id="wd-your-sophomore"
          type="radio"
          name="your-standing"
          value="sophomore"
        />
        <label htmlFor="wd-your-sophomore">Sophomore</label>
        <br />

        <input
          id="wd-your-junior"
          type="radio"
          name="your-standing"
          value="junior"
        />
        <label htmlFor="wd-your-junior">Junior</label>
        <br />

        <input
          id="wd-your-senior"
          type="radio"
          name="your-standing"
          value="senior"
        />
        <label htmlFor="wd-your-senior">Senior</label>
        <br />

        <input
          id="wd-your-graduate"
          type="radio"
          name="your-standing"
          value="graduate"
          defaultChecked
        />
        <label htmlFor="wd-your-graduate">Graduate</label>
      </fieldset>

      <fieldset>
        <legend>Enrollment Status</legend>

        <input
          id="wd-your-full-time"
          type="radio"
          name="your-enrollment"
          value="full-time"
          defaultChecked
        />
        <label htmlFor="wd-your-full-time">Full-time</label>
        <br />

        <input
          id="wd-your-part-time"
          type="radio"
          name="your-enrollment"
          value="part-time"
        />
        <label htmlFor="wd-your-part-time">Part-time</label>
      </fieldset>

      <fieldset>
        <legend>Interests</legend>

        <input
          id="wd-your-interest-js"
          type="checkbox"
          name="interests"
          value="javascript"
          defaultChecked
        />
        <label htmlFor="wd-your-interest-js">JavaScript</label>
        <br />

        <input
          id="wd-your-interest-react"
          type="checkbox"
          name="interests"
          value="react"
          defaultChecked
        />
        <label htmlFor="wd-your-interest-react">React</label>
        <br />

        <input
          id="wd-your-interest-design"
          type="checkbox"
          name="interests"
          value="ux-design"
        />
        <label htmlFor="wd-your-interest-design">UI Design</label>
      </fieldset>

      <fieldset>
        <legend>Academic Goals</legend>

        <label htmlFor="wd-your-major">Major:</label>
        <select
          id="wd-your-major"
          name="major"
          defaultValue="computer-science"
        >
          <option value="computer-science">Computer Science</option>
          <option value="math">Information Systems</option>
          <option value="data-science">Data Science</option>
          <option value="other">Other</option>
        </select>
        <br />

        <label htmlFor="wd-your-topics">Topics to explore:</label>
        <br />
        <select
          id="wd-your-topics"
          name="topics"
          multiple
          size={4}
          defaultValue={["html", "react"]}
        >
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">JavaScript</option>
          <option value="react">React</option>
        </select>
        <br />

        <label htmlFor="wd-your-email">School email:</label>
        <input
          id="wd-your-email"
          name="email"
          type="email"
          placeholder="you@northeastern.edu"
          defaultValue="zeng.bao@northeastern.edu"
        />
        <br />

        <label htmlFor="wd-your-graduation">Expected graduation year:</label>
        <input
          id="wd-your-graduation"
          name="graduationYear"
          type="number"
          min={2026}
          max={2040}
          defaultValue={2027}
        />
        <br />

        <label htmlFor="wd-your-start-date">Program start date:</label>
        <input
          id="wd-your-start-date"
          name="startDate"
          type="date"
          defaultValue="2024-09-01"
        />
        <br />

        <label htmlFor="wd-your-excitement">
          Excitement about this major (0–10):
        </label>
        <input
          id="wd-your-excitement"
          name="excitement"
          type="range"
          min={0}
          max={10}
          step={1}
          defaultValue={8}
        />
      </fieldset>

      <button id="wd-your-save" type="submit">
        Save
      </button>
      <button id="wd-your-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}