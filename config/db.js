import { neon } from "@neondatabase/serverless";
import 'dotenv/config'

const {PGHOST, PGDATABASE, PGPASSWORD, PGUSER} = process.env;

// creates a SQL connection using our env variables.
export const sql = neon(
    `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
)


// this sql function we export is used as a tagged template literal which allows us to write sql queries safely.