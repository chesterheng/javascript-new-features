// RegExp match indices with the d flag
const names = 'Names: John, Frank, Johnson, Kelly'
const regex = /(John)/gd;
const matches = [...names.matchAll(regex)];
matches
// matches[0];
// matches[0].indices[0]
// matches[0].indices[0][0];
// matches[0].indices[0][1];

