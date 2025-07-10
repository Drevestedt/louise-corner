module.exports = {
  migrationsFolder: "migrations",
  direction: "up",
  logFileName: "migrations.log",
  databaseUrl: process.env.DATABASE_URL,
  ssl: true
}