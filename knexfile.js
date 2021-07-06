const { O_DIRECT } = require('constants');

module.exports = {
	development: {
		// our DBMS driver
		client: 'sqlite3',
		// the location of our db
		connection: {
			filename: '',
		},
		// necessary when using sqlite3
		useNullAsDefault: true,
		migrations: {
			directory: './data/migrations',
		},
		development: {
			client: 'sqlite3',
			connection: {
				filename: './data/produce.db3',
			},
			useNullAsDefault: true,
			// generates migration files in a data/migrations/ folder
			migrations: {
				directory: './data/migrations',
			},
			seeds: {
				directory: './data/seeds',
			},
		},
	},
};
