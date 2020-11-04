exports.up = function (knex, Promise) {
	return knex.schema.createTable('accounts', (tbl) => {
		//create primary key called id
		tbl.increments('id');
		//make text field
		tbl.text('name', 128).unique().notNullable();
		//numeric budget field
		tbl.decimal('budget').notNullable();
	});
};
``;

exports.down = function (knex, Promise) {
	//drops the table
	return knex.schema.dropTableIfExists('accounts');
};
