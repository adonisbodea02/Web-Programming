function setActive(param) {
    if(param === "about") {
        var node = document.createElement("p");
        var textnode = document.createTextNode("t1");
        var img = document.createElement("img");
        img.src = "tom.jpg";
        node.appendChild(textnode);
        node.setAttribute("style", "position: absolute; margin-top: 200px;");
        img.setAttribute("style", "position: absolute; margin-top: 300px;");
        if(document.getElementsByTagName('p').length != 0){
            document.getElementsByTagName('p')[0].remove();
        }
        if(document.getElementsByTagName('img').length != 0){
            document.getElementsByTagName('img')[0].remove();
        }
        document.getElementById('nav').parentNode.appendChild(node);
        document.getElementById('nav').parentNode.appendChild(img);
        document.getElementById('nav').parentNode.setAttribute("style", "background-color: green;");
    }
    if(param === "contact") {
        var node = document.createElement("p");
        var textnode = document.createTextNode("t2");
        var img = document.createElement("img");
        img.src = "Wat.jpg";
        node.appendChild(textnode);
        node.setAttribute("style", "position: absolute; margin-top: 200px;");
        img.setAttribute("style", "position: absolute; margin-top: 300px;");
        if(document.getElementsByTagName('p').length != 0){
            document.getElementsByTagName('p')[0].remove();
        }
        if(document.getElementsByTagName('img').length != 0){
            document.getElementsByTagName('img')[0].remove();
        }
        document.getElementById('nav').parentNode.appendChild(node);
        document.getElementById('nav').parentNode.appendChild(img);
        document.getElementById('nav').parentNode.setAttribute("style", "background-color: red;");
    }
    if(param === "archives") {
        var node = document.createElement("p");
        var textnode = document.createTextNode("t3");
        node.appendChild(textnode);
        node.setAttribute("style", "position: absolute; margin-top: 200px;");
        if(document.getElementsByTagName('p').length != 0){
            document.getElementsByTagName('p')[0].remove();
        }
        document.getElementById('nav').parentNode.appendChild(node);
        document.getElementById('nav').parentNode.setAttribute("style", "background-color: blue;");
    }
    if(param === "free") {
        var node = document.createElement("p");
        var textnode = document.createTextNode("t4");
        node.appendChild(textnode);
        node.setAttribute("style", "position: absolute; margin-top: 200px;");
        if(document.getElementsByTagName('p').length != 0){
            document.getElementsByTagName('p')[0].remove();
        }
        document.getElementById('nav').parentNode.appendChild(node);
        document.getElementById('nav').parentNode.setAttribute("style", "background-color: yellow;");
    }
  }