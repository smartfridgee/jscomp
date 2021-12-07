let codeArea = document.getElementById('code-area');
let output = document.getElementById('output');
let shift = 0;

document.onkeydown = function (t) {
    if(t.which == 9){
        return false;
    }
}

document.addEventListener('keyup', event => {
    if(event.shiftKey) { shift = 1; setTimeout(function(){  shift = 0 },10);}
    if(shift === 1){
        switch(event.keyCode){
            case 219:
                codeArea.setRangeText("}");
                break;
            case 57:
                codeArea.setRangeText(")");
                break;
            case 222:
                codeArea.setRangeText('"');
                break;
        }
    }
    else{
        switch(event.keyCode){
            case 219:
                codeArea.setRangeText("]");
                break;
            case 222:
                codeArea.setRangeText("'");
                break;
            case 192:
                codeArea.setRangeText("`");
                break;
            case 36:
                document.body.classList.toggle("dark");
                if(sessionStorage.getItem('darkmode') == 1) { sessionStorage.setItem('darkmode', 0); }
                else{sessionStorage.setItem('darkmode', 1)};
                break;
            case 9:
                codeArea.setRangeText("");
                break;
        }
    }
})

function runCode(){
    try{
        output.value = eval(codeArea.value);
        output.classList.remove("red");
    }
    catch(e){
        output.value = e;
        output.classList.add("red");
    }

    sessionStorage.setItem('code', codeArea.value);
}

function onLoad(){
    if(sessionStorage.getItem('code')){
        codeArea.value = sessionStorage.getItem('code');
    }
    if(sessionStorage.getItem('darkmode') == 1){
        document.body.classList.toggle("dark");
    }
}

window.onload = onLoad;
