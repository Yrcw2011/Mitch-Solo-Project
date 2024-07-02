import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";
const fs = require('fs');

export class USANA extends BasePage {
    logIn: By = By.id('(//a[text()="Login"])[1]');
    userName: By = By.id('#username');
    password: By = By.id('#password');
    show: By = By.id('.sso-btn');

    constructor() {
        super({url:"https://sso.usana.com/enu-US/login"});
    }
}

