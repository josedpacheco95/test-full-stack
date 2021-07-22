require('dotenv').config();
module.exports = {
  DATABASE_URL: process.env.DATABASE_URL || null,
  jwt: process.env.JWT || 'Eldjf93484Dks9Dw044fjfisnEdo2A4F',
  ENCRYPT_SALT_ROUNDS: parseInt(process.env.ENCRYPT_SALT_ROUNDS),
  FRONT_BASE_URL: process.env.FRONT_BASE_URL || null,
};
