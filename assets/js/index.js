function SearchButton(){
    if (document.getElementById("search").value != ""){
        window.open("https://www.google.com/search?q=site%3Ahttps%3A%2F%2Fhk-tommy.github.io%2FBlog+" + document.getElementById("search").value,'_self');
    }
}