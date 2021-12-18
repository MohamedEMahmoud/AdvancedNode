const Page = require('./helpers/page')

let page;
beforeEach(async () => {
    page = await Page.bulid();
    await page.goto('http://localhost:3000')
});

test('the header has the correct text', async () => {

    const text = await page.getContentsOf('a.brand-logo');
    assert(text === "Blogster")
});

test('clicking login starts oauth flow', async () => {
    await page.click('.right a');
    const url = await page.url();
    expect(url).toMatch(/accounts\.google.com/)
})
//fake login by google login
// test.only is only this test is run in entire file
test('When singed in, shows logout button', async () => {
    await page.login();
    const text = await page.getContentsOf('a[href="/auth/logout"]');
    assert(text === 'Logout')
});

afterEach(async () => {
    await page.close();
})
