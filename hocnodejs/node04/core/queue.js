const { Job } = require("../models/index");
const triesNumber = 3;
module.exports = {
  addJob: async (name, data) => {
    const jobContent = {
      name,
      data,
    };
    const content = JSON.stringify(jobContent);
    try {
      const job = await Job.create({
        name,
        content,
      });
      return job;
    } catch (e) {
      return false;
    }
  },
  removeJob: async (id) => {
    try {
      const status = await Job.destroy({
        where: { id },
      });
      return status;
    } catch (e) {
      return false;
    }
  },
  execute: async function () {
    const [firstJob] = await Job.findAll({
      order: [["id", "asc"]],
      limit: 1,
    });
    if (firstJob) {
      const jobName = firstJob.name;
      const { data: jobData } = JSON.parse(firstJob.content);

      try {
        const handle = require(process.cwd() + "/jobs/" + jobName + ".js");
        await handle(jobData);
        await firstJob.destroy();
        console.log("Job execute success");
      } catch (e) {
        if (firstJob.execute_number < 3) {
          await firstJob.update({
            execute_number: +firstJob.execute_number + 1,
          });
          this.execute();
        } else {
          await firstJob.destroy();
        }
        console.log("Job tries");
      }
    }
  },
};
