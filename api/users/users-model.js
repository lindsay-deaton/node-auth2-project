const db = require("../../data/db-config.js")

module.exports = {
  find,
  findById,
  findBy,
  insert
}

function find() {
  return db("users")
    .select("id", "username").orderBy("id");
}

function findBy(filter) {
  return db("users").where(filter).orderBy("id");
}

function findById(id) {
  return db("users").where({ id }).first();
}

async function insert(user) {
  const [id] = await db("users").insert(user, "id")
  return findById(id)
}