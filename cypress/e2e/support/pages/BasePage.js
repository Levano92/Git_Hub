export class BasePage {
    visitFS() {
        //cy.visit('https://fstravel.com/')
        cy.visit('https://fstravel.com/')
    }

    Login(email, pass) {
        cy.get('span[class="v-icon-user-14"]').click()
        cy.get('input[id="email"]').type(email)
        cy.get('input[id="password"]').type(pass)
        cy.get(':nth-child(5) > .new-button').click()
    }

    MyTypeChoice(Choice) {
        cy.contains(Choice).click()
    }

    Search() {
        cy.contains('Найти').click()
    }

}

export const basePage = new BasePage()