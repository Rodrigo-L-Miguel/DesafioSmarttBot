import { When, Then, After,Given } from '@cucumber';
import assert from 'assert';
import {Builder} from 'selenium-webdriver';

Given('realizo login na Smarttbot', async function () {
    this.driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions('disable-infobars')
        .build();

        this.driver.get('https://app.smarttbot.com/public/login');

   await this.driver.findElementById("login-username").sendkeys("rodrigoluisluzmiguel@gmail.com");
   await this.driver.findElementById("login-password").sendkeys("Rllm25478963@123");
   await this.driver.findElementById("login-button").click();
});

When('Clico em "estratégia" no menu lateral', async function(){
    await this.driver.findElementById("sidebar-menu-item-scoreboard").click();
});

After(async function() {
    this.driver.close();
});