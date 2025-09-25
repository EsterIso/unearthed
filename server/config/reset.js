import { pool } from "./databse";
import './dotenv'
import giftData from "../data/gifts";

const createGiftsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS gifts;

        CREATE TABLE IF NOT EXISTS gifts (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            pricePoint VARCHAR(10) NOT NULL,
            audience VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            submittedBy VARCHAR(255) NOT NULL,
            submittedOn TIMESTAMP NOT NULL
        )
    `
    try {
        const res = await pool.query(createTableQuery);
        console.log('gifts table created succesfully');
    } catch (error) {
        console.error('⚠️ error creating gifts table', err);
    }

}