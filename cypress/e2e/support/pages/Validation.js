export class Validation {

    BasketValidationEmptyFieldError() {
        cy.get('[class="form__field-error"]').contains('Имя не может быть пустым').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Фамилия не может быть пустой').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Дата рождения не может быть пустой').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Серия документа не может быть пустой').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Номер документа не может быть пустым').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Номер документа не может быть пустым').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Дата рождения не может быть пустой').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Серия документа не может быть пустой').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Номер документа не может быть пустым').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Дата окончания срока действия не может быть пустой').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Орган выдачи не может быть пустым').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Дата выдачи документа не может быть пустой').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Адрес не может быть пустым').should('be.visible')
    }
    BasketPrintWrongDate() {
        cy.get(':nth-child(2) > .traveller-box > .traveller-data > :nth-child(4) > #firstNameLatin').type('фвц')
        cy.get(':nth-child(2) > .traveller-box > .traveller-data > :nth-child(5) > #lastNameLatin').type('фвц')
        cy.get('#birthDay0 > .mx-datepicker > .mx-input-wrapper > .form__group > #date').type('12.12.2222')
        cy.get(':nth-child(2) > .traveller-box > .traveller-data > :nth-child(7) > #series').type('фвц')
        cy.get(':nth-child(2) > .traveller-box > .traveller-data > :nth-child(8) > #number').type('AAS123')
        cy.get('#expirationDate > .mx-datepicker > .mx-input-wrapper > .form__group > #date').type('10082020')
        cy.get(':nth-child(2) > .traveller-box > .traveller-data > .buyer-info > .v-contact > .mail-field > #email')
        cy.get('#firstName').type('asd')
        cy.get('#lastName').type('asd')
        cy.get('#middleName').type('asd')
        cy.get(':nth-child(4) > #series').type('as')
        cy.get(':nth-child(5) > #number').type('as')
        cy.get('#issueDate0 > .mx-datepicker > .mx-input-wrapper > .form__group > #date').type('11.112030')
        cy.get('#address').type("адрес")
    }
    BasketValidationWrongDateFieldError() {
        cy.get('[class="form__field-error"]').contains('Имя должно содержать только латиницу').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Фамилия должна содержать только латиницу').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Дата рождения не может быть больше текущей').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Серия паспорта должна содержать 2 цифры').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Номер паспорта должна содержать 7 цифр').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Дата окончания срока действия не может быть меньше текущей').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Имя должно содержать только кириллицу').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Фамилия должна содержать только кириллицу').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Отчество должно содержать только кириллицу').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Серия паспорта должна содержать 4 цифры').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Номер паспорта должно содержать только цифры и заглавные латинские буквы').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Дата выдачи документа не может быть больше текущей').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Заполните данные по туристам').should('be.visible')
        cy.get('[class="form__field-error"]').contains('Нужно согласиться с политикой обработки персональных данных ').should('be.visible')
    }

}

export const validation = new Validation()