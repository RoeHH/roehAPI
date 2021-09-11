import { getExecutablesFromDB } from "./db.ts";

export const getExecutable = async ({ response }: { response: any }) => {
  response.status = 200;
  response.body = await getExecutablesFromDB();
};
