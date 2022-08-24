/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
import { basePage } from "./support/pages/BasePage"
import { booking } from "./support/pages/Booking"


describe('empty spec', () => {

    it('Авторизация в корзине', () => {
        basePage.visitFS()
        basePage.MyTypeChoice('Я турист')
        booking.ChoosePlusTreeMounthDate()
        basePage.Search()
        booking.WaitingResultOfSearch()
        booking.SearchNameOfHotel('Melissa Residence Boutique Hotel')
        booking.PutOfferIntoBasket(0)
        booking.ChooseBaseFlight()
        cy.get('#email').type('testfs8@yandex.ru')
        cy.get('#password').type('123456')
        cy.get(':nth-child(5) > .new-button').click()


    })
})