/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
import { basePage } from "./support/pages/BasePage"
import { booking } from "./support/pages/Booking"

describe('empty spec', () => {

    it('Применение фильтров', () => {
        basePage.visitFS()
        basePage.MyTypeChoice('Я турист')
        basePage.Search()
        cy.contains('Стоимость')
        cy.contains('Перелёт')


    })
})