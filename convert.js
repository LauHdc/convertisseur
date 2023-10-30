// Conversion Euros / Dollars

const euros = document.getElementById('euros');
const dollars = document.getElementById('dollar');

euros.addEventListener('input', function() {
    
    convEurdoll(this.id,this.value);
    
});
    
dollars.addEventListener('input', function() {
    
    convEurdoll(this.id,this.value);
    
});


function convEurdoll(id,valeur) {
    
    if(id == "euros") {
        
        dollars.value = valeur * 1.21;
    }
    
    else if(id == "dollar") {
        
        euros.value = valeur * 0.82;
    }
    
}


// Conversion Livre sterling / Euros

const livre = document.getElementById('livre');
const euroslivre = document.getElementById('eurosliv');

livre.addEventListener('input', function() {
    
    convLiveur(this.id,this.value);
    
});

euroslivre.addEventListener('input', function() {
    
    convLiveur(this.id,this.value);
    
});


function convLiveur(id,valeur) {
    
    if(id == "livre") {
        
        euroslivre.value = valeur * 1.11;
    }
    
    else if(id == "eurosliv") {
        
        livre.value = valeur * 0.89;
    }
    
}


// Conversion Yen / Euros

const yen = document.getElementById('yen');
const eurosyen = document.getElementById('eurosyen');

yen.addEventListener('input', function() {
    
    convYeneur(this.id,this.value);
    
});

eurosyen.addEventListener('input', function() {
    
    convYeneur(this.id,this.value);
    
});


function convYeneur(id,valeur) {
    
    if(id == "yen") {
        
        eurosyen.value = valeur * 0.0079;
    }
    
    else if(id == "eurosyen") {
        
        yen.value = valeur * 126.6;
    }
    
}



