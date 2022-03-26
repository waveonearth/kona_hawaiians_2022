var quiz = {
      questions: [
         {
            text: "寝る前、ベッドの上で私は",
            responses: [
               { text: "宇宙の起源は何なのか考える", value: 4 },
               { text: "明日の日程をまとめておく", value: 3 },
               { text: "友達と電話をする", value: 2 },
               { text: "目を閉じたらそのまま寝落ちる", value: 1 }
            ]
         },
         {
            text: "ライブ会場に行く前！",
            responses: [
               { text: "出演バンドの曲を全部聞く", value: 3 },
               { text: "何を着て行くかずっと悩む", value: 2 },
               { text: "会場の周りのグルメを調べる", value: 1 },
               { text: "ライブ会場で何が起きるか妄想する", value: 4 }
            ]
         },
         {
            text: "音楽で譲れないところは",
            responses: [
               { text: "やっぱテンポ", value: 3 },
               { text: "歌詞", value: 4 },
               { text: "楽器の音", value: 3 },
               { text: "歌い方", value: 2 }
            ]
         },
         {
            text: "フェスで見たいバンドの出演日が全部バラバラ！",
            responses: [
               { text: "ルーレットで決めよう", value: 3 },
               { text: "お金はどうでもいい、全日行く", value: 4 },
               { text: "一緒に行く人がいる日に行く", value: 1 }
            ]
         },
         {
            text: "私を表現する一言は？",
            responses: [
               { text: "今夜だけはネガティブじゃないことにしてあげる", value: 2 },
               { text: "ありがちな天才", value: 3 },
               { text: "お勉強しといてるよ", value: 1 },
               { text: "ハッピーウェディング前にも落ち着いてる", value: 4 }
            ]
         },
         {
            text:
               "お休みの日、どこかに行くとしたら",
            responses: [
               { text: "ロックフェス", value: 2 },
               { text: "海", value: 1 },
               { text: "お家が最高", value: 3 },
               { text: "本がたくさんある雰囲気のいいカフェ", value: 2 }
            ]
         },
         {
            text: "当日、友達から会えないと連絡が来たら",
            responses: [
               { text: "完全に怒る", value: 1 },
               { text: "実はちょっと嬉しい、お家でゴロゴロする", value: 3 },
               { text: "他の人と予定を作る", value: 3 }
            ]
         },
         {
            text: "私のライブは",
            responses: [
               { text: "格好良く路上ライブ", value: 2 },
               { text: "雰囲気のいいバーで少人数向けのライブ", value: 4 },
               { text: "21世紀だからYouTube配信", value: 1 },
               { text: "東京ドームコンサート", value: 3 },
               { text: "飼ってるワンちゃんの前でライブ", value: 3 }
            ]
         },
         {
            text: "一つだけ魔法を使えるようになるとしたら",
            responses: [
               { text: "瞬間移動能力", value: 1 },
               { text: "風呂に入らなくてもいい匂いがしてきれいにする能力", value: 4 },
               { text: "人の考えを読める能力", value: 2 },
               { text: "見たら全て覚える能力", value: 2 },
               { text: "寝なくても疲れないし健康にも問題ない能力", value: 3 }
            ]
         },
         {
            text: "KONA HAWAIIANSに",
            responses: [
               { text: "入りたい", value: 0 },
               { text: "めちゃくちゃ入りたい", value: 0 }
            ]
         }
      ]
   },
   userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
   el: "#app",
   data: {
      quiz: quiz,
      questionIndex: 0,
      userResponses: userResponseSkelaton,
      isActive: false,
      totalValue: 0
   },
   filters: {
      charIndex: function(i) {
         return String.fromCharCode(97 + i);
      }
   },
   methods: {
      restart: function(){
			 	this.questionIndex=0;
		 		this.userResponses=Array(this.quiz.questions.length).fill(null);
		 },
      selectOption: function(index) {
         Vue.set(this.userResponses, this.questionIndex, index);
         //console.log(this.userResponses);
      },
      next: function() {
         if (this.questionIndex < this.quiz.questions.length)
            this.questionIndex++;
      },

      created: function() {
          this.caculatedValue();
      },
      // Return "true" count in userResponses
      TotalValue: function() {
         var sum = 0;
         for (var i = 0; i < this.questionIndex; i++)
         {
            sum += quiz.questions[i].responses[this.userResponses[i]].value;
         }
         //this.totalValue = sum;
         return sum;
      }
      //     this.totalValue = quiz.questions.reduce((total, item) => {
      //       const itemSum = item.responses.reduce((sum, response) => {
      //           return sum + response.value;
      //       }, 0);

      //       return total + itemSum;
      //   }, 0);
      }
         //return this.userResponses.filter(function(val) { return val }).length;
          
})
    
   

