const url = "https://jsonplaceholder.typicode.com/users";
const response = await fetch(url);
let users = await response.json();

// dynamic path for a dependency
const words = await import(`/i18n/${navigator.language}`);

// Dependency fallback
let module;
try {
  module = await import("https://cdn1.com/module");
} catch {
  module = await import("https://cdn2.com/module");
}
