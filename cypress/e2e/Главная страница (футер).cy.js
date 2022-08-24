Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
import "cypress-real-events/support";
import "cypress-localstorage-commands";

describe('Scrolling', function () {
    it('Описание футера', function () {
        //cy.visit("https://unsplash.com/")
        cy.visit("https://prerelease.fstravel.com/")
        cy.get('[class="v-footer-menu"]').contains('Информация').should('be.visible')
        cy.get('[class="v-footer-menu"]').contains('Отдых').should('be.visible')
        cy.get('[class="v-footer-menu"]').contains('FUN&SUN Market: товары').should('be.visible')
        cy.get('[class="v-footer-menu"]').contains('Для мобильных устройств').should('be.visible')
        
        cy.get('[class="v-footer-menu"]').contains('Акции')
            .should('have.attr', 'href', '/actions')
        cy.get('[class="v-footer-menu"]').contains('Обратиться в службу безопасности')
            .should('have.attr', 'href', 'https://fstravel.com/sob')
        cy.get('[class="v-footer-menu"]').contains('Обратиться в юридический отдел')
            .should('have.attr', 'href', 'https://fstravel.com/dlya-tex-kto-xocet-obratitsya-v-yuridiceskii-otdel')
        cy.get('[class="v-footer-menu"]').contains('Оставить отзыв об отдыхе')
            .should('have.attr', 'href', 'https://fstravel.com/os')
        cy.get('[class="v-footer-menu"]').contains('Равнозначный турпродукт')
            .should('have.attr', 'href', 'https://fstravel.com/informaciya-o-predostavlenii-ravnoznacnogo-turistskogo-produkta')
        cy.get('[class="v-footer-menu"]').contains('Контакты')
            .should('have.attr', 'href', 'https://fstravel.com/kontakty/centralnyi-ofis')
        cy.get('[class="v-footer-menu"]').contains('Офисы продаж')
            .should('have.attr', 'href', 'https://fstravel.com/offices')
        cy.get('[class="v-footer-menu"]').contains('Страхование')
            .should('have.attr', 'href', 'https://fstravel.com/straxovanie')
        cy.get('[class="v-footer-menu"]').contains('Программа лояльности')
            .should('have.attr', 'href', 'https://fstravel.com/friends')
        cy.get('[class="v-footer-menu"]').contains('Страны')
            .should('have.attr', 'href', 'https://fstravel.com/countries')
        cy.get('[class="v-footer-menu"]').contains('Каталоги')
            .should('have.attr', 'href', 'https://fstravel.com/catalogs')
        cy.get('[class="v-footer-menu"]').contains('Проверить статус путёвки')
            .should('have.attr', 'href', 'https://fstravel.com/statuscheck')

        cy.get('[class="v-footer-menu"]').contains('Пользовательское соглашение')
            .should('have.attr', 'href', 'https://fstravel.com/agreement')
        cy.get('[class="v-footer-menu"]').contains('Возврат товаров')
            .should('have.attr', 'href', 'https://fstravel.com/vozvrat_tovarov')
        cy.get('[class="v-footer-menu"]').contains('Как стать партнёром')
            .should('have.attr', 'href', 'https://fstravel.com/partneram')
        cy.get('[class="v-footer-menu"]').contains('Сайт FUN&SUN Market')
            .should('have.attr', 'href', 'https://fstravel.com/market')

        cy.get('[class="v-footer-privacy"]').contains('Представленная на сайте информация носит справочный характер и не является публичной офертой. FUN&SUN — ведущий туроператор в России и СНГ. © 2022, FUN&SUN').should('be.visible')
        cy.get('[class="v-footer-menu"]').contains('Сайт FUN&SUN Market')
            .should('have.attr', 'href', 'https://fstravel.com/market')

        cy.contains('Правовая информация')
            .should('have.attr', 'href', 'https://prerelease.fstravel.com/funsun-soglasie-na-obrabotku-personalnyx-dannyx')




    })
})