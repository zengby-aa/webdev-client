import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-neutral-50">
            <td className="p-2 text-nowrap">
              <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
              Tony Stark
            </td>
            <td className="p-2">001234561S</td>
            <td className="p-2">S101</td>
            <td className="p-2">STUDENT</td>
            <td className="p-2">2020-10-01</td>
            <td className="p-2">10:21:32</td>
          </tr>
          {[
            { name: "Bruce Wayne", login: "001234562S", section: "S101", activity: "2020-10-02", total: "08:15:20" },
            { name: "Steve Rogers", login: "001234563S", section: "S101", activity: "2020-10-03", total: "12:30:45" },
            { name: "Natasha Romanoff", login: "001234564S", section: "S102", activity: "2020-10-04", total: "09:42:10" },
            { name: "Jane Sample", login: "sample-jane", section: "S101", activity: "2020-10-05", total: "01:20:00" },
            { name: "Alex Sample", login: "sample-alex", section: "S102", activity: "2020-10-06", total: "02:10:00" },
            { name: "Sam Sample", login: "sample-sam", section: "S102", activity: "2020-10-07", total: "00:45:00" },
          ].map(({ name, login, section, activity, total }) => (
            <tr key={login} className="odd:bg-neutral-50">
              <td className="p-2 text-nowrap">
                <FaUserCircle aria-hidden="true" className="me-2 inline text-4xl text-neutral-500" />
                {name}
              </td>
              <td className="p-2">{login}</td>
              <td className="p-2">{section}</td>
              <td className="p-2">STUDENT</td>
              <td className="p-2">{activity}</td>
              <td className="p-2">{total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
