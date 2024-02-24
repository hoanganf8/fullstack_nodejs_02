const cron = require("node-cron");
const queue = require("./core/queue");
// queue.execute();
cron.schedule("*/15 * * * * *", () => {
  queue.execute();
});
