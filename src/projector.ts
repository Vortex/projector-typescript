import { Config } from "./config"
import * as fs from "fs";

export type Data = {
    projector: {
        // pwd
        [key: string]: {
            // key -> value
            [key: string]: string,
        }
    }
}

const defaultData = {
    projector: {}
}

export default class Projector {

    constructor(private config: Config, private data:Data) {}

    getValueAll(): {[key: string]: string} {}

    getValue(): string | undefined {}

    setValue() {}

    removeValue() {}

    static fromConfig(config: Config): Projector {
        if (fs.existsSync(config.config)) {
            let data: Data = undefined;
            try {
                data = JSON.parse(fs.readFileSync(config.config).toString());
            } catch (e) {
                data = defaultData;
            }

            return new Projector(config, data);
        } 

        return new Projector(config, defaultData);
    }
}