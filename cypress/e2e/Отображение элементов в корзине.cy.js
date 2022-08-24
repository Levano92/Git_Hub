/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
import { basePage } from "./support/pages/BasePage"
import { booking } from "./support/pages/Booking"


describe('empty spec', () => {

    it('Отображение элементов в корзине', () => {
        basePage.visitFS()
        basePage.MyTypeChoice('Я турист')
        basePage.Login('testfs8@yandex.ru', '123456')
        booking.ChoosePlusTreeMounthDate()
        booking.ChooseOneTourist()
        basePage.Search()
        booking.WaitingResultOfSearch()
        booking.SearchNameOfHotel('Melissa Residence Boutique Hotel')
        booking.PutOfferIntoBasket(0)
        cy.get('.hotel-cart').should('be.visible')
        cy.get('.hotel-img-object').should('be.visible')
        cy.get('.hotel-name').should('be.visible')
        cy.get('.hotel-cart > :nth-child(3) > :nth-child(1)').should('be.visible')
        cy.get('.tour-food').should('be.visible')
        cy.get('.booking-actual-price').should('be.visible')
        cy.get('.price-time').should('be.visible')
        cy.get('.price-time > .v-icon-clock-3').should('be.visible')
        cy.contains('Выбор рейса').should('be.visible')
        cy.get('.bookingFly > :nth-child(2) > :nth-child(2)').should('be.visible')
        cy.get('.bookingFly > :nth-child(2) > :nth-child(1)').should('be.visible')
        cy.get('.bookingFly__main > .active').should('be.visible')
        booking.ChooseBaseFlight()
        cy.get('.booking-status-bar').should('be.visible')
        cy.get(':nth-child(2) > .traveller-box').should('be.visible')
        cy.get('[data-v-ae7d717a=""] > :nth-child(3)').should('be.visible')
        cy.contains('Согласен с политикой политикой обработки персональных данных и пользовательским соглашением').should('be.visible')


        cy.get('.booking-status-bar').should('be.visible')
        cy.get('.traveller-box').should('be.visible')
        cy.get('[data-v-ae7d717a=""] > :nth-child(3)').should('be.visible')
        cy.get('.end-tourist-box > .price-box').should('be.visible')
        cy.get('.v-button').should('be.visible')
        cy.get('.booking-bar-bottom')
        cy.get('[class="v-footer-menu"]').contains('Проверить статус путёвки')
            .should('have.attr', 'href', 'https://fstravel.com/privacy-policy-personal-data')




    })
})