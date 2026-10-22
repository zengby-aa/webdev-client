export default function FilterFunction() {
  let numberArray1 = [1, 2, 4, 5, 6];
  const numbersGreaterThan2 = numberArray1.filter((a) => a > 2);
  const evenNumbers = numberArray1.filter((a) => a % 2 === 0);
  const oddNumbers = numberArray1.filter((a) => a % 2 !== 0);
  const numbersLessThan2 = numberArray1.filter((a) => a < 2);
  const numbersGreaterThanOrEqualTo5 = numberArray1.filter((a) => a >= 5);
  return (
    <div id="wd-filter-function">
      <h4>Filter Function</h4>
      numbersGreaterThan2 = {numbersGreaterThan2} <br />
      evenNumbers = {evenNumbers}                 <br />
      oddNumbers = {oddNumbers}
      <br />
      numbersLessThan2 = {numbersLessThan2}
      <br />
      numbersGreaterThanOrEqualTo5 = {numbersGreaterThanOrEqualTo5}
      <hr />
    </div>
  );
}
