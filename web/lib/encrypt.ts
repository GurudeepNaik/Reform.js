import { AES, enc } from "crypto-js";

const AUTH_SECRET =
  process.env.AUTH_SECRET ||
  "dkfgwagaryg38we347384ifucaoh38o7gfa78wo37ifgqoiecg87w4cb4IEB8EE7LAG487W4YOEF";

export const encrypt = (session: any) => {
  return AES.encrypt(JSON.stringify(session), AUTH_SECRET).toString();
};

export const decrypt = (encryptedSession: string) => {
  const bytes = AES.decrypt(encryptedSession, AUTH_SECRET);
  return JSON.parse(bytes.toString(enc.Utf8));
};
