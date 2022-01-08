let text = document.getElementById('stop-watch')




function action(event) {
    if(event.keyCode == 13) {
        text.placeholder ='hello'
        text.value = text.placeholder
    }}

document.addEventListener('keydown', action);


