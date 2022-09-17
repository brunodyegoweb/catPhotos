function submit() {
txtCampo= document.querySelector('input#txtCampo')
 if(txtCampo=='') {
    alert('w')
 }
}

function mudaFoto(foto) {
   document.getElementById('cat-topo').src=foto
}