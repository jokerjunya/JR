//CHANNEL_ACCESS_TOKENを設定
//LINE developerで登録をした、自分のCHANNEL_ACCESS_TOKENを入れて下さい
var CHANNEL_ACCESS_TOKEN = 'lo9HutQOd5QDEdFCoLNKjM3kwvxC/NMAaJRpBUFDNn+ZZnT3anRmZN1IDJQjEtbjPgVC3LWZQxct+kpdKhS6JbEkg2euWhA0UmduTm2/wDkKmynb52GOgbis9WTy8ughn0/G2aPo65FUmNfHbydwtAdB04t89/1O/w1cDnyilFU='; 
var line_endpoint = 'https://api.line.me/v2/bot/message/reply';

//ポストで送られてくるので、ポストデータ取得
//JSONをパースする
function doPost(e) {
  var json = JSON.parse(e.postData.contents);
  
  // アクティブ(今開いている)なスプレッドシートを取得
  var sheet = SpreadsheetApp.getActiveSheet();
  // スプレッドシートの最終行の行数を取得
  var last_row = sheet.getLastRow();
  
  //返信するためのトークン取得
  var reply_token= json.events[0].replyToken;
  if (typeof reply_token === 'undefined') {
    return;
  }
  
  // 送信者のuserID
  var user_id = json.events[0].source.userId;
  
  //返信する内容を作成
  var messages;
  
  if (json.events[0].type == 'postback') { //メッセージのタイプがpostback
    var message_type = json.events[0].postback.data; // ポストバックデータ(ややこしいよ注意!)。ポストバックが日時選択だった場合、"scheduleRange_start"か"scheduleRange_end"で識別、数字データだった場合は区切り時間が入っている
    if (message_type == 'scheduleRange_start') {
      messages = scheduleRangeEnd(); 
      var message_data = json.events[0].postback.params; // 選択された日時のデータ(日時選択アクションによるポストバックにしか存在しないプロパティのため、if文内で定義するしかない)
      sheet.getRange(last_row + 1, 1).setValue(user_id); // スプレッドシートに書き込み
      sheet.getRange(last_row + 1, 2).setValue(message_data); // スプレッドシートに書き込み
    } else if (message_type == 'scheduleRange_end') {
      var message_data = json.events[0].postback.params; // 選択された日時のデータ(日時選択アクションによるポストバックにしか存在しないプロパティのため、if文内で定義するしかない)
      sheet.getRange(confirmLocation(user_id, sheet), 3).setValue(message_data); // スプレッドシートに書き込み
      var starting_date = sheet.getRange(confirmLocation(user_id, sheet), 2).getValue().match(/\d+/g); // 正規表現を使って年月日を配列に格納。[0]に年、[1]に月、[2]に日にちが入っている状態
      var ending_date = sheet.getRange(confirmLocation(user_id, sheet), 3).getValue().match(/\d+/g); // 同上(追：var message_data の定義の「.params」の後ろに.dataで取れるかも)
      messages = checkErrorDate(starting_date, ending_date); // 予定終了日が予定開始日よりも後にあるかを確認
    } else if (message_type <= 6) {
      sheet.getRange(confirmLocation(user_id, sheet), 4).setValue(message_type); // スプレッドシートに書き込み(message_typeには区切り時間が入っている！)
      var ssUrl = makeSchedule(confirmLocation(user_id, sheet), user_id, message_type); // スケジュール表作成
      sheet.getRange(confirmLocation(user_id, sheet), 6).setValue(0);
      messages = compMessage(ssUrl[0], ssUrl[1]);
    }
  }
  
  if (json.events[0].type == 'message') { //メッセージのタイプがテキスト
    var user_message = json.events[0].message.text;  
    if (user_message == '商品'　|| user_message == 'しょうひん') { //商品またはしょうひんと入力された際
      messages = itemsOkasi();
    } else if (user_message == '予定調整' || user_message == 'よていちょうせい' || user_message  == '予定' || user_message == 'よてい') {
      messages = scheduleRangeStart();
    } else if(user_message == '一覧' || user_message == 'いちらん' || user_message == '予定一覧' || user_message == 'よていいちらん') {
      messages = listSch();
    } else {
      messages = elseMessage();
    }
  }
  
  postFunction(messages, reply_token);
  
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}





function postFunction(messages, reply_token) {
  var jsonMessage = {
    'replyToken': reply_token,
    'messages': messages,
  };
  
  UrlFetchApp.fetch(line_endpoint, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': JSON.stringify(jsonMessage),
  });
}





function confirmLocation(user_id, sheet) { // user_idによって入力の衝突を防ぐ
  var row = sheet.getLastRow();
  while(sheet.getRange(row, 1).getValue() != user_id) {
    row--;
  }
  return row;
}





function checkErrorDate(starting_date, ending_date) {
  
  if(parseInt(ending_date[0]) <= parseInt(starting_date[0])) { // 終了年が開始年よりも前の場合
    if(parseInt(ending_date[1]) <= parseInt(starting_date[1])) { // 終了月が開始月よりも前の場合
      if(parseInt(ending_date[2]) < parseInt(starting_date[2])) { // 終了日が開始日よりも前の場合
        var messages = dateError(starting_date[0], starting_date[1], starting_date[2]);
        return messages;
      }
    }
  }
  var messages = setPeriod();// 正常
  return messages;
}


function testing() {
  checkErrorDate([2018, 12, 30], [2019, 1, 5]);
}


function test() {
  var myData = SpreadsheetApp.openById('1ua2K6YKqTN6wEHqQQkE0P2lv9r0YxAGNRk_l6O16o0I').getDataRange().getValues();
  Logger.log(myData);
}

function testFunc() {
  var arr1 = 'a';
  var arr2 = 'b';
  return [arr1, arr2];
}
