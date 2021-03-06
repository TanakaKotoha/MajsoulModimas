requestAnimationFrame(function autoRun() {
  try {
    const arrBackup = cfg.voice.sound.groups_
    if (!arrBackup || arrBackup.length === 0) {
      throw new Error();
    }
    console.log('Hacked语音文本');
    Object.entries(cfg.voice.sound.groups_).forEach(([soundID, soundGroup]) => {
      if (soundID == 2) {
        const changeMap = {
          "获得语音": {
            "words": 'アイドルかぁ～……アタシ、断れない性格なんで、ついOKしちゃいましたけど……そんなキング・オブ・リア充な存在、キラキラまぶし過ぎて無理っスよ～勘弁してください～',
          },
          "登录语音普通": {
            "words": 'はっ！もう朝っスか？…し、しまった、また徹夜してしまった…！'
          },
          "登录语音满羁绊": {
            "words": 'もう後戻りできないっスね♪{var:player_nickname}プロデューサー！'
          },
          "大厅交互语音1": {
            "words": '新作出てると嬉しい気持ち、わかるっスよ。アタシも新刊出てると…へへ'
          },
          "大厅交互语音2": {
            "words": 'どうしても腕組む時は、眼鏡を外します！そうすれば見えないですし'
          },
          "大厅交互语音3": {
            "words": 'コイツ～！とか慣れないっスよ～。もう、のっけから照れちゃって'
          },
          "大厅交互语音4": {
            "words": 'あの建物が、今日の戦場っス。へへ、今日はアタシが、手を引く番っスね'
          },
          "大厅交互语音5": {
            "words": '1に睡眠、2に睡眠、3、4、がなくて、5に昼寝…っス…'
          },
          "大厅交互语音6": {
            "words": 'アタシのサイバー要素は…デジタルでも漫画を描くことっスかね…？'
          },
          "大厅交互语音7": {
            "words": '形ひとつで全然顔の印象変わるっスね～。ちょっとしたコスプレ気分？'
          },
          "大厅交互语音8": {
            "words": '指先を合わせるっス！…いえ、合体とかは、しないと思いますけど'
          },
          "送礼物语音普通": {
            "words": 'うおーっ！アタシ一度始めたら、熱くなっちゃうタイプなんで！'
          },
          "送礼物语音喜好": {
            "words": 'プレゼント！何でしょう？楽しみっスね～、だいたい食べ物だと…'
          },
          "好感度升级语音1": {
            "words": 'アイドルとプロデューサーのラブストーリー…描かないっス。冗談で'
          },
          "好感度升级语音2": {
            "words": '私、見ての通り、ちょっとだらしない子なんスよ……えっ、知ってました？いや～、お恥ずかしい限りで……。'
          },
          "好感度升级语音3": {
            "words": 'でも童話だったら、ヒロインはハッピーエンドでスよね？一緒にトップを目指して、ページをめくるっス！'
          },
          "好感度升级语音4": {
            "words": '春夏秋冬、芽吹くときも、暖かいときも、実るときも、凍えるときも。いつも傍で見守ってくれて、ありがとうっス。言葉にこめきれない想いを、歌にのせて届けまス。聴いてください'
          },
          "好感度升级语音5": {
            "words": 'こんな時ほしい答えとしては、「どっちも好き」なんて、そんなベタな台詞ですかね。ベタ過ぎて、甘過ぎますけど。……あ、はい。甘過ぎるけど、ありがとうございまス……。'
          },
          "契约语音": {
            "words": 'こ、これは…やりすぎっスよね？まるで流行りのチート物…。別の世界に行ったら、一番かわいくなっちゃったみたいな。でもノッておくっス！今日は私が、アイドル漫画の主人公！'
          },
          "终局一位语音": {
            "words": 'アタシの勝利は確定済み。このメガネには、未来が見えてるっス！'
          },
          "特殊语音 - 连续打出多张相同牌": {
            "words": '（Hina Araki ）'
          },
          "特殊语音 - 打出宝牌": {
            "words": '（Hina Araki ）'
          },
          "特殊语音 - 余牌少于10": {
            "words": '（Hina Araki ）'
          },
          "特殊语音 - 役满听牌": {
            "words": '（Hina Araki ）'
          },
          "特殊语音 - 倍满/三倍满听牌": {
            "words": '（Hina Araki ）'
          }
        };
        soundGroup.forEach(soundObject => {
          soundObject.level_limit = 0;
          if (changeMap.hasOwnProperty(soundObject.name_chs)) {
            for (let [key, val] of Object.entries(changeMap[soundObject.name_chs])) {
              ['_chs', '_en', '_jp'].forEach(suffix => soundObject[key + suffix] = val)
            }
          }
        });
      }
    });
    console.log('Hacked简介文本');
    cfg.item_definition.character.rows_.forEach(chr => {
      const helper = (key, val) => {
        ['', '_chs', '_en', '_jp'].forEach(suffix => chr[key + suffix] = val)
      };
      switch (chr.id) {
        case 200002:
          chr.name = '荒木比奈';
          chr.name_chs = '荒木比奈';
          chr.name_en = 'Hina Araki';
          chr.name_jp = '荒木比奈';
          helper('desc_cv', 'Rui Tanabe');
          helper('desc', 'A somewhat unkempt and indoorsy otaku type who likes to draw manga, Hina is initially very doubtful that she can become a cute idol. She seems to be the kind of person who hates deadlines, often frantically adjusting her manga schedule at the last second.');
          helper('desc_age', '20');
          helper('desc_birth', 'April 9th');
          helper('desc_bloodtype', 'A');
          helper('desc_hobby', 'Drawing Manga');
          helper('desc_stature', '157cm');
          break;
      }
    });
  } catch (error) {
    raf = requestAnimationFrame(autoRun);
  }
});
