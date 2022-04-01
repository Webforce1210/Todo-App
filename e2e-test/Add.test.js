import { Selector } from 'testcafe';
import { ClientFunction, t } from 'testcafe';

fixture`Getting Started`
    .page`http://localhost:4200`;

test('AddTest', async t => {
    const getLocation=ClientFunction(()=>document.location.href);
    const titleExpect= Selector('div').withText('Tache 5');
    const visibilityS=Selector(titleExpect).visible;
    await t
        .click('#add')
        .expect(getLocation()).contains('http://localhost:4200/tasks/add')
        .typeText('#titleform','Tache 5')
        .typeText('#descriptionform','Voici la tache 5')
        .click('#create')
        .expect(getLocation()).contains('http://localhost:4200/tasks')
        .expect(visibilityS).ok()
        .wait(2000)
        ;
});

test('Annulation de la creation', async t=> {
    await t
        .click('#add')
        .typeText('#titleform','tache 6')
        .typeText('#descriptionform','tache 6')
        .click('#del')
})
