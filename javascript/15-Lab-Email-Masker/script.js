const maskEmail = (email) => {
  const atIndex = email.indexOf('@');
  const firstLetter = email[0];
  const lastLetter = email[atIndex - 1];
  const domain = email.slice(atIndex);
  const maskLength = atIndex - 2;
  const stars = '*'.repeat(maskLength);
  return firstLetter + stars + lastLetter + domain;
};
const email = 'apple.pie@example.com';
console.log(maskEmail(email));
/*const maskEmail = (email) => {
  return email.replace(/^(.)(.*)(.@.*)$/, (match, p1, p2, p3) => {
    return p1 + "*".repeat(p2.length) + p3;
  });
};
const email = "apple.pie@example.com";
console.log(maskEmail(email)); */
