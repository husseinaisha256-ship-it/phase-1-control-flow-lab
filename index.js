
// Alternative for scuberGreetingForFeet using if/else if
function scuberGreetingForFeet(distance) {
  if (distance <= 400) return 'This one is on me!';
  if (distance <= 2000) return 'That will be twenty bucks.';
  if (distance <= 2500) return 'I will gladly take your thirty bucks.';
  return 'No can do.';
}

// Alternative for ternaryCheckCity (same as above)
function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

// Alternative for switchOnCharmFromTip
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous': return 'Thank you so much.';
    case 'not as generous': return 'Thank you.';
    default: return 'Bye.';
  }
}