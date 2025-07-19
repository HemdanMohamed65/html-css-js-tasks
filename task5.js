function countElements() {
  var tagName = document.getElementById("tagName").value;
  var className = document.getElementById("className").value;
  var idName = document.getElementById("idName").value;
  var nameAttr = document.getElementById("nameAttr").value;
  var outputHTML = "";
  if (tagName) {
    var tags = document.getElementsByTagName(tagName);
    outputHTML += `<p><strong>Tag Name</strong>: ${tags.length}</p>`;
  }
  if (className) {
    var classes = document.getElementsByClassName(className);
    outputHTML += `<p><strong>Class Name</strong>: ${classes.length}</p>`;
  }
  if (idName) {
    var idElement = document.getElementById(idName);
    outputHTML += `<p><strong>ID</strong>: ${idElement ? 1 : 0}</p>`;
  }
  if (nameAttr) {
    var names = document.getElementsByName(nameAttr);
    outputHTML += `<p><strong>Name</strong>: ${names.length}</p>`;
  }
  document.getElementById("output").innerHTML = outputHTML;
}
