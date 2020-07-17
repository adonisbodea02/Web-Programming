function myFunction(){
    var elements = document.getElementsByTagName('a'), index;
    for (index = elements.length - 1; index >= 0; index--) {
        if(elements[index].href.indexOf("http://www.scs.ubbcluj.ro/") == 0)
            elements[index].parentNode.removeChild(elements[index]);
    }
}
