import dotenv from 'dotenv'
dotenv.config()
export default {
  port: 1337,
  dbUri: process.env.dbUri as string,
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  publicKey: process.env.publicKey,
  privateKey: process.env.privateKey,
};