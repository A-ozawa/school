function clickButton() {
    let target = document.getElementById('btn01');
    let parent = target.parentNode;
    
    let newSpan = document.createElement('span');
    let newText = document.createTextNode('ボタンがおされました');

    newSpan.append(newText);

    parent.insertBefore(newSpan,target.nextSibling);
}