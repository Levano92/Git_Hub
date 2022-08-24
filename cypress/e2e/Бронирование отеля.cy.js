/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
import { basePage } from "./support/pages/BasePage"
import { booking } from "./support/pages/Booking"
import { pasportDateGaneration } from "./support/pages/PasportDateGaneration"

describe('empty spec', () => {

    it('Бронирование отеля', () => {
        basePage.visitFS()
        basePage.MyTypeChoice('Я турист')
        basePage.Login('testfs8@yandex.ru', '123456')
        cy.contains('Отели').click()
        booking.ChoosePlusTreeMounthDate()
        booking.ChooseOneTourist()
        basePage.Search()
        booking.WaitingResultOfSearch()
        booking.SearchNameOfHotel('Melissa Residence Boutique Hotel')
        booking.PutOfferHotelIntoBasket(0)
        cy.get('.pay-btn').click()
        booking.ChooseThirdFaceBayer()
        pasportDateGaneration.DateWithOneTouristInBookingForrenGDS()
        booking.Booking()



    })
})