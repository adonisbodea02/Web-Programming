function myFunction(){
    var elements = document.getElementsByTagName('img'), index;
    var to_sort = [];
    var parentNode;
    if(elements.length != 0)
        parentNode = elements[0].parentNode;
    console.log(elements);
    for (index = elements.length - 1; index >= 0; index--) {
        to_sort.push({element: elements[index], source: elements[index].src})
    }
    console.log(to_sort);
    for (index = elements.length - 1; index >= 0; index--) {
        elements[index].parentNode.removeChild(elements[index]);
    }
    to_sort.sort(compare);
    console.log(to_sort);
    for (index = to_sort.length - 1; index >= 0; index--) {
        parentNode.appendChild(to_sort[index].element);
    }
}

function compare(a, b) {
    console.log(a.source, b.source, a.source < b.source);
    if (a.source < b.source)
        return 1;
    else
        return -1;
  }