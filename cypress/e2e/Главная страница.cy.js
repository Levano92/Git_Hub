Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
import "cypress-real-events/support";
import "cypress-localstorage-commands";
import { basePage } from "./support/pages/BasePage"
import { booking } from "./support/pages/Booking"
import { pasportDateGaneration } from "./support/pages/PasportDateGaneration"
//import { get } from "cypress/types/lodash";

describe("Главная страца (тело)", function () {
    beforeEach(() => {
        basePage.visitFS()
        basePage.MyTypeChoice('Я турист')



    })



    /*it("Главный баннер", function () {

        cy.get('.slick-active > :nth-child(1) > .item-slider-container > .slide-photo').should('be.visible')
        cy.get('.slick-active > :nth-child(1) > .item-slider-container > .slide-photo')
            .realHover('mouse')
            .get('[class="arrow-slider"]')
            .should('be.visible')
        cy.get('.pagination-slider > :nth-child(3)').click()
        cy.get('[class="arrow-next"]').click()
        cy.get('[class="arrow-prev"]').invoke('show').click()

        //Статичные баннеры
        cy.get('.small-photo-up').should('be.visible')
        cy.get('.small-photo-down').should('be.visible')

    })*/

    it("Открытые направления", function () {

        cy.contains('Открытые направления').should('be.visible')
        cy.get('.open-destinations-wrapper > .wrapper-link > .v-text-18').should('be.visible')
        cy.get('.open-destinations-grid').should('be.visible')
        cy.get('.tile_0 > .open-destinations-grid__tile-content > h2').should('be.visible')
        cy.get('.tile_0 > .open-destinations-grid__tile-content > .content__price').should('be.visible')



    })
    it("Популярные категории", function () {
        cy.setLocalStorage('dq_user_type', 'client');
        cy.get('[class="v-slider__body"]').should('be.visible')
        cy.get(':nth-child(1) > .popularCategories__item-icon').click()
        cy.url().should('include', '/searchtour')
        cy.go('back')

        cy.get(':nth-child(2) > .popularCategories__item-icon').click()
        cy.url().should('include', '/searchhottours')
        cy.go('back')


        cy.get(':nth-child(3) > .popularCategories__item-icon')
            .should('have.attr', 'href', 'https://fsego.com/')


        cy.get(':nth-child(4) > .popularCategories__item-icon').click()
        cy.url().should('include', '/searchhotel')
        cy.go('back')

        cy.get(':nth-child(5) > .popularCategories__item-icon').click()
        cy.url().should('include', '/sanatorii')
        cy.get('.v-logo-block > a.v-logo > .v-logo').click()

        cy.get(':nth-child(6) > .popularCategories__item-icon').click()
        cy.url().should('include', '/searchservices')
        cy.go('back')



        cy.get(':nth-child(7) > .popularCategories__item-icon')
            .should('have.attr', 'href', 'https://fstravel.com/searchcruises')

        cy.get(':nth-child(8) > .popularCategories__item-icon').click()
        cy.url().should('include', '/searchautotour')
        cy.go('back')






    })
    it("Блок Отели с форматами отдыха FUN&SUN", function () {
        cy.setLocalStorage('dq_user_type', 'client');
        cy.scrollTo(0, 1500)
        cy.get('.desktop__link > .wrapper-link > .v-text-18')
            .should('be.visible')
        cy.get('.tile__0 > .tile-card > .tile-card-wrapper > .tile-card-wrapper__link > .tile-card-wrapper__substrate > .tile-card-wrapper__image').click()
        cy.url().should('include', '/funsun-premium-hotels')
        cy.go('back')

        cy.get('.tile__1 > .tile-card > .tile-card-wrapper > .tile-card-wrapper__link > .tile-card-wrapper__substrate > .tile-card-wrapper__image').click()
        cy.url().should('include', '/funsun-family-hotels')
        cy.go('back')

        cy.get('.tile__2 > .tile-card > .tile-card-wrapper > .tile-card-wrapper__link > .tile-card-wrapper__substrate > .tile-card-wrapper__image').click()
        cy.url().should('include', '/funsun-active-hotels')
        cy.go('back')

        cy.get('.tile__3 > .tile-card > .tile-card-wrapper > .tile-card-wrapper__link > .tile-card-wrapper__substrate > .tile-card-wrapper__image').click()
        cy.url().should('include', '/funsun-smart-hotels')
        cy.go('back')

        cy.get('.tile__4 > .tile-card > .tile-card-wrapper > .tile-card-wrapper__link > .tile-card-wrapper__substrate > .tile-card-wrapper__image').click()
        cy.url().should('include', '/funsun-toucan-hotels')
        cy.go('back')

        cy.get('.tile__5 > .tile-card > .tile-card-wrapper > .tile-card-wrapper__link > .tile-card-wrapper__substrate > .tile-card-wrapper__image').click()
        cy.url().should('include', '/funsun-ski-hotels')
        cy.go('back')

    })
    /*it("Горящие туры этой недели", function () {
    
        cy.contains('Горящие туры этой недели').should('be.visible')
        cy.get('.burning').should('be.visible')
        cy.get('.burning__tours').should('be.visible')
    
     })*/
    it("Блок FUN&SUN рекомендует", function () {
        //cy.get('.v-icon-arrow_up-2').click()
        cy.scrollTo(0, 3500)
        cy.contains('FUN&SUN рекомендует').should('be.visible')
        cy.contains('Скидки от партнеров').should('be.visible')
        cy.contains('Воспользуйтесь скидками на товары и услуги от наших партнеров').should('be.visible')
        cy.contains('Только между нами').should('be.visible')
        cy.contains('Ищите секретные предложения в телеграм-канале FUN&SUN').should('be.visible')
        cy.contains('FUN&SUN FRIENDS').should('be.visible')
        cy.contains('Программа лояльности: копите баллы и оплачивайте ими поездки ').should('be.visible')
        cy.contains('Отправляйтесь за впечатлениями на Камчатку, Сахалин, Байкал, в Казань ').should('not.be.visible')
        cy.get('.staticRecommends > .theme-black > .v-slider > .v-slider__header > .v-slider__arrow-block > .v-slider__arrow-right').click()
        cy.contains('Туры по России').should('be.visible')
        cy.contains('Отправляйтесь за впечатлениями на Камчатку, Сахалин, Байкал, в Казань ').should('be.visible')



    })
    it("Блок Отели без перелёта", function () {

        cy.scrollTo(0, 0)
        cy.scrollTo(0, 3100)
        cy.contains('Отели без перелёта').should('be.visible')
        cy.get('.best-offers-wrapper__tags').should('be.visible')
        cy.get('.v-slider__body').should('be.visible')

    })

    it("Блок Что вы получаете, бронируя онлайн", function () {
        cy.get('.advantages').should('be.visible')
        cy.get('.advantages__blocks > :nth-child(1) > .svg-sprite')
        cy.get('.advantages__blocks > :nth-child(2) > .svg-sprite')
        cy.get('.advantages__blocks > :nth-child(3) > .svg-sprite')
        cy.get('.advantages__blocks > :nth-child(4) > .svg-sprite')
        cy.contains('Безопасная сделка').should('be.visible')
        cy.contains('FUN&SUN — надёжный туроператор с безупречной репутацией, а все банковские операции и онлайн-платежи на сайте защищены').should('be.visible')
        cy.contains('Скорость и удобство').should('be.visible')
        cy.contains('Никаких поездок в офис и ожиданий в очередях: можно сравнить предложения самостоятельно за чашечкой утреннего кофе').should('be.visible')
        cy.contains('Выгодная цена').should('be.visible')
        cy.contains('Акции и горящие туры отображаются на сайте в реальном времени, так что тур можно выкупить на более выгодных условиях').should('be.visible')
        cy.contains('Поддержка 24/7').should('be.visible')
        cy.contains('При бронировании тура онлайн за вами закрепляется персональный менеджер, который сможет помочь в любой ситуации').should('be.visible')
        //cy.get('.best-offers > .theme-black > .v-slider > .v-slider__header > .v-slider__arrow-block > .v-slider__arrow-right').click()
        //cy.get('.best-offers > .theme-black > .v-slider > .v-slider__header > .v-slider__arrow-block > .v-slider__arrow-left').click()
    })

    it("Блок Лучшие акции недели", function () {
        cy.contains('Лучшие акции недели').should('be.visible')
        cy.get('.v-slider__body').should('be.visible')
        cy.get('.best-week > .theme-black > .v-slider > .v-slider__header > .v-slider__arrow-block > .v-slider__arrow-right').click()
        cy.get('.best-week > .theme-black > .v-slider > .v-slider__header > .v-slider__arrow-block > .v-slider__arrow-left').click()

    })

    it("Блок Баннер на всю ширину", function () {
        cy.scrollTo(0, 0)
        cy.scrollTo(0, 4000)
        cy.get('.slider-active > .slide-photo').should('be.visible')
        cy.get('.next-slider').click()
        cy.get('.previous-slider').click()

    })

    it("Блок Сделайте свое путешествие комфортнее", function () {
        cy.contains("Сделайте свое путешествие комфортнее").should('be.visible')
        cy.setLocalStorage('dq_user_type', 'client');
        cy.contains('Все услуги').click()
        cy.url().should('include', '/searchservices')
        cy.go('back')

        cy.contains('Страховка').click()
        cy.url().should('include', '/searchinsurances')
        cy.go('back')

        cy.contains('Услуги на борту самолета').click()
        cy.url().should('include', '/on-board-services')
        cy.go('back')

        cy.contains('Свадебные церемонии').click()
        cy.url().should('include', '/wedding-ceremonies')
        cy.go('back')

        cy.contains('ПЦР-тест').click()
        cy.url().should('include', '/searchlaboratorytest')
        cy.go('back')

        cy.contains('Аренда яхт')
            .should('have.attr', 'href', 'https://www.boataround.com/ru?ref_afi=tui-ru&utm_campaign=aff_partner_&utm_medium=referral&utm_source=www.tui.ru')


    })



    /*it("Блок Эксклюзивные маршруты по России", function () {
        
     
    })*/

    it("Блок Реклама мобильного приложения", function () {
        cy.scrollTo(0, 0)
        cy.scrollTo(0, 4500)
        cy.get('.application').should('be.visible') //дописать наведение

    })

    /*it("Блок Эксклюзивные маршруты по России", function () {
     
     
    })*/

    it("Блок FUN&SUN Expert", function () {
        cy.contains('Советы экспертов по путешествиям в журнале').should('be.visible')

    })

})