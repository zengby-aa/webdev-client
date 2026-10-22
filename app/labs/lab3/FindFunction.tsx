export default function FindFunction() {
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string2", "string3"];
  const four = numberArray1.find((a) => a === 4);
  const string3 = stringArray1.find((a) => a === "string3");
  const missing = numberArray1.find((a) => a === 9);
  const two = numberArray1.find((a) => a === 2);
  return (
    <div id="wd-find-function">
      <h4>Find Function</h4>
      four = {four} <br />
      string3 = {string3}
      <br />
      two = {two}
      <br />
      missing = {missing}
      <br />
      String(missing) = {String(missing)}
      <hr />
    </div>
  );
}
