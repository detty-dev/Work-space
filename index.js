const chatter = document.getElementById("chatter")
const deleteBtn = document.getElementById("delete-btn")
const contentLogin = document.getElementById("content-login")
const modalText = document.getElementById("modal-text")
const modalChoiceBtns = document.getElementById("modal-choice-btns")
const modalDecline = document.getElementById("modal-decline")


setTimeout(function() {
    chatter.style.display='inline'
}, 1500)


deleteBtn.addEventListener("click", function() {
    chatter.style.display="none" 
})

contentLogin.addEventListener("submit", function(e) {
    e.preventDefault()
    const contentLoginData = new FormData(contentLogin)
    const fullName = contentLoginData.get("fullName")
    deleteBtn.disabled= true
    modalText.innerHTML =  `
    <div class="modal-inner-loading">
        <div class="loading"></div>
        <p id="upload-text">
            Uploading your data to the dark web...
        </p>
    </div>`   

    setTimeout(function() {
        document.getElementById("upload-text").innerText = `Making the sale`
}, 1500)

    setTimeout(function(){
    deleteBtn.disabled = false
    document.getElementById('caution-container').innerHTML = `
    <h2>Thanks <span class="modal-display-name">${fullName}</span> you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="image/work.jpg>
    </div>
    ` 
    }, 3000)
})

modalDecline.addEventListener("mouseenter", function() {
    modalChoiceBtns.classList.toggle("modal-choice-btns-reverse")
})
  




       

