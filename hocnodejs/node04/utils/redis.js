const { createClient } = require("redis");
module.exports = createClient({
  password: "Cq2UlYjgyZewP2nGQ0kLE2kmBzrbKMBC",
  socket: {
    host: "redis-16860.c295.ap-southeast-1-1.ec2.cloud.redislabs.com",
    port: 16860,
    // keepAlive: 10000,
  },
})
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect();
