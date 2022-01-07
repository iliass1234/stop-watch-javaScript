let text = document.getElementById('interpreter')


class Interpreter{
    read(inputField){
        let code = inputField.value 

        if(/ktab\(/.test(code)){
            let txt = code.match(/(?=ktab\()\w+(?<= \=)/)
            return txt[0]
         }
    }
}
let interp = new Interpreter()
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 13) {
        text.value ='hello'
    }
});

interp.read(text.value)
