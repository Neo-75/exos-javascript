
//fonction de déduplication
function deduplication(sourceArray) {
    //Suppression des doublons

    var item, posFound;
    var newArray = [];

    for (let index in sourceArray) {
        item = sourceArray[index];
        posFound = sourceArray.indexOf(item);

        if (posFound == index) {
            newArray.push(item);
        }
    }
    return newArray
}



//fonction d'affichage d'un tableau ordinal sous forme de liste html
function getHtmlList(sourceArray) {
    var html = "<ul>";
    for (let item of sourceArray) {
        html += `<li> ${item} </li>`;
    }
    html += "</ul>";
    return html;

}
  /*
        *Fonction retournant le code html d'une case de tableau html
        *parametre : la valeur a inserer dans la case
        *          :est en tete boolean indiquant si la caser est une case d'en tete
        */
       function obtenirCaseHtml(valeur, estEnTete){
           
        if(Array .isArray(valeur)){
            valeur = valeur.join("<br>");
        }
        if(estEnTete)
        return `<th> ${valeur}</th>`;
        else {
        return `<td> ${valeur}</td>`;
        }


    }
    /*
    *Fonction retournant le code html d'une ligne d'un tableau HTML
    *Parmétre l'objet contenant les donées de la ligne
    */
    function obtenirLigneHtml(objet){
        let html = "<tr>";
        for(clef in objet){
            html +=obtenirCaseHtml(objet[clef]);

        }

        html+= "</tr>";

        return html;
    }
    /**
    ** fonction retournant le code html de l'en tete d'un tableau 
    **parmetre :un objet contenant les clefs qui correspondent aux en tetes

    **/
    function obtenirEnTeteHtml(objet){
        let html = "<tr>";
        for(clef in objet){
            html +=obtenirCaseHtml(clef, true);

        }

        html+= "</tr>";

        return html;



        }
    /*
    **Fonction retournant le code html d'un tableau
    *paremtre : un tableau ordinal d'objet
    */
    function obtenirTableHtml(data){
        let html = "<table>";

        if(data.length >0){
            html +=obtenirEnTeteHtml (data[0]);
        }

        for(ligne of data){
            html += obtenirLigneHtml(ligne);
        }
        html+= "</table>";

        return html;


    }


    
    