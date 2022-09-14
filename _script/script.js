function submit() {
txtCampo= document.querySelectorAll('input#txtCampo')
 if(txtCampo=='') {
    alert('w')
 }
}

function mudaFoto(foto) {
   document.getElementById('cat-topo').src=foto
}