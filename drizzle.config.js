/** @type { import("drizzle-kit").Config } */
export default {
  schema: './utils/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://mockdb_owner:npg_unI6jHTZ3SxU@ep-divine-unit-a825typi.eastus2.azure.neon.tech/mockdb?sslmode=require',
  },
};
