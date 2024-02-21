var express = require("express");
var router = express.Router();
const connectRedis = require("../utils/redis");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/test-redis", async (req, res) => {
  const client = await connectRedis;
  const usersCache = await client.get("users-cache");
  let users;
  if (!usersCache) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    users = await response.json();
    await client.set("users-cache", JSON.stringify(users), {
      EX: 60 * 60 * 24,
    });
    console.log("no cache");
  } else {
    users = JSON.parse(usersCache);
    console.log("cache");
  }

  res.json(users);
});

router.get("/clear-cache", async (req, res) => {
  const client = await connectRedis;
  await client.del("users-cache");
  res.json({});
});

module.exports = router;
