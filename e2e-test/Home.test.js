import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`http://localhost:4200`;

test('My first Hometest', async t => {
    await t
        .wait(3000)
        .click('#delete-1')
        .wait(3000)
        .click('#corbeille')
        .wait(3000);
});
