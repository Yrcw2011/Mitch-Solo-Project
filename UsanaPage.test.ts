import { USANA } from "./USANAPage";

const Usana = new USANA()

test ('firstTest', async() => {
    await Usana.navigate();
    await Usana.click(Usana.logIn);
    await Usana.click(Usana.userName);
    await Usana.click(Usana.password);
    await Usana.click(Usana.show);

})

test ('secondTest', async() => {
    await Usana.navigate();
    await Usana.click(Usana.logIn);
    await Usana.driver.navigate().back()
    await Usana.click(Usana.userName);
    await Usana.driver.navigate().back()
    await Usana.click(Usana.password);
    await Usana.driver.navigate().back()
    await Usana.click(Usana.show);
    await Usana.driver.navigate().back()
    
})


