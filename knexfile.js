module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://dan:dan@localhost/housing'
  },

  staging: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory',
    ssl: true
  },

  // staging: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL,
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
