export default function House() {
  const house = {
    bedrooms: 4,
    bathrooms: 2.5,
    yearBuilt: 2005,
    garage: { cars: 2 },
    squareFeet: 2000,
    address: {
      street: "Via Roma",
      city: "Roma",
      state: "RM",
      zip: "00100",
      country: "Italy",
    },
    owners: ["Alice", "Bob"],
  };
  console.log(house);
  console.log(house.owners);
  console.log(house.address.city);
  return (
    <div id="wd-house">
      <h4>House</h4>
      <h5>bedrooms</h5>
      {house.bedrooms}
      <h5>bathrooms</h5>
      {house.bathrooms}
      <h5>owners</h5>
      {house.owners.join(", ")}
      <h5>yearBuilt</h5>
      {house.yearBuilt}
      <h5>garage cars</h5>
      {house.garage.cars}
      <h5>Data</h5>
      <pre>{JSON.stringify(house, null, 2)}</pre>
      <hr />
    </div>
  );
}
