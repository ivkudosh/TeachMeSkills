import { Builder, Capabilities } from "selenium-webdriver";

export const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
