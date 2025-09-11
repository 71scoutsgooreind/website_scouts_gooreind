// /Users/mpreud01/repos/scouts_gooreind_python/website_scouts_gooreind/src/assets/sponsors.js

// Use Vite's import.meta.glob to dynamically import all images
// from the assets/images/sponsors directory.
const modules = import.meta.glob('/src/assets/images/sponsors/*', { eager: true });

export const sponsors = Object.keys(modules).map(path => {

  const filename = path.split('/').pop();
  const name = filename.split('.').slice(0, -1).join('.');

  return {
    img: modules[path].default,
    name: name,
  };
});
