import startGformatHtml from "workerize-loader!./gformathtml.worker.js";

let gformathtmlWorker = null;
// todo: prettier worker

export function getWorkers() {
  if (gformathtmlWorker === null) {
    // eslint-disable-next-line no-console
    console.log("[gformat-html-worker]: Worker hasn't initialized yet.");
  }
  return {
    prettyhtml: gformathtmlWorker,
  };
}

export function startWorkers() {
  gformathtmlWorker = startGformatHtml();
}
