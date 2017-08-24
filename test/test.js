const expect = require('chai').expect
const jsconvert = require('..').default

describe('#jsconvert', function(){
    it('Si la palabra termina con "ar", se le quitan esas dos letras', function(){
        const translation = jsconvert("Programar")
        expect(translation).to.equal("Program")
    })

    it('Si la palabra inicia con Z, se le añade "pe" al final', function(){
        const translation = jsconvert("Zorro")
        const translation2 = jsconvert("Zarpar")
    
        expect(translation).to.equal("Zorrope")
        expect(translation2).to.equal("Zarppe")
    })

    it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio', function(){
        const translation = jsconvert("abecedario")
        expect(translation).to.equal("abece-dario")
    })

    it('Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', function(){
        const translation = jsconvert("sometemos")
        expect(translation).to.equal("SoMeTeMoS")
    })
})