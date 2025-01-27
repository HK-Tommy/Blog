function SearchButton(){
    if (document.getElementById("search").value != ""){
        window.location = "site:" + window.location + document.getElementById("search").value
    }
}