import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";
const fs = require('fs');

export class USANA extends BasePage {
    logIn: By = By.xpath('(//a[text()="Login"])[1]');
    userName: By = By.xpath('#username');
    password: By = By.xpath('#password');
    show: By = By.xpath('.sso-btn');

    constructor() {
        super({url:"https://sso.usana.com/enu-US/login"});
    }
}

