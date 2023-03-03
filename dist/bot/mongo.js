import { MongoClient } from "mongodb";
export class MongoClass {
    constructor() {
        this.client = this.connectionDb();
    }
    connectionDb() {
        try {
            if (!process.env.MONGO_URI)
                throw new Error("No mongo uri found");
            const client = new MongoClient(process.env.MONGO_URI);
            return client;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async insertData(data, collection) {
        try {
            const database = this.client.db("discord");
            const collectionDb = database.collection(collection);
            const result = await collectionDb.insertOne(data);
            //console.log(result);
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
}
//# sourceMappingURL=mongo.js.map