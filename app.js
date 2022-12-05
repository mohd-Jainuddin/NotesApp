let btn = document.querySelector("#btn");
let bigBox = document.querySelector("#bigBox");

const addNotes = (text="") => {
  let box = document.createElement("div");
  box.setAttribute("class","box")
  box.innerHTML = `<div class="bar">
                    <i class="fa-solid fa-floppy-disk save"></i>
                    <i class="fa-solid fa-trash delete"></i>
                  </div>
                  <textarea>${text}</textarea>`;
  bigBox.appendChild(box)   
  
  // Delete functionality.....
  box.querySelector(".delete").addEventListener("click",function(){
    box.remove();
    saveNotes()
  })

  // Save Functionality.....
  box.querySelector(".save").addEventListener("click",function(){
    saveNotes()
  }) 
};

const saveNotes = () => {
  let notes = document.querySelectorAll("textarea");
  const data = [];
  notes.forEach((note)=>{
    data.push(note.value)
  })
  localStorage.setItem("notes",JSON.stringify(data));
}


// Bottun Functionality........
btn.addEventListener("click", function () {
  addNotes();
});


// Always render

{
    function a(){
      const lsNotes = JSON.parse(localStorage.getItem("notes"));
      lsNotes.forEach((lsNote)=>{
        addNotes(lsNote)
      })
    }a()
}