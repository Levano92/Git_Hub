Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

import "cypress-real-events/support";
import "cypress-localstorage-commands";

describe("Главная страница (хедер)", function () {
    it("Отоюражение элементов", function () {
        cy.visit('https://prerelease.fstravel.com')
        cy.get('.icon-close').click()
        cy.get('img[alt="Travel Agency Logo"]').should('be.visible')
        cy.contains('Подобрать тур').should('be.visible').click()
        cy.get('[class="v-modal-wrap"]').should('be.visible')
        cy.contains('Мы поможем подобрать тур').should('be.visible')
        cy.get('.v-modal-close').click()


        cy.contains('Офисы продаж').should('be.visible')
        cy.contains('О компании').should('be.visible')
        cy.contains('Вход для агентов').should('be.visible')
        cy.get('.new-header__location-icon').should('be.visible')

        cy.get('.new-header__location-text > [data-v-2d70a46e=""] > :nth-child(1)').contains('Москва').click()
        cy.get('[class="v-language__modal"]').should('be.visible')
        cy.get('.v-icon-phone').should('be.visible')
        cy.get('.v-header-phone > .v-text-14').should('be.visible')
        cy.get('[class="v-icon-user-14"]').should('be.visible')
        cy.get('[class="v-icon-heart-3 v-header-icon"]').should('be.visible')
        cy.get('[class="v-icon-store v-basket-icon"]').should('be.visible')
        cy.get('.v-search-tabs').should('be.visible')


    })

})
