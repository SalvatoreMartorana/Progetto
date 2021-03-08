'use strict';

function showProject() {
  const selected = document.querySelector('input[type="radio"]:checked');
  if(selected == null){
    alert("Seleziona un progetto.");
    return;
  }
  document.querySelector(".home-page").setAttribute("hidden", true);

  document.querySelector(".data-page").removeAttribute("hidden");

  const h1 = document.getElementById("projectname");

  h1.textContent = "Progetto: "+ selected.getAttribute("id");

}

function deleteProject() {
  const selected = document.querySelector('input[type="radio"]:checked');
  if(selected == null){
    alert("Seleziona un progetto.");
    return;
  }
  
  console.log("Cancello progetto");

}

function createProject() {
  console.log("crea progetto");

  document.querySelector(".home-page").setAttribute("hidden", true);

  document.querySelector(".new-page").removeAttribute("hidden");
}

function mainPage(){
  document.querySelector(".home-page").removeAttribute("hidden");

  /**
   * Contatto il server con GET e recupero:
   * ID dei progetti, utente ultima modifica, ultima modifica
   * 
   * Devo riempire la tabella 
   */
  const projects = [[123,"Animali", "user1", 12.30],
    [456, "Auto", "user2", 10.30],
    [789, "Scarpe", "user3", 9.30]
  ]; //in project inseriremo i dati recuperati dal server

  
  //Per ogni progetto recuperato inseriamo nella tabella i valori
  for(var i=0; i<projects.length; i++){
    const tbody = document.querySelector('#projectbody');
    const tr = document.createElement('tr');
    
    tr.setAttribute("id", projects[i][0]);
    tbody.appendChild(tr);
    
    var td = document.createElement('td');
    td.innerHTML = "<input type='radio' id="+ projects[i][1] + " name='project'>";
    tr.appendChild(td);

    for(var j=0; j<projects[0].length; j++){
      if(j<2){
        td = document.createElement('th');
      }
      else{
        td = document.createElement('td');  
      }
      td.textContent = projects[i][j];
      tr.appendChild(td);
    }
    
  }

  const updateBtn = document.getElementById("btn-update-project");
  updateBtn.addEventListener('click', showProject);

  const createBtn = document.getElementById("btn-create-project");
  createBtn.addEventListener('click', createProject);

  const deleteBtn = document.getElementById("btn-delete-project");
  deleteBtn.addEventListener('click', deleteProject);
}

/**
 * Funzione di associata al click sul bottone di Login
 * nella pagina iniziale.
 * questa sarà una get
 */
function login(){
  const inpUser = document.getElementById("user");
  const user = (inpUser.value || '').trim();
  
  const inpPsw = document.getElementById("pass");
  const psw = (inpPsw.value || '').trim();

  inpUser.value = "";
  inpPsw.value = "";

  // if(user=='' || psw==''){
  //   alert("Inserisci user e password.");
  //   return;
  // }
  
  /**
   * Mi dovrò collegare al server per valutare
   * se user e password sono presenti nel DB.
  */
  var checked = true;
  /**
   * Se user,password OK => home-page
   * altrimenti msg di errore
   */
  if(checked){
    document.querySelector(".login-page").setAttribute("hidden", true);
    mainPage();
  }
  else{
    alert("Non sei registrato, registrati.");
  }
  

}

/**
 * Questa sarà un richiesta di POST sul server
 */
function signup(){
  const inpUser = document.getElementById("user");
  const user = (inpUser.value || '').trim();
  
  const inpPsw = document.getElementById("pass");
  const psw = (inpPsw.value || '').trim();

  inpUser.value = "";
  inpPsw.value = "";
  /*
    Qui inserisco dati nel db
    se inseriti correttamente allora mando messaggio
  */
}


function init() {
  const loginBtn = document.getElementById("btn-login");
  const signupBtn = document.getElementById("btn-signup");

  if(!loginBtn){
    console.log("Errore form non caricata.");
  }

  loginBtn.addEventListener('click', login);
  signupBtn.addEventListener('click', signup);

  
}

init();