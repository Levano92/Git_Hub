export class Booking {
    ChoosePlusTreeMounthDate() {
        cy.get('.calendar__field').click()
        cy.get('[for="checkbox"]').click()
        cy.get('[class="calendar-popup__arrow-right"]').click().click()
        cy.get(':nth-child(2) > .calendar-popup__month-body > :nth-child(2) > :nth-child(12)').click()
    }

    ChooseCountryDirection(Country) {
        cy.get('.v-input__wrap > input').clear().click().type(Country)
    }
    ChooseOneTourist() {
        cy.get('[class="v-tourists__pinput"]').click()
        cy.get('.v-icon-minus_square').click()
    }
    AddОneCHD() {
        cy.contains('Добавить ребёнка').click()
        cy.contains('9 лет').click()
    }

    AddОneInfant() {
        cy.contains('Добавить ребёнка').click()
        cy.contains('Меньше 2 лет').click({ force: true })
    }


    WaitingResultOfSearch() {
        cy.contains('Стоимость', { timeout: 200000 }).should('be.visible')
    }
    SearchNameOfHotel(hotelName) {
        cy.get(':nth-child(2) > .v-input > .v-input__wrap > input').type(hotelName)
        cy.contains(hotelName).click()
    }
    PutOfferIntoBasket(OfferNumber) {
        cy.contains("В корзину", { timeout: 100000 }).eq(OfferNumber).click()
        cy.url({ timeout: 100000 }).should('include', '/booking', { timeout: 100000 })
        cy.contains('В тур включено', { timeout: 100000 }).should('be.visible')
    }
    PutOfferHotelIntoBasket(OfferNumber) {
        cy.contains("В корзину", { timeout: 100000 }).eq(OfferNumber).click()
        cy.url({ timeout: 100000 }).should('include', '/booking', { timeout: 100000 })
        cy.contains('В пакет включено', { timeout: 100000 }).should('be.visible')
    }

    ChooseBaseFlight() {
        cy.contains('Продолжить').click()

    }

    ChangeFlight() {
        cy.contains('Выбрать перелет').click()
        cy.wait(500)
        cy.contains('Продолжить', { timeout: 100000 }).click()

    }


    ChooseThirdFaceBayer() {
        cy.get(':nth-child(3) > .traveller-head > .buyer-box > .buyer-switcher').click()
    }

    AgreementCheck() {
        cy.get('[id="pay-agree"]').click({ force: true })
    }

    Booking() {
        cy.get('.v-button').click()
    }

    Paybottom() {
        cy.contains('Ваш тур успешно забронирован', { timeout: 200000 }).should('be.visible', { timeout: 200000 })

    }

    CheckFlightType() {

        cy.get('[class="v-fly-icon-block v-ml-4"]').eq(0).then(($body) => {
            if ($body.text().includes('Р')) {
                const FlightType = "GDS"
            } else {
                const FlightType = "Charter"
            }
            return FlightType
        })
    }
}

export const booking = new Booking()
