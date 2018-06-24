function valida_formulario(){

	var nome = document.getElementById("nome").value;
	var email = document.getElementById("email").value;
	var genero = $('input[name=genero]:checked').val();
	var interesses = $("input[type='checkbox']").is(':checked');
	
	erro = false;
	lista_campos= [];

		document.getElementById("erro_nome").style.display="none";
		document.getElementById("erro_email").style.display="none";



	if(nome == ""){
		document.getElementById("erro_nome").style.display="initial";
		lista_campos.push("Nome");
		erro=true;
	} 
	
	if(email == ""){
		document.getElementById("erro_email").style.display="initial";
		lista_campos.push("E-mail");
		erro=true;
	}
	
	if( !genero) {  
		document.getElementById("erro_genero").style.display="initial";
		lista_campos.push("Género");
		erro = true;
	}

	if(!interesses){
		document.getElementById("erro_interesses").style.display="initial";
		lista_campos.push("Interesses");
		erro = true;
	}


	if(erro){
		mensagem = "";

		for(i=0; i<lista_campos.length; i++){
			mensagem = mensagem+lista_campos[i];
			if(i==lista_campos.length-1){
				mensagem+=".";  
			} else {
				mensagem+=", ";
			}
		}

		document.getElementById("mensagem_de_erro").innerHTML="Preencha os campos: " + mensagem;
		document.getElementById("mensagem_de_erro").style.display="block";
		return false;
	} else {
		return true;
	}

}


	



	
