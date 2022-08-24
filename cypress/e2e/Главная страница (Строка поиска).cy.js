/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

import { basePage } from "./support/pages/BasePage"
describe('empty spec', () => {

    it('Строка поиска', () => {
        //basePage.visitFS()
        basePage.visitFS()
        basePage.MyTypeChoice('Я турист')

        cy.get('[class="v-search-filter v-mt-4 v-mb-4"]').should('be.visible')
        //откуда
        cy.get('[class="v-departure__pinput__input trslt"]').should('be.visible').click()
        cy.get('[class="v-departure__body"]').should('be.visible')


        //куда
        cy.get('[placeholder="Страна, город, отель"]').click()
        cy.get('[class="where-popup__popular-directions"]').should('be.visible')
        cy.get('[for="checkbox-only-ru"]').click()
        cy.contains('Алтайский край').should('be.visible')
        cy.get('[for="checkbox-not-visa"]').click()
        cy.contains('Абхазия').should('be.visible')
        //cy.contains('Алтайский край').should('not.be.visible')

        //календарь
        cy.get('[class="calendar__field-dates"]').click()
        cy.get('[class="calendar-popup"]').should('be.visible')
        cy.get('[for="checkbox"]').click().click()
        cy.get('[class="calendar-popup__arrow-right"]').click()
        cy.get('[class="calendar-popup__arrow-left"]').click()
        //Длительность
        cy.get('[class="v-nights__pinput"]').click()
        cy.get('[class="v-nights__body"]').should('be.visible')
        cy.get(':nth-child(1) > .v-icon-minus_square')
        cy.get('.v-nights__elem-separator > .v-icon-plus_square')
        cy.get(':nth-child(1) > .v-icon-plus_square')
        cy.get('.v-nights__elem-separator > .v-icon-minus_square')
        //Количество туристов
        cy.get('[class="v-tourists__pinput"]').click()
        cy.get('[class="v-tourists__body"]').should('be.visible')
        cy.get('.v-icon-minus_square').click()
        cy.get('.v-icon-plus_square').click()
        cy.get('.tourists_item').click()
        cy.get('.v-tourist-options > :nth-child(2)').click()














    })
})