import minimongo from "minimongo";
export default class MyMiniMongo {
	db = null;
	getDB(dbName) {
		return new Promise((resolve, reject) => {
			this.db = new minimongo.IndexedDb(
				{
					namespace: dbName,
				},
				() => {
					resolve(this.db);
				}
			);
		});
	}
	addCollection(colName) {
		new Promise((resolve, reject) => {
			if (this.db === null) {
				reject("Call getDB first");
				return;
			}
			this.db.addCollection(colName, () => resolve(this.db));
		});
	}
	find(collection, query) {
		return new Promise((resolve, reject) => {
			if (this.db === null) {
				reject("Call getDB first");
				return;
			}
			this.db[collection].find(query).fetch((results, err) => {
				if (err) {
					reject(err);
					return;
				}
				resolve(results);
			});
		});
	}
	allInOneFind(dbName, collection, query) {
		return this.getDB(dbName)
			.then(() => this.addCollection(collection))
			.then(() => this.find(collection, query));
	}
}
