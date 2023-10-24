import { isDev } from "../utils";
import defaultConfig from "./default";
import prodConfig from "./prod";

export default isDev ? defaultConfig : { ...defaultConfig, ...prodConfig };
