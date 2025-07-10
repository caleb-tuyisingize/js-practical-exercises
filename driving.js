function generateDrivingLicense(data) {
  const [forename, middleName, surname, dob, gender] = data;

  // 1–5: First five characters of the surname (uppercase, padded with 9s)
  const surnamePart = (surname.toUpperCase().padEnd(5, '9')).slice(0, 5);

  // Split DOB into day, month, year
  const [day, monthStr, yearStr] = dob.split('-');
  const year = parseInt(yearStr);
  const decadeDigit = yearStr[2];   // 6: Decade digit of year
  const yearDigit = yearStr[3];     // 11: Year digit

  // Map month name to number
  const months = {
    jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06',
    jul: '07', aug: '08', sep: '09', sept: '09', oct: '10', nov: '11', dec: '12'
  };
  const monthLower = monthStr.toLowerCase().slice(0, 3);
  let month = months[monthLower];

  // 7–8: Adjust month if female
  if (gender.toUpperCase() === 'F') {
    month = (parseInt(month) + 50).toString().padStart(2, '0');
  }

  // 9–10: Date of month (zero-padded)
  const dateOfMonth = day.padStart(2, '0');

  // 12–13: Initials of first name and middle name, or pad with 9
  const firstInitial = forename[0].toUpperCase();
  const middleInitial = middleName ? middleName[0].toUpperCase() : '9';

  // 14: Always 9
  const arbitraryDigit = '9';

  // 15–16: Always "AA"
  const checkDigits = 'AA';

  // Combine all parts
  return (
    surnamePart +
    decadeDigit +
    month +
    dateOfMonth +
    yearDigit +
    firstInitial +
    middleInitial +
    arbitraryDigit +
    checkDigits
  );
}

// Example input
const data = ["John", "James", "Smith", "01-Jan-2000", "M"];
console.log(generateDrivingLicense(data));  // ➤ SMITH00101JJ9AA
