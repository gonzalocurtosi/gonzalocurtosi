var datos = document.getElementById('datosMostrar'),
    getDatos = document.getElementById('datos'),
    
    habilidades = document.getElementById('habilidadesMostrar'),
    getHabilidades = document.getElementById('habilidades'),
    
    experiencia = document.getElementById('experienciaMostrar'),
    getExperiencia = document.getElementById('experiencia'),
    
    educacion = document.getElementById('educacionMostrar'),
    getEducacion = document.getElementById('educacion'),
    
    verDatos = 0,
    verHabilidades = 0,
    verExperiencia = 0,
    verEducacion = 0;

function showDatos(){
    if(verDatos==0){
        getDatos.classList.add('mostrar');
        verDatos=1;
    } else{
        getDatos.classList.remove('mostrar');
        verDatos=0;
         
    }
}

function showHabilidades(){
    if(verHabilidades==0){
        getHabilidades.classList.add('mostrar');
        verHabilidades=1;
    } else{
        getHabilidades.classList.remove('mostrar');
        verHabilidades=0;
    }
}

function showExperiencia(){
    if(verExperiencia==0){
        getExperiencia.classList.add('mostrar');
        verExperiencia=1;
    } else{
        getExperiencia.classList.remove('mostrar');
        verExperiencia=0;
    }
}

function showEducacion(){
    if(verEducacion==0){
        getEducacion.classList.add('mostrar');
        verEducacion=1;
    } else{
        getEducacion.classList.remove('mostrar');
        verEducacion=0;
    }
}




datos.addEventListener('click',showDatos,true);
habilidades.addEventListener('click',showHabilidades,true);
experiencia.addEventListener('click',showExperiencia,true);
educacion.addEventListener('click',showEducacion,true);




