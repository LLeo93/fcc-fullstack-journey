const form = document.getElementById('form');
const fullName = document.getElementById('full-name');
const email = document.getElementById('email');
const orderNo = document.getElementById('order-no');
const productCode = document.getElementById('product-code');
const quantity = document.getElementById('quantity');
const complaintsGroup = document.getElementById('complaints-group');
const complaintDescription = document.getElementById('complaint-description');
const otherComplaint = document.getElementById('other-complaint');
const solutionsGroup = document.getElementById('solutions-group');
const solutionDescription = document.getElementById('solution-description');
const otherSolution = document.getElementById('other-solution');

const validateForm = () => {
  const results = {};

  results['full-name'] = fullName.value.trim() !== '';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  results['email'] = emailRegex.test(email.value);

  const orderRegex = /^2024\d{6}$/;
  results['order-no'] = orderRegex.test(orderNo.value);

  const productRegex = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/;
  results['product-code'] = productRegex.test(productCode.value);

  const qValue = parseInt(quantity.value);
  results['quantity'] = !isNaN(qValue) && qValue > 0;

  const selectedComplaints = complaintsGroup.querySelectorAll(
    'input[type="checkbox"]:checked',
  );
  results['complaints-group'] = selectedComplaints.length > 0;

  if (otherComplaint.checked) {
    results['complaint-description'] =
      complaintDescription.value.trim().length >= 20;
  } else {
    results['complaint-description'] = true;
  }

  const selectedSolution = solutionsGroup.querySelector(
    'input[type="radio"]:checked',
  );
  results['solutions-group'] = selectedSolution !== null;

  if (otherSolution.checked) {
    results['solution-description'] =
      solutionDescription.value.trim().length >= 20;
  } else {
    results['solution-description'] = true;
  }

  return results;
};

const isValid = (validationObject) => {
  return Object.values(validationObject).every((value) => value === true);
};

const setBorderColor = (element, isValid) => {
  element.style.borderColor = isValid ? 'green' : 'red';
};

const inputs = [
  fullName,
  email,
  orderNo,
  productCode,
  quantity,
  complaintDescription,
  solutionDescription,
];

inputs.forEach((input) => {
  input.addEventListener('change', () => {
    const results = validateForm();
    setBorderColor(input, results[input.id]);
  });
});

[complaintsGroup, solutionsGroup].forEach((group) => {
  group.addEventListener('change', () => {
    const results = validateForm();
    setBorderColor(group, results[group.id]);
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const results = validateForm();

  setBorderColor(fullName, results['full-name']);
  setBorderColor(email, results['email']);
  setBorderColor(orderNo, results['order-no']);
  setBorderColor(productCode, results['product-code']);
  setBorderColor(quantity, results['quantity']);
  setBorderColor(complaintsGroup, results['complaints-group']);
  setBorderColor(complaintDescription, results['complaint-description']);
  setBorderColor(solutionsGroup, results['solutions-group']);
  setBorderColor(solutionDescription, results['solution-description']);

  if (isValid(results)) {
    console.log('Form inviato con successo!');
  }
});
