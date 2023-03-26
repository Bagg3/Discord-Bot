import * as playwright from "playwright";
export function makeBibleVerse() {
    return (messageCreate) => {
        bibleVerse(messageCreate);
    };
}
async function bibleVerse(messageCreate) {
    const browser = await playwright.chromium.launch({
        headless: true, // setting this to true will not run the UI
    });
    const page = await browser.newPage();
    await page.goto("https://bibelord.jesusnet.dk/");
    const verse = await page.$(".bibelvers");
    const author = await page.$("span.JNsource");
    if (!verse || !author)
        return;
    const message = await page.evaluate((element) => element.innerHTML, verse);
    const authorMessage = await page.evaluate((element) => element.innerHTML, author);
    messageCreate.channel.send(message + " - " + authorMessage);
    await browser.close();
}
//# sourceMappingURL=bible.js.map