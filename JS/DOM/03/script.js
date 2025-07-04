//example 6
document.getElementById("clickMeButton").addEventListener("dblclick",function(){
    alert("chai")
});

//example 7
document.getElementById("teaList").addEventListener("click",function(event){
    if(event.target && event.target.matches(".teaItem")){
        alert("You selected:"+ event.target.textContent);
    }
    
});

//example 8

document.getElementById("feedbackForm").addEventListener("submit",function(event){
    event.preventDefault();
    let feedback=document.getElementById("feedbackInput").value;
    document.getElementById("feedbackDisplay").textContent=`Feedback is: ${feedback}`;

});

//example 9
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('domStatus').textContent="DOM fully loaded"
})

//example 10
document.getElementById("toggelHighlight").addEventListener("click",function(){
    let descriptionText=document.getElementById("descriptionText")
    // descriptionText.classList.add("highlight")
    descriptionText.classList.toggle("highlight")
})