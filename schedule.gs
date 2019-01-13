function makeSchedule(scheduleNum, user_id, timeWidth) {
  var activeSheet = SpreadsheetApp.getActiveSheet();
  var scheduleName = 'ScheduleNo.' + scheduleNum;
  //var newSS = createSpreadsheetInfolder('1rwNpVhiAZSbdgIj610B7ZyVXnzSy8G4x', scheduleName);
  var newSS = SpreadsheetApp.create(scheduleName);
  var ssId = newSS.getId();
  var ssUrl = 'https://docs.google.com/spreadsheets/d/' + ssId + '/edit#gid=0/?schid=' + ssId;
  var sheet = SpreadsheetApp.openById(ssId).getSheets()[0];
  
  var timeWidthData = [];
  var periodData = [[]];
  var length = 10;/*終了日-開始日*/
  
  //配列に縦軸を書き込む情報を入れる
  for(var i = 1;i <= 24/timeWidth;i++){  //timeWidth(時間間隔)に合わせて
    timeWidthData.push([timeWidth * (i - 1) + "時～" + timeWidth*(i) + "時"]);
  }
  
  //配列に横軸を書き込む情報を入れる
  var starting_date = activeSheet.getRange(confirmLocation(user_id, activeSheet), 2).getValue().match(/\d+/g);
  var ending_date = activeSheet.getRange(confirmLocation(user_id, activeSheet), 3).getValue().match(/\d+/g);
  var starting_date_inst = new Date(starting_date[0], starting_date[1] - 1, starting_date[2]);
  var ending_date_inst = new Date(ending_date[0], ending_date[1] - 1, ending_date[2]);
  periodData[0][0] = '';
  var dayOfWeekStr = [ "(日)", "(月)", "(火)", "(水)", "(木)", "(金)", "(土)" ];
  Logger.log(periodData);
  //開始日時から終了日時までのDateオブジェクトをperiodData配列に格納していきたい→なぜか配列にpushしているのにそれまでの配列の中の値が書き換わる←Stringにして文字列として代入することにした
  while(starting_date_inst <= ending_date_inst){
    periodData[0].push(starting_date_inst.getMonth() + 1 + '/' + starting_date_inst.getDate() + dayOfWeekStr[starting_date_inst.getDay()]);
    starting_date_inst.setDate(starting_date_inst.getDate() + 1);
    Logger.log(periodData);
  }
  sheet.getRange(1, 1, 1, periodData[0].length).setValues(periodData);
  Logger.log('end appendRow');
  sheet.getRange(2, 1, timeWidthData.length, 1).setValues(timeWidthData);  //書き込む
  
  //チェックボックスを書き込むやつ(できなくね？)
  /*for(i = 2; i <= 24/timeWidth; i++){
  for(var j=2; i <= length; j++){
  sheet.getRange(i, j).setValue
  }
  }*/
  
  return [ssUrl, ssId];
}

function createSpreadsheetInfolder(folderID, fileName) {
  var folder = DriveApp.getFolderById(folderID);
  var newSS=SpreadsheetApp.create(fileName);
  var originalFile=DriveApp.getFileById(newSS.getId());
  var copiedFile = originalFile.makeCopy(fileName, folder);
  DriveApp.getRootFolder().removeFile(originalFile);
  return copiedFile;
}

function testTime() {
  for(i = 0;i < 5;i++) {
    var start_slow = new Date();
    var newSS = createSpreadsheetInfolder('1rwNpVhiAZSbdgIj610B7ZyVXnzSy8G4x', "scheduleTest");
    var end_slow = new Date();
    
    var start_fast = new Date();
    var newSS = SpreadsheetApp.create("scheduleTest");
    var end_fast = new Date();
    var slow_time = (end_slow - start_slow) / 1000;
    var fast_time = (end_fast - start_fast) / 1000;
    Logger.log("データベースフォルダを作ったときの時間: " + slow_time + " 秒");
    Logger.log("マイドライブに作ったときの時間: " + fast_time + " 秒");
  }
}

function testDate() {
  var activeSheet = SpreadsheetApp.getActiveSheet();
  var starting_date = activeSheet.getRange(5, 2).getValue().match(/\d+/g);
  var ending_date = activeSheet.getRange(5, 3).getValue().match(/\d+/g);
  var start_date = new Date(starting_date[0], starting_date[1], starting_date[2]);
  var end_date = new Date(ending_date[0], ending_date[1], ending_date[2]);
  var j = 1;
  while(start_date.getFullYear() == ending_date.getFullYear && start_date.getMonth() == ending_date.getMonth && start_date.getDay() == ending_date.getDay()){
    periodData[j] = start_date.setDate(date.getDate() + 1);
    j++;
    Logger.log(periodData[j]);
  }
}

function test2() {
  var date = new Date();
  var date2 = new Date();
  var a = [];
  a[0] = '';
  Logger.log(date);
  date.setDate(date.getDate() + 1);
  date2 = date;
  Logger.log(date2);
  //a.push(date);
  //date.setDate(date.getDate() + 1);
  //a.unshift(date);
  //Logger.log(a);
}