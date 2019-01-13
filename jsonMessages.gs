function elseMessage() {
  return [
    {
      'type': 'text',
      'text': '今のところ、\n「商品」、「しょうひん」と入力すると商品一覧\n「予定調整」、「よてい」などと入力すると予定調整に移行します。'
    }
  ];
}

function scheduleRangeStart() {
  return[
    {'type': 'flex',
     'altText': '予定表開始日選択',
     'contents':
     {
       'type': 'bubble',
       'hero': {
         'type': 'image',
         'url': 'https://s3-ap-northeast-1.amazonaws.com/image.cozre.jp/magazine/post/491064.jpg',
         'size': 'full',
         'aspectRatio': '20:13',
         'aspectMode': 'cover',
         'action': {
           'type': 'uri',
           'uri': 'http://linecorp.com/'
         }
       },
       'body': {
         'type': 'box',
         'layout': 'vertical',
         'spacing': 'md',
         'contents': [
           {
             'type': 'text',
             'text': '予定を調整する',
             'wrap': true,
             'weight': 'bold',
             'align': 'center',
             'size': 'xl'
           },
           {
             'type': 'text',
             'text': '①予定を調整したい期間を指定してください',
             'wrap': true
           },
           {
             'type': 'button',
             'style': 'secondary',
             'action': {
               'type': 'datetimepicker',
               'label': '開始日',
               'data': 'scheduleRange_start',
               'mode': 'date'
             }
           }
         ]
       }
     }
    }
  ];
}

function scheduleRangeEnd(scheduleRange_start) {
  return [
    {
      'type': 'flex',
      'altText': '予定表終了日選択',
      'contents': 
      {
        "type": "bubble",
        "body": {
          "type": "box",
          "layout": "vertical",
          "spacing": "md",
          "contents": [
            {
              "type": "text",
              "text": "予定を調整する",
              "wrap": true,
              "weight": "bold",
              "align": "center",
              "size": "xl"
            },
            {
              "type": "text",
              "text": "②予定を調整したい期間を指定してください",
              "wrap": true
            },
            {
              "type": "button",
              "style": "secondary",
              "action": {
                "type": "datetimepicker",
                "label": "終了日",
                "data": "scheduleRange_end",
                "mode": "date"
              }
            }
          ]
        }
      }
    }
  ];
}

function setPeriod() {
  return [
    {
      'type': 'flex',
      'altText': '時間間隔選択',
      'contents': 
      {
        'type': 'bubble',
        'body': {
          'type': 'box',
          'layout': 'vertical',
          'spacing': 'md',
          'contents': [
            {
              'type': 'text',
              'text': '予定を調整する',
              'wrap': true,
              'weight': 'bold',
              'align': 'center',
              'size': 'xl'
            },
            {
              'type': 'text',
              'text': '③何時間ごとに区切って調整しますか？',
              'wrap': true
            },
            {
              'type': 'button',
              'style': 'secondary',
              'action': {
                'type': 'postback',
                'label': '1時間',
                'data': '1'
              }
            },
            {
              'type': 'button',
              'style': 'secondary',
              'action': {
                'type': 'postback',
                'label': '2時間',
                'data': '2'
              }
            },
            {
              'type': 'button',
              'style': 'secondary',
              'action': {
                'type': 'postback',
                'label': '3時間',
                'data': '3'
              }
            },
            {
              'type': 'button',
              'style': 'secondary',
              'action': {
                'type': 'postback',
                'label': '4時間',
                'data': '4'
              }
            },
            {
              'type': 'button',
              'style': 'secondary',
              'action': {
                'type': 'postback',
                'label': '6時間',
                'data': '6'
              }
            }
          ]
        }
      }
    }
  ];
}

function compMessage(ssUrl, schid) {
  return [
    {
      'type': 'text',
      'text': ssUrl
    },
    {
      'type': 'text',
      'text': 'スケジュール表が完成しました！上記のURL(仮)から予定を入力できます。グループラインなどでシェアしましょう！'
    },
    {'type': 'text',
     'text': 'https://script.google.com/macros/s/AKfycbxSoi6KkCouSB0BwFTXNkI4TbfffKKBnvL8xIHwkHAENpzlsw1J/exec?schid=' + schid
     //'https://script.google.com/macros/s/AKfycbwq-qWq5jgCMfLpYm15-LewVUew1x0j4nBmYvLHDYllw-tej9Q/exec'
    },
  ];
    }
    
    function dateError(y, m, d) {
    return [
    {
    'type': 'text',
    'text': '↑予定終了日が正しくありません！\n' + y + '/' + m + '/' + d + ' 以降で選択しなおしてください。'
    }
  ];
}

function listSch() {
  
  
  return [
    {
      'type': 'text',
      'text': '(テキスト作成中)'
    }
  ];
}

function confirmMessage(starting_date, ending_date, period_time) {
  return [
    {
      "type": "flex",
      "altText": "確認ボタン",
      "contents":
      {
        "type": "bubble",
        "body": {
          "type": "box",
          "layout": "vertical",
          "spacing": "md",
          "contents": [
            {
              "type": "text",
              "text": "以下の内容で予定表を作成しますか？",
              "wrap": true
            },
            {
              "type": "text",
              "text": "予定開始日: " + starting_date,
              "wrap": true,
              "weight": "bold"
            },
            {
              "type": "text",
              "text": "予定終了日: " + ending_date,
              "wrap": true,
              "weight": "bold"
            },
            {
              "type": "text",
              "text": "時間区切り: " + period_time,
              "wrap": true,
              "weight": "bold"
            },
            {
              "type": "box",
              "layout": "horizontal",
              "spacing": "sm",
              "contents": [
                {
                  "type": "button",
                  "style": "secondary",
                  "action": {
                    "type": "postback",
                    "label": "キャンセル",
                    "data": "cancel"
                  }
                },
                {
                  "type": "button",
                  "style": "primary",
                  "action": {
                    "type": "postback",
                    "label": "OK",
                    "data": "confirm"
                  }
                }
              ]
            }
          ]
        }
      }
    }
  ]
}