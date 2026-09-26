export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
          <tr>
            <td>Q4</td>
            <td align="center">TypeScript</td>
            <td align="center">2/24/21</td>
            <td align="right">88</td>
            </tr>
            <tr>
                <td>Q5</td>
                <td align="center">React Components</td>
                <td align="center">3/3/21</td>
                <td align="right">92</td>
            </tr>
            <tr>
                <td>Q6</td>
                <td align="center">Props and State</td>
                <td align="center">3/10/21</td>
                <td align="right">87</td>
            </tr>
            <tr>
                <td>Q7</td>
                <td align="center">React Hooks</td>
                <td align="center">3/17/21</td>
                <td align="right">93</td>
            </tr>
            <tr>
                <td>Q8</td>
                <td align="center">Next.js Routing</td>
                <td align="center">3/24/21</td>
                <td align="right">91</td>
            </tr>
            <tr>
                <td>Q9</td>
                <td align="center">Forms and Events</td>
                <td align="center">3/31/21</td>
                <td align="right">89</td>
            </tr>
            <tr>
                <td>Q10</td>
                <td align="center">API Requests</td>
                <td align="center">4/7/21</td>
                <td align="right">96</td>
            </tr>
        </tbody>    
        <tfoot>
        <tr>
            <td colSpan={3}>Average</td>
            <td align="right">90.6</td>
        </tr>
        </tfoot>
      </table>

    <h4>My Workout Plan</h4>
    <table id="wd-your-table" border={1} width="100%">
        <thead>
            <tr>
            <th>Day</th>
            <th>Workout</th>
            <th>Time</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td align="center">Monday</td>
            <td>Back Training</td>
            <td align="right">6:00</td>
            </tr>
            <tr>
            <td align="center">Wednesday</td>
            <td>Leg Day</td>
            <td align="right">15:00</td>
            </tr>
            <tr>
            <td align="center">Friday</td>
            <td>Cardio</td>
            <td align="right">18:00</td>
            </tr>
        </tbody>
    </table>
    </div>
  );
}