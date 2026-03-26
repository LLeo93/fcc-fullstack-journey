function normalizeUnits(manifest) {
  const newManifest = { ...manifest };

  if (newManifest.unit === 'lb') {
    newManifest.weight = newManifest.weight * 0.45;
    newManifest.unit = 'kg';
  }

  return newManifest;
}

function validateManifest(manifest) {
  const errors = {};

  if (!('containerId' in manifest)) {
    errors.containerId = 'Missing';
  } else if (
    !Number.isInteger(manifest.containerId) ||
    manifest.containerId <= 0
  ) {
    errors.containerId = 'Invalid';
  }

  if (!('destination' in manifest)) {
    errors.destination = 'Missing';
  } else if (
    typeof manifest.destination !== 'string' ||
    manifest.destination.trim().length === 0
  ) {
    errors.destination = 'Invalid';
  }

  if (!('weight' in manifest)) {
    errors.weight = 'Missing';
  } else if (
    typeof manifest.weight !== 'number' ||
    Number.isNaN(manifest.weight) ||
    manifest.weight <= 0
  ) {
    errors.weight = 'Invalid';
  }

  if (!('unit' in manifest)) {
    errors.unit = 'Missing';
  } else if (manifest.unit !== 'kg' && manifest.unit !== 'lb') {
    errors.unit = 'Invalid';
  }

  if (!('hazmat' in manifest)) {
    errors.hazmat = 'Missing';
  } else if (typeof manifest.hazmat !== 'boolean') {
    errors.hazmat = 'Invalid';
  }

  return errors;
}

function processManifest(manifest) {
  const errors = validateManifest(manifest);
  const isValid = Object.keys(errors).length === 0;

  if (isValid) {
    const normalized = normalizeUnits(manifest);
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}

const testManifest = {
  containerId: 55,
  destination: 'Carmel',
  weight: 400,
  unit: 'lb',
  hazmat: false,
};

processManifest(testManifest);
