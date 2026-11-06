export default function PassingFunctions({
  message,
  theFunction,
  theNameFunction,
  theOtherFunction,
}: {
  message: string;
  theFunction: (message: string) => void;
  theNameFunction: () => void;
  theOtherFunction: () => void;
}) {
  return (
    <div id="wd-passing-functions">
      <h2>Passing Functions</h2>
      <button
        type="button"
        onClick={() => theFunction(`From parent: ${message}`)}
        id="wd-pass-functions-click"
        className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Invoke the Function
      </button>
      <button
        type="button"
        onClick={theNameFunction}
        id="wd-pass-functions-name-click"
        className="ms-2 rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Show My Name
      </button>
      <button
        type="button"
        onClick={theOtherFunction}
        id="wd-pass-functions-other-click"
        className="ms-2 rounded bg-purple-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Sample from Parent
      </button>
      <hr />
    </div>
  );
}
