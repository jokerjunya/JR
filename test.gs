function doGet(e) {
  var htmlObj = HtmlService.createTemplateFromFile("testIndex");
  var schid = e.parameter.schid;
  htmlObj.schid = schid;
  return htmlObj.evaluate();
}