/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
import { basePage } from "./support/pages/BasePage"
import { booking } from "./support/pages/Booking"
import { validation } from "./support/pages/Validation"

describe('empty spec', () => {

    it('Валидация полей в корзине', () => {
        //basePage.visitFS()
        basePage.visitFS()
        basePage.MyTypeChoice('Я турист')
        basePage.Login('testfs8@yandex.ru', '123456')
        booking.ChoosePlusTreeMounthDate()
        booking.ChooseOneTourist()
        basePage.Search()
        booking.WaitingResultOfSearch()
        booking.SearchNameOfHotel('Melissa Residence Boutique Hotel')
        booking.PutOfferIntoBasket(0)
        booking.ChooseBaseFlight()
        booking.Booking()
        validation.BasketValidationEmptyFieldError()
        validation.BasketPrintWrongDate()
        validation.BasketValidationWrongDateFieldError()
    })
})