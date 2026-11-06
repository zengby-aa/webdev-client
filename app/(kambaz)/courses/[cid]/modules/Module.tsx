"use client";

import { useModulesStore, type CourseModule } from "../../../store/modulesStore";
import Lesson from "./Lesson";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Module({ module }: { module: CourseModule }) {
  const updateModule = useModulesStore((state) => state.updateModule);
  return (
    <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0 text-xl">
      <div className="wd-title flex items-center justify-between gap-3 bg-neutral-200 p-3 ps-2">
        {module.editing ? (
          <input
            className="min-w-0 flex-1 rounded border border-neutral-300 bg-white px-2 py-1 text-base"
            aria-label="Module name"
            autoFocus
            value={module.name}
            onChange={(event) =>
              updateModule({ ...module, name: event.target.value })
            }
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.nativeEvent.isComposing) {
                event.preventDefault();
                updateModule({ ...module, editing: false });
              }
            }}
          />
        ) : (
          <span className="min-w-0 flex-1 break-words">{module.name}</span>
        )}
        <ModuleControlButtons moduleId={module._id} />
      </div>
      <ul className="wd-lessons m-0 list-none p-0">
        {module.lessons?.map((lesson) => (
          <Lesson key={lesson._id} title={lesson.name} />
        ))}
      </ul>
    </li>
  );
}
