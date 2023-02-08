const boton = document.querySelector('#boton');
const foto = document.querySelector('#foto');
const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');
const ubicacion = document.querySelector('#ubicacion');



const generarUsuario = async () => {
    try {
        const url = 'https://randomuser.me/api/';
        const respuesta = await fetch(url);
        const { results } = await respuesta.json();
        const datos = results[0];
        foto.src =datos.picture.large;
        nombre.textContent=  datos.name.first +' '+ datos.name.last;
        correo.textContent= datos.email;
        telefono.textContent= '+'+datos.phone;
        ubicacion.textContent= datos.location.city +', '+ datos.location.country;
        window.scroll({
            top:0, 
            behavior:'smooth'
            
        })

    } catch {
        console.log(error);
    }
}

boton.addEventListener('click', generarUsuario);