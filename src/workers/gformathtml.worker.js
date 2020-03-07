/* global importScripts gformathtml */
importScripts("gformathtml.browserified.min.js");

export function run(code, opts) {
  const vFile = gformathtml(code, opts);
  // TODO: Show vfile messages e.g warnings in the debug section
  return vFile.contents;
}
