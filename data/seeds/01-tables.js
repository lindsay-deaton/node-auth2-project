
exports.seed = function(knex) {
  const department = [
    {
      name: "HR"
    },
    {
      name: "CSR"
    }
  ]  
  return knex('users').insert(department)
  .then(()=> console.log("\n== Seed data for departments have been added. ==\n"))
    });
};
