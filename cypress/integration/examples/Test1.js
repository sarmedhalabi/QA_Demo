describe(' my first test case', function(){

    it('my first test case',function(){


        cy.visit("https://www.amazon.com/")
        cy.get('#twotabsearchtextbox').type('cars')

        cy.get('#nav-search-submit-button').click()




    }





    )







    
})
