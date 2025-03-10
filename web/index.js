const questionTextBox = document.getElementById("question");

document.addEventListener('keydown', async function(event){
    if(event.key !== "Enter")
        return;

    event.preventDefault();
    
    if(!askeable)
        return;

    disableElement("askButton",true);
    await run();
    disableElement("askButton",false);

});

let askeable = true;

function disableElement(elementId, flag)
{
    const element = document.getElementById(elementId);
    if(!element)
        return;

    askeable = !flag;

    if(flag)
        element.setAttribute("disabled", flag);
    else 
        element.removeAttribute("disabled");
}