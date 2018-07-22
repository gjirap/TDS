import {Application} from "./application"

(function(): number {
  const application: Application = new Application();
  return application.run();
})();