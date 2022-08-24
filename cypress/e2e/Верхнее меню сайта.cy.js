/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
import "cypress-real-events/support";
import { basePage } from "./support/pages/BasePage"
describe('Веренее меню сайта', () => {
    beforeEach(() => {
        basePage.visitFS()
        basePage.MyTypeChoice('Я турист')
    })


    it('Веренее меню сайта, отображение пунктов меню', () => {

        //отображение списка
        cy.get('[class="v-search-tab-menu"]').eq(0).realHover('mouse')
            .get('[class="v-search-tab-sub-menu"]').should('be.visible')

        cy.get('[class="v-search-tab-menu"]').eq(1).realHover('mouse')
            .get(':nth-child(2) > .v-search-tab.v-search-main > .v-search-tab-desktop').should('be.visible')
            .get('.v-search-tab-sub-menu > [href="/searchhotel"] > .v-search-tab-desktop').should('be.visible')
            .get('[href="/funsunhotels"] > .v-search-tab-desktop').should('be.visible')
        cy.get('[class="v-search-tab-menu"]').eq(2).contains('Авиабилеты').should('be.visible')
        cy.get('[class="v-search-tab-menu"]').eq(3).contains('По России').should('be.visible')
        cy.get('[class="v-search-tab-menu"]').eq(4).contains('На Новый год').should('be.visible')
        cy.get('[class="v-search-tab-menu"]').eq(5).realHover('mouse')
            .get('.v-search-tab-sub-menu > [href="/actions"]').should('be.visible')
            .get('[href="/rannee-bronirovanie-b2c-2022-2023"] > .v-search-tab-desktop').should('be.visible')
        cy.get('[class="v-search-tab-menu"]').eq(6).contains('Горящие туры').should('be.visible')
        cy.get('[class="v-search-tab-menu"]').eq(7).contains('Санатории').should('be.visible')

    })

    it("Веренее меню сайта, переход по 1-4 пунктам", function () {

        cy.get('[class="v-search-tab-menu"]').eq(0).click()


        cy.get('[class="v-search-tab-menu"]').eq(0).realHover('mouse')
            .get('[class="v-search-tab-sub-menu"]')
            .contains('Все туры')
            .click()

        cy.get('[class="v-search-tab-menu"]').eq(0).realHover('mouse')
            .get('[class="v-search-tab-sub-menu"]')
            .contains('Автотуры')
            .click()
        cy.get('[class="v-search-tab-menu"]').eq(0).realHover('mouse')
            .get('[class="v-search-tab-sub-menu"]')
            .contains('Туры на выходные')
            .click()


        cy.get('[class="v-search-tab-menu"]').eq(1).click()

        cy.get('[class="v-search-tab-menu"]').eq(1).realHover('mouse')
            .get('[class="v-search-tab-sub-menu"]')
            .contains('Все отели')
            .click()
        cy.get('[class="v-search-tab-menu"]').eq(1).realHover('mouse')
            .get('[class="v-search-tab-sub-menu"]')
            .contains('Отели FUN&SUN')
            .click()


        cy.get('[class="v-search-tab-menu"]').eq(2)
            .get('[class="v-search-tab v-search-main v-tour-tab v-text-16 "] ').eq(2)
            .should('have.attr', 'href', '/searchavia')

        cy.get('[class="v-search-tab-menu"]').eq(3).click()


    })
    it("Веренее меню сайта, переход по 5-8 пунктам", function () {

        cy.get('[class="v-search-tab-menu"]').eq(4).click()
        cy.get('[class="v-search-tab-menu"]').eq(5).click()

        cy.get('[class="v-search-tab-menu"]').eq(5).realHover('mouse')
            .get('[class="v-search-tab-sub-menu"]')
            .contains('Все акции')
            .click()

        cy.get('[class="v-search-tab-menu"]').eq(5).realHover('mouse')
            .get('[class="v-search-tab-sub-menu"]')
            .contains('Раннее бронирование')
            .click()

        cy.get('[class="v-search-tab-menu"]').eq(6).click()
        cy.get('[class="v-search-tab-menu"]').eq(7).click()

    })
})