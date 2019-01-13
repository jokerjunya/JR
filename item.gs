function itemsOkasi() {
  return [
    {'type': 'flex',
     'altText': 'alt Text(代替テキスト)',
     'contents':
     {
       'type': 'carousel',
       'contents': [
         {
           'type': 'bubble',
           'hero': {
             'type': 'image',
             'size': 'full',
             'aspectRatio': '20:13',
             'aspectMode': 'fit',
             'url': 'https://images-na.ssl-images-amazon.com/images/I/51jKz9-cDiL.jpg'
           },
           'body': {
             'type': 'box',
             'layout': 'vertical',
             'spacing': 'sm',
             'contents': [
               {
                 'type': 'text',
                 'text': '雪の宿サラダ 24枚',
                 'wrap': true,
                 'weight': 'bold',
                 'size': 'xl'
               },
               {
                 'type': 'box',
                 'layout': 'baseline',
                 'contents': [
                   {
                     'type': 'text',
                     'text': '¥ 30,000',
                     'wrap': true,
                     'weight': 'bold',
                     'size': 'xl',
                     'flex': 2
                   },
                   {
                     'type': 'text',
                     'text': '(税抜)',
                     'wrap': true,
                     'weight': 'bold',
                     'size': 'sm',
                     'flex': 3
                   }
                 ]
               }
             ]
           },
           'footer': {
             'type': 'box',
             'layout': 'vertical',
             'spacing': 'sm',
             'contents': [
               {
                 'type': 'button',
                 'style': 'primary',
                 'action': {
                   'type': 'uri',
                   'label': '購入する',
                   'uri': 'https://www.amazon.co.jp/%E4%B8%89%E5%B9%B8%E8%A3%BD%E8%8F%93-%E9%9B%AA%E3%81%AE%E5%AE%BF%E3%82%B5%E3%83%A9%E3%83%80-24%E6%9E%9A/dp/B00Z629OGS/ref=sr_1_2?ie=UTF8&qid=1538314515&sr=8-2&keywords=%E9%9B%AA%E3%81%AE%E5%AE%BF'
                 }
               },
               {
                 'type': 'button',
                 'action': {
                   'type': 'uri',
                   'label': '購入しない',
                   'uri': 'http://www.tanaka.giti.waseda.ac.jp/~tanaka/YoshiakiTanaka.jpg'
                 }
               }
             ]
           }
         },
         {
           'type': 'bubble',
           'hero': {
             'type': 'image',
             'size': 'full',
             'aspectRatio': '20:13',
             'aspectMode': 'fit',
             'url': 'https://www.sanko-seika.co.jp/sys/upload/img/5b5953839c0b7.jpg'
           },
           'body': {
             'type': 'box',
             'layout': 'vertical',
             'spacing': 'sm',
             'contents': [
               {
                 'type': 'text',
                 'text': '雪の宿さつまいも味 22枚',
                 'wrap': true,
                 'weight': 'bold',
                 'size': 'xl'
               },
               {
                 'type': 'box',
                 'layout': 'baseline',
                 'flex': 1,
                 'contents': [
                   {
                     'type': 'text',
                     'text': '¥ 40,000',
                     'wrap': true,
                     'weight': 'bold',
                     'size': 'xl',
                     'flex': 2
                   },
                   {
                     'type': 'text',
                     'text': '(税抜)',
                     'wrap': true,
                     'weight': 'bold',
                     'size': 'sm',
                     'flex': 3
                   }
                 ]
               },
               {
                 'type': 'text',
                 'text': '在庫切れ',
                 'wrap': true,
                 'size': 'xxs',
                 'margin': 'md',
                 'color': '#ff5551',
                 'flex': 0
               }
             ]
           },
           'footer': {
             'type': 'box',
             'layout': 'vertical',
             'spacing': 'sm',
             'contents': [
               {
                 'type': 'button',
                 'flex': 2,
                 'style': 'primary',
                 'color': '#aaaaaa',
                 'action': {
                   'type': 'uri',
                   'label': '購入する',
                   'uri': 'https://www.sanko-seika.co.jp/sys/product/dtl/336'
                 }
               },
               {
                 'type': 'button',
                 'action': {
                   'type': 'uri',
                   'label': '購入しない',
                   'uri': 'https://www.google.co.jp/maps/dir/35.4329014,139.5547502/%E5%B1%B1%E9%87%8E%E4%BA%95/@35.4355462,139.5556575,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x60185b45aea6c159:0x3275f646568bfaf6!2m2!1d139.594763!2d35.409234'
                 }
               }
             ]
           }
         },
         {
           'type': 'bubble',
           'hero': {
             'type': 'image',
             'size': 'full',
             'aspectRatio': '20:13',
             'aspectMode': 'fit',
             'url': 'https://www.sanko-seika.co.jp/sys/upload/img/5b0770bde928d.jpg'
           },
           'body': {
             'type': 'box',
             'layout': 'vertical',
             'spacing': 'sm',
             'contents': [
               {
                 'type': 'text',
                 'text': '雪の宿チップス 50g',
                 'wrap': true,
                 'weight': 'bold',
                 'size': 'xl'
               },
               {
                 'type': 'box',
                 'layout': 'baseline',
                 'flex': 1,
                 'contents': [
                   {
                     'type': 'text',
                     'text': '¥ 50,000',
                     'wrap': true,
                     'weight': 'bold',
                     'size': 'xl',
                     'flex': 2
                   },
                   {
                     'type': 'text',
                     'text': '(税抜)',
                     'wrap': true,
                     'weight': 'bold',
                     'size': 'sm',
                     'flex': 3
                   }
                 ]
               },
               {
                 'type': 'text',
                 'text': '取り扱っていません。',
                 'wrap': true,
                 'size': 'xxs',
                 'margin': 'md',
                 'color': '#ff5551',
                 'flex': 0
               }
             ]
           },
           'footer': {
             'type': 'box',
             'layout': 'vertical',
             'spacing': 'sm',
             'contents': [
               {
                 'type': 'button',
                 'flex': 2,
                 'style': 'primary',
                 'color': '#FDCE00',
                 'action': {
                   'type': 'uri',
                   'label': '公式ホームページへ',
                   'uri': 'https://www.sanko-seika.co.jp/sys/product/dtl/86'
                 }
               },
               {
                 'type': 'button',
                 'action': {
                   'type': 'uri',
                   'label': '非公式ホームページへ',
                   'uri': 'http://www.it.waseda.ac.jp/images/takahata.jpg'
                 }
               }
             ]
           }
         },
         {
           'type': 'bubble',
           'body': {
             'type': 'box',
             'layout': 'vertical',
             'spacing': 'sm',
             'contents': [
               {
                 'type': 'button',
                 'flex': 1,
                 'style': 'secondary',
                 'gravity': 'center',
                 'action': {
                   'type': 'uri',
                   'label': 'もっと見る',
                   'uri': 'https://www.amazon.co.jp/ref=nav_logo'
                 }
               }
             ]
           }
         }
       ]
     }
    }
  ];
}