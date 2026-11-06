"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Module from "./Module";
import ModulesControls from "./ModulesControls";
import Lesson from "./Lesson";
import * as db from "../../../database";

export default function Modules() {
  const { cid } = useParams();
  const courseId = Array.isArray(cid) ? cid[0] : cid;
  const [allModules, setModules] = useState(db.modules);
  const [moduleName, setModuleName] = useState("");
  const modules = allModules.filter((module) => module.course === courseId);

  function addModule() {
    const name = moduleName.trim();
    if (!courseId || !name) return;
    const module = {
      _id: crypto.randomUUID(),
      name,
      description: "",
      course: courseId,
      lessons: [],
    };
    setModules((current) => [...current, module]);
    setModuleName("");
  }
  return (
    <div>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module key={module._id} title={module.name}>
            {module.lessons?.map((lesson) => (
              <Lesson key={lesson._id} title={lesson.name} />
            ))}
          </Module>
        ))}
      </ul>
    </div>
  );
}