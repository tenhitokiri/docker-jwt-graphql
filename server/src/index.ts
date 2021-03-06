import 'reflect-metadata';
import express from 'express';

(async () => {
	const app = express();
	app.get('/', (_req, res) => {
		res.send('hello');
	});
	app.listen(4000, '0.0.0.0', () => {
		console.log('express server running');
	});
})();

/* createConnection()
	.then(async (connection) => {
		console.log('Inserting a new user into the database...');
		const user = new User();
		user.firstName = 'Timber';
		user.lastName = 'Saw';
		user.age = 25;
		await connection.manager.save(user);
		console.log('Saved a new user with id: ' + user.id);

		console.log('Loading users from the database...');
		const users = await connection.manager.find(User);
		console.log('Loaded users: ', users);

		console.log('Here you can setup and run express/koa/any other framework.');
	})
	.catch((error) => console.log(error));
 */
