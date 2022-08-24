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

  it('Бронирование тура 1 турист (Melissa Residence Boutique Hotel)', () => {
    basePage.visitFS()
    basePage.MyTypeChoice('Я турист')
    basePage.Login('testfs8@yandex.ru', '123456')
    booking.ChoosePlusTreeMounthDate()
    booking.ChooseOneTourist()
    basePage.Search()
    booking.WaitingResultOfSearch()
    booking.SearchNameOfHotel('Melissa Residence Boutique Hotel')

    cy.get('[class="v-fly-icon-block v-ml-4"]').eq(0).then(($body) => {
      if ($body.text().includes('Р')) {
        booking.PutOfferIntoBasket(0)
        booking.ChooseBaseFlight()
        booking.ChooseThirdFaceBayer()
        pasportDateGaneration.DateWithOneTouristInBookingForrenGDS()
      } else {
        booking.PutOfferIntoBasket(0)
        booking.ChooseBaseFlight()
        booking.ChooseThirdFaceBayer()
        pasportDateGaneration.DateWithOneTouristInBookingForrenCharter()
      }
    })
    booking.AgreementCheck()
    booking.Booking()
    booking.Paybottom()
  })
})