Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})


import "cypress-localstorage-commands";




describe('Окно авторизации', () => {
  beforeEach(() => {
    //cy.restoreLocalStorage();
    cy.visit("prerelease.fstravel.com");
    cy.setLocalStorage('dq_user_type', 'client');
  });

  it('Окно авторизации', () => {
    cy.visit('prerelease.fstravel.com')
    cy.get('span[class="v-icon-user-14"]').click();
    cy.get('input[id="email"]').type('t')
    cy.contains('Некорректный адрес электронной почты').should('be.visible')
    cy.get('input[id="email"]').clear()

    cy.get('input[id="email"]').type('ttt@yandex.ru')
    cy.get('input[id="password"]').type('123')
    cy.contains('Войти').click()
    cy.get('.new-button').click()
    cy.contains('Указанный пользователь ttt@yandex.ru не найден').click()
    cy.get('input[id="password"]').clear()
    cy.get('input[id="email"]').clear()

    cy.get('input[id="email"]').type('testfs8@yandex.ru')
    cy.get('input[id="password"]').type('123')
    cy.contains('Войти').click()
    cy.get('.new-button').click()
    cy.contains('Введен неверный логин или пароль').should('be.visible')
    cy.get('input[id="password"]').clear().type('123456')
    cy.contains('Войти').click()
    cy.get('.new-button').click()


    cy.get('img[class="left v-account-img"]').should('be.visible')


  })
})