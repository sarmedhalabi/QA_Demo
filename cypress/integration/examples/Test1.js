describe(' my first test case', function(){

    it.skip('my first test case',function(){


        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('input[type=search]').type('ca')
        cy .get('.products').find('.product').each(($el,index,$list)=>{
const textveg= $el.find('h4.product-name').text()

if( textveg.includes('Cauli')){

    $el.find('button').click()
    // adding a comment
}



        })
        




    }





    )







    
})
