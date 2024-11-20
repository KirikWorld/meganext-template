import path from "path";
import { readFileSync } from "fs";

export type ConfigT = {
  DATABASE: {
    TYPE: string;
    HOST: string;
    PORT: number;
    NAME: string;
  };
  AUTH: {
    SECRET: string;
  };
};

const readConfig = async (dev?: boolean): Promise<ConfigT> => {
  const currentFolder = process.cwd();
  const configFile = readFileSync(path.join(currentFolder, dev ? "config/config.dev.json" : "config/config.json"));
  return JSON.parse(configFile.toString()) as ConfigT;
};

export default readConfig;
