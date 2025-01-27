function SearchButton(){
    if (document.getElementById("search").value != ""){
        window.open("site:" + window.location + document.getElementById("search").value,'_blank');
    }
}