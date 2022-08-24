/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
import { basePage } from "./support/pages/BasePage"
import { booking } from "./support/pages/Booking"

describe('Поиск и результаты поиска', () => {


    beforeEach(() => {
        basePage.visitFS()
        basePage.MyTypeChoice('Я турист')
    })

    it("Поиск с параметрами по умолчанию", function () {
        basePage.Search()
        cy.get('[class="v-row v-hotel-block"]').contains('Турция', { timeout: 30000 })

    })

    it("Поиск с параметрами не умолчанию и изменение параметров", function () {
        booking.ChooseCountryDirection('Россия')
        basePage.Search()
        cy.get('[class="v-row v-hotel-block"]', { timeout: 30000 }).contains('Россия', { timeout: 30000 })
        cy.get('.v-departure__pinput__input').clear().type('Санкт-Петербург')
        cy.get('.where > .v-input > .v-input__wrap > input').clear().type('ОАЭ')
        basePage.Search()
        cy.get('[class="v-row v-hotel-block"]', { timeout: 30000 }).contains('ОАЭ', { timeout: 30000 })


    })

    it.only("Поиск по региону и сортировка", function () {
        booking.ChooseCountryDirection('Байкал')
        basePage.Search()
        cy.get('[class="v-row v-hotel-block"]', { timeout: 30000 }).contains('Байкал', { timeout: 30000 })
        cy.get(':nth-child(2) > .v-sort-panel-arrow > .v-icon-arrow_down_short').click()
        cy.get(':nth-child(3) > .v-sort-panel-arrow > .v-icon-arrow_down_short').click()
        cy.get(':nth-child(4) > .v-sort-panel-arrow > .v-icon-arrow_down_short').click()

    })




})