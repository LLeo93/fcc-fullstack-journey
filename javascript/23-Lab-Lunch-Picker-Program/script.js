let lunches = [];
function addLunchToEnd(lunches, lunchItem) {
  lunches.push(lunchItem);
  console.log(lunchItem + ' added to the end of the lunch menu.');
  return lunches;
}

function addLunchToStart(lunches, lunchItem) {
  lunches.unshift(lunchItem);
  console.log(lunchItem + ' added to the start of the lunch menu.');
  return lunches;
}
function removeLastLunch(lunches) {
  if (lunches.length === 0) {
    console.log('No lunches to remove.');
  } else {
    let removedItem = lunches.pop();
    console.log(removedItem + ' removed from the end of the lunch menu.');
  }
  return lunches;
}
function removeFirstLunch(lunches) {
  if (lunches.length === 0) {
    console.log('No lunches to remove.');
  } else {
    let removedItem = lunches.shift();
    console.log(removedItem + ' removed from the start of the lunch menu.');
    return lunches;
  }
}
function getRandomLunch(lunches) {
  if (lunches.length === 0) {
    console.log('No lunches available.');
  } else {
    let randomLunch = lunches[Math.floor(Math.random() * lunches.length)];
    console.log('Randomly selected lunch: ' + randomLunch);
  }
}
function showLunchMenu(lunches) {
  if (lunches.length === 0) {
    console.log('The menu is empty.');
  } else {
    console.log('Menu items: ' + lunches.join(', '));
    return lunches;
  }
}
