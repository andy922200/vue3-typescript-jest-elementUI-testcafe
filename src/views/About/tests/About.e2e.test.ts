import {
    Selector
} from 'testcafe'

fixture('About.vue').page('http://localhost:8080/about')

test('About Page contains "This is About Page"', async testController => {
    // const clickLink = Selector('.board > a')
    // const target = Selector('.board div p:nth-child(2)')
    // await testController.click(clickLink)
    // await testController.expect(target.innerText).match(/male|female/)

    const selector = Selector('.about > h1')

    await testController.expect(selector.innerText).eql('This is an about page')
})
