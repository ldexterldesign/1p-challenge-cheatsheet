const options = { style: "currency", currency: "GBP" };
const numberFormat = new Intl.NumberFormat("en-GB", options);

let pound = 0;
for (let day = 1; day < 366; day++) {
  pound += day;
  let pence = pound / 100;
  console.log(day, numberFormat.format(pence));
}