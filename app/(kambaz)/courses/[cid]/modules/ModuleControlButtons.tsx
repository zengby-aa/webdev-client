"use client";

import { FaCheckCircle, FaPencilAlt, FaTrash } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { useModulesStore } from "../../../store/modulesStore";

export default function ModuleControlButtons({
  moduleId,
}: {
  moduleId: string;
}) {
  const deleteModule = useModulesStore((state) => state.deleteModule);
  const editModule = useModulesStore((state) => state.editModule);
  return (
    <div className="flex shrink-0 items-center gap-2">
      <button
        type="button"
        className="cursor-pointer text-blue-600"
        onClick={() => editModule(moduleId)}
        title="Edit module"
        aria-label="Edit module"
      >
        <FaPencilAlt aria-hidden="true" />
      </button>
      <button
        type="button"
        className="cursor-pointer text-red-600"
        onClick={() => deleteModule(moduleId)}
        title="Delete module"
        aria-label="Delete module"
      >
        <FaTrash aria-hidden="true" />
      </button>
      <FaCheckCircle className="text-green-600" />
      <BsPlus className="text-3xl" />
      <IoEllipsisVertical className="text-xl" />
    </div>
  );
}
