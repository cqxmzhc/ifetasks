window.onload = function() {
    var $ = function(id) {
        return document.getElementById(id);
    }

    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    var buttonList = document.getElementsByTagName('button');
    for (var i = 0; i < buttonList.length; i++) {
        buttonList[i].addEventListener('click', clickHandler);
    }

    function clickHandler(event) {
        var numList = $('num-list');
        var node = document.createElement('div');
        var inputNum = $("num").value;

        node.setAttribute('id', inputNum);
        node.style.display = 'inline-block';
        node.style.marginRight = '10px';
        node.style.backgroundColor = 'red';
        node.style.padding = '4px';
        node.style.lineHeight = '21px';
        node.style.cursor = 'pointer';

        node.addEventListener('click', function(){
            this.parentNode.removeChild(this);
        });

        var textNode = document.createTextNode(inputNum);
        node.appendChild(textNode);

        switch (this.id) {
            case 'left-in':
                numList.insertBefore(node, numList.firstChild);
                break;
            case 'right-in':
                insertAfter(node, numList.lastChild);
                break;
            case 'left-out':
                numList.removeChild(numList.firstChild);
                break;
            case 'right-out':
                numList.removeChild(numList.lastChild);
        }
    }
};
