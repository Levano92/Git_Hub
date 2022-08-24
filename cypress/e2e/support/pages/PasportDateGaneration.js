function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}
export class PasportDateGaneration {

    DateWithOneTouristInBookingRusGDS() {

        var rusName = new Array(
            "Александр",
            "Дмитрий",
            "Максим",
            "Сергей",
            "Андрей",
            "Алексей",
            "Артём",
            "Илья",
            "Кирилл",
            "Михаил",
            "Никита",
            "Матвей",
            "Роман",
            "Егор",
            "Арсений",
            "Иван",
            "Денис",
            "Евгений",
            "Даниил",
            "Тимофей"
        )
        var rusSurname = new Array(
            "Иванов",
            "Смирнов",
            "Кузнецов",
            "Попов",
            "Васильев",
            "Петров",
            "Соколов",
            "Михайлов",
            "Новиков",
            "Федоров",
            "Морозов",
            "Волков",
            "Алексеев",
            "Лебедев",
            "Семенов",
            "Егоров",
            "Павлов",
            "Козлов",
            "Степанов",
            "Николаев",
        )
        var Patronymic = new Array(
            "Александрович",
            "Дмитриевич",
            "Максимович",
            "Сергеевич",
            "Андреевич",
            "Алексеевич",
            "Артемович",
            "Ильич",
            "Кириллович",
            "Михаилович",
            "Никитович",
            "Матвеевич",
            "Романович",
            "Егорович",
            "Арсениевич",
            "Иванович",
            "Денисович",
            "Евгениевич",
            "Даниилович",
            "Тимофеевич"
        )
        var lengthofName = rusName.length



        cy.get(':nth-child(4) > #firstName').type(rusName[getRandomInt(0, lengthofName)])
        cy.get(':nth-child(5) > #lastName').type(rusSurname[getRandomInt(0, lengthofName)])
        cy.get(':nth-child(6) > #middleName').type(Patronymic[getRandomInt(0, lengthofName)])
        cy.get('#birthDay0 > .mx-datepicker > .mx-input-wrapper > .form__group > #date').type('2503').type(getRandomInt(1970, 2000))
        cy.get(':nth-child(8) > #series').type(getRandomInt(1111, 9999))
        cy.get(':nth-child(9) > #number').type(getRandomInt(111111, 999999))
        cy.get(':nth-child(2) > .traveller-box > .traveller-data > .buyer-info > .v-contact > .phone-field > .vue-tel-input > .vti__input').type('9199950953')

        cy.get(':nth-child(1) > #firstName').type('Тест')
        cy.get(':nth-child(2) > #lastName').type('Тест')
        cy.get(':nth-child(3) > #middleName').type('Тест')
        cy.get('#birthDay > .mx-datepicker > .mx-input-wrapper > .form__group > #date').type('25031992')
        cy.get(':nth-child(7) > #series').type('1234')
        cy.get(':nth-child(8) > #number').type('123456')
        cy.get('#issuingAuthority').type('УФМС')
        cy.get('#issueDate > .mx-datepicker > .mx-input-wrapper > .form__group > #date').type('20032010')
        cy.get('#address').type('тестовый адрес')
        cy.get(':nth-child(3) > .traveller-data > .buyer-info > .v-contact > .phone-field > .vue-tel-input > .vti__input').type('9199950953')


    }

    DateWithOneTouristInBookingForrenGDS() {

        var Name = new Array(
            "Jacob",
            "Michael",
            "Joshua",
            "Matthew",
            "Ethan",
            "Andrew",
            "Daniel",
            "William",
            "Joseph",
            "Christopher",
            "Anthony",
            "Ryan",
            "Nicholas",
            "David",
            "Alexander",
            "Tyler",
            "James",
            "John",
            "Dylan",
            "Nathan",
        )
        var Surname = new Array(
            "Johnson",
            "Williams",
            "Jones",
            "Brown",
            "Davis",
            "Miller",
            "Wilson",
            "Moore",
            "Taylor",
            "Anderson",
            "Thomas",
            "Jackson",
            "White",
            "Harris",
            "Martin",
            "Thompson",
            "Garcia",
            "Martinez",
            "Robinson",
        )
        var lengthofName = Name.length




        cy.get(':nth-child(2) > .traveller-box > .traveller-data > :nth-child(4) > #firstNameLatin').type(Name[getRandomInt(0, lengthofName)])
        cy.get(':nth-child(2) > .traveller-box > .traveller-data > :nth-child(5) > #lastNameLatin').type(Surname[getRandomInt(0, lengthofName)])
        cy.get('#birthDay0 > .mx-datepicker > .mx-input-wrapper > .form__group > #date').type('2503').type(getRandomInt(1970, 2000))
        cy.get(':nth-child(2) > .traveller-box > .traveller-data > :nth-child(7) > #series').type(getRandomInt(11, 99))
        cy.get(':nth-child(2) > .traveller-box > .traveller-data > .buyer-info > .v-contact > .phone-field > .vue-tel-input > .vti__input').type('9199950953')
        cy.get(':nth-child(2) > .traveller-box > .traveller-data > :nth-child(8) > #number').type(getRandomInt(1111111, 9999999))
        cy.get('#expirationDate > .mx-datepicker > .mx-input-wrapper > .form__group > #date').type('0203').type(getRandomInt(2030, 2035))


        cy.get(':nth-child(1) > #firstName').type('Тест')
        cy.get(':nth-child(2) > #lastName').type('Тест')
        cy.get(':nth-child(3) > #middleName').type('Тест')
        cy.get('#birthDay > .mx-datepicker > .mx-input-wrapper > .form__group > #date').type('25031992')
        cy.get(':nth-child(3) > .traveller-data > :nth-child(7) > #series').type('1234')
        cy.get(':nth-child(3) > .traveller-data > :nth-child(8) > #number').type('123456')
        cy.get('#issuingAuthority').type('УФМС')
        cy.get('#issueDate > .mx-datepicker > .mx-input-wrapper > .form__group > #date').type('20032010')
        cy.get('#address').type('тестовый адрес')
        cy.get(':nth-child(3) > .traveller-data > .buyer-info > .v-contact > .phone-field > .vue-tel-input > .vti__input').type('9199950953')


    }
    DateWithOneTouristInBookingForrenCharter() {

        var Name = new Array(
            "Jacob",
            "Michael",
            "Joshua",
            "Matthew",
            "Ethan",
            "Andrew",
            "Daniel",
            "William",
            "Joseph",
            "Christopher",
            "Anthony",
            "Ryan",
            "Nicholas",
            "David",
            "Alexander",
            "Tyler",
            "James",
            "John",
            "Dylan",
            "Nathan",
        )
        var Surname = new Array(
            "Johnson",
            "Williams",
            "Jones",
            "Brown",
            "Davis",
            "Miller",
            "Wilson",
            "Moore",
            "Taylor",
            "Anderson",
            "Thomas",
            "Jackson",
            "White",
            "Harris",
            "Martin",
            "Thompson",
            "Garcia",
            "Martinez",
            "Robinson",
        )
        var lengthofName = Name.length


        cy.get(':nth-child(2) > .traveller-box > .traveller-data > :nth-child(4) > #firstNameLatin').type(Name[getRandomInt(0, lengthofName)] + 'test')
        cy.get(':nth-child(2) > .traveller-box > .traveller-data > :nth-child(5) > #lastNameLatin').type(Surname[getRandomInt(0, lengthofName)] + 'test')
        cy.get('#birthDay0 > .mx-datepicker > .mx-input-wrapper > .form__group > #date').type('2503').type(getRandomInt(1970, 2000))
        cy.get(':nth-child(2) > .traveller-box > .traveller-data > :nth-child(7) > #series').type(getRandomInt(11, 99))
        cy.get(':nth-child(2) > .traveller-box > .traveller-data > .buyer-info > .v-contact > .phone-field > .vue-tel-input > .vti__input').type('9199950953')
        cy.get(':nth-child(2) > .traveller-box > .traveller-data > :nth-child(8) > #number').type(getRandomInt(1111111, 9999999))
        cy.get('#expirationDate > .mx-datepicker > .mx-input-wrapper > .form__group > #date').type('0203').type(getRandomInt(2030, 2035))

        cy.get(':nth-child(1) > #firstName').type('Тест')
        cy.get(':nth-child(2) > #lastName').type('Тест')
        cy.get(':nth-child(3) > #middleName').type('Тест')
        cy.get('#birthDay > .mx-datepicker > .mx-input-wrapper > .form__group > #date').type('25031992')
        cy.get(':nth-child(3) > .traveller-data > :nth-child(7) > #series').type('1234')
        cy.get(':nth-child(3) > .traveller-data > :nth-child(8) > #number').type('123456')
        cy.get('#issuingAuthority').type('УФМС')
        cy.get('#issueDate > .mx-datepicker > .mx-input-wrapper > .form__group > #date').type('20032010')
        cy.get('#address').type('тестовый адрес')
        cy.get(':nth-child(3) > .traveller-data > .buyer-info > .v-contact > .phone-field > .vue-tel-input > .vti__input').type('9199950953')


    }

}

export const pasportDateGaneration = new PasportDateGaneration()