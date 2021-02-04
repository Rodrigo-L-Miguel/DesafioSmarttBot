import { When, Then, After,Given,And } from '@cucumber';
import assert from 'assert';
import {Builder,findElementById} from 'selenium-webdriver';

Given('realizo a busca do robo "Heitor Villa-Lobos"', async function(robo){
    await this.driver.findElement(By.xpath("//button[@class='jss487']")).click();
    await this.driver.findElement(By.xpath("//input[@class=jss534']")).sendKeys(robo);
    await this.driver.findElement(By.xpath("//button[@class='jss487 jss535']")).click();    
});

Then('o resultado da busca deve ser o correto', async function() {
    var textoBusca = await this.driver.findElement(By.xpath("//div[@class='jss419']/span")).getText();
    assertTrue(textoBusca.equals("Heitor Villa-Lobos"));
});

And('seleciono o robô na busca no modo simulado', async function(){
    await this.driver.findElement(By.xpath("//div[@class='jss419']/span")).click();
    await this.driver.findElement(By.xpath("//button[@class='jss537'][2]")).click();
    await this.driver.findElement(By.id("create-instance-simulated")).click();
    await this.driver.findElement(By.id("next-step-button")).click();
    await this.driver.findElement(By.xpath("//button/span[@class='jss990'][text()='Ok']"));
})

When('Inicio a execução do robo com os parametros do ranking',async function(){
    await this.driver.findElement(By.xpath("//button[contains(@id,'simulado_robo_iniciar')]"));
    setTimeout(2000);
    try{
        await this.driver.findElement(By.class("notification notification-success notification-visible"));
    }catch(e){
        throw new Error("Mensagem de confirmação de incio não apresentada");
    }
})


After(async function() {
    this.driver.close();
});