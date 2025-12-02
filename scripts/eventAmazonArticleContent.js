// イベント告知記事（アマゾンセール）の投稿内容定義
// セクション配列とタイトル配列を定義

import { affiliateConfig } from './affiliateConfig.js';

const { affiliateTag } = affiliateConfig;

// タイトル候補配列（美容・コスメ・日用品寄りのトーンで、12/8(月)までを明記）
export const eventAmazonArticleTitles = [
  '🎉 【12/8(月)まで】アマゾンブラックフライデー（アフターセール）セール開催中！「買ってよかった」愛用品をお得にチェック',
  '🛍️ 【12/8(月)まで】アマゾンブラックフライデー（アフターセール）セール情報をお届けします（美容・日用品編）',
  '💰 【12/8(月)まで】今だけの特別価格！いつものケア用品をお得にストックできるブラックフライデー（アフターセール）',
  '✨ 【12/8(月)まで】Amazonブラックフライデー（アフターセール）セール情報まとめ（スキンケア・ボディケア特集）',
  '🎁 【12/8(月)まで】Amazonブラックフライデー（アフターセール）セールお得な情報をお届けします（ご褒美コスメ編）',
  '🔥 【12/8(月)まで】Amazonブラックフライデー（アフターセール）セールでお買い物！「リピ買い確定アイテム」をお得に迎えるチャンス',
  '💸 【12/8(月)まで】Amazonブラックフライデー（アフターセール）セールセール情報（ストック＆ご褒美バランスよく）',
  '🎊 【12/8(月)まで】Amazonブラックフライデー（アフターセール）セール開催！愛用品・気になるアイテムの要チェックまとめ',
];

// 固定セクション（記事の先頭に必ず表示）
export const eventAmazonArticleHeaderSections = [
  {
    title: '## 🎉 アマゾンセール開催中！（愛用品・ご褒美アイテムにもチャンス）',
    text: `アマゾンで開催中のセール情報をお届けします🛍️
お得な商品をチェックして、お気に入りのアイテムを見つけてください✨
期間限定の特別価格なので、見逃さないようにご注意ください💰

このブラックフライデー（アフターセール）セールは12/8(月)までです⏰
いつも使っているスキンケアや日用品、気になっていたご褒美コスメをお得にストックするなら、この期間中に一度チェックしておくのがおすすめです😊

Amazonの注文履歴画面から今年買ったものの中でセールになっているものを買っておくと、お得にストックすることができて節約になります！🉐

セール期間：
🉐 先行：11月21日（金）0:00～11月23日（日）23:59
🉐 本セール：11月24日（月）0:00～12月1日（月）23:59`,
  },
];

// 投稿内容のセクション配列（オブジェクト形式）
export const eventAmazonArticleSections = [
  {
    title: '## 🌈 Amazonブラックフライデー（アフターセール）が開く未来：暮らしに「ポジティブな変化」を起こす瞬間',
    text: `🚀 最高の「気分転換」と「お得」を一度に手に入れるチャンスです！

いよいよ、Amazonの「ブラックフライデー（アフターセール）」が始まります。この期間は、単なる値下げに目を奪われるのではなく、「あなたの暮らしを、より快適で楽しいものに変えるチャンス」として活用していただきたいのです。

このビッグセールが、あなたの心と生活にもたらす、嬉しい変化をご紹介します。`,
  },
  {
    title: '## 🌟 心が満たされる！「ちょっとした贅沢」を叶える日',
    text: `私たちは毎日、やるべきことに追われています。そんな日常から一歩踏み出し、自分を労う時間も大切です。

「私にはもったいない」を卒業！ 普段なら「高いからまた今度でいいや」と諦めていたものも、この割引期間なら堂々と購入できます。これは、自分自身を大切にする行為です。手に入れた「ちょっとした贅沢」が、日々の小さな幸せに変わります。

「心の満足度」をアップ！ 欲しいものを手に入れたときの高揚感は、私たちの心に活力をもたらします。このポジティブな感情は、モヤモヤとした気分を吹き飛ばし、年末の忙しさに立ち向かうためのエネルギー源になってくれます。`,
  },
  {
    title: '## 🛡️ 賢い購入で「後悔」をなくす最強の防御策',
    text: `ブラックフライデー（アフターセール）の買い物は、将来的な後悔や失敗を防ぐための、非常に合理的な行動です。

「あの時買っておけば…」をなくす！ 本当に欲しかったものを高値で買うのは、もったいないですよね。このセールで「底値」を掴むことは、最も経済合理的な選択です。「あの時買っておけばよかった」という後悔を、この機会にゼロにしましょう。

Amazonの注文履歴画面から今年買ったものの中でセールになっているものを買っておくと、お得にストックすることができて節約になります！🉐

新しい体験への扉を開く 新しいアイテムを手に入れることは、新しい趣味や習慣を始めるきっかけになります。例えば、割引になったカメラで写真に挑戦したり、高機能な調理器具で料理の腕を上げたり。暮らしに新しい喜びが生まれます。`,
  },
  {
    title: '## ⏰ 価値ある時間を守る「時間投資」',
    text: `年末の買い物は、モノを買うだけでなく、「あなたの貴重な時間」を守る投資でもあります。

12月の混雑を避ける！ 年末が近づくほど、お店は混み合い、オンラインでも商品の到着が遅れがちになります。今のうちに、必要なものをサッと手配しておけば、混雑のストレスから完全に解放されます。

浮いた時間で何をする？ 買い物に使うはずだった時間を使って、家族との団らんを楽しんだり、趣味の時間に充てたりできます。ブラックフライデー（アフターセール）は、**「時間を有効に使うための機会」**でもあるのです。`,
  },
  {
    title: '## 📅 セール期間をしっかりとご確認ください！',
    text: `最高のチャンスを活かして、あなたの生活にポジティブな変化を起こしましょう。

🉐 先行セール期間：11月21日（金）0:00～11月23日（日）23:59

🉐 本セール期間：11月24日（月）0:00～12月1日（月）23:59

全体としても、ブラックフライデー（アフターセール）セールは12/8(月)までとなっています⏰
気になるアイテムほど、終了間際には在庫やお届け日が不安定になりやすいので、早めにチェックしておくと安心です✨

心と暮らしが喜ぶ買い物を、Amazonブラックフライデー（アフターセール）で実現してください。`,
  },
];

// 固定アフィリエイトリンク（必ず表示される3つ）
const fixedLinkBlackFridayMainUrl = `https://www.amazon.co.jp/blackfriday?&linkCode=ll2&tag=${affiliateTag}&linkId=213b50b8f3333d64c518a3817bcc1088&language=ja_JP&ref_=as_li_ss_tl`;
const fixedLink80PercentUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522rangeRefinementFilters%255C%2522%253A%257B%255C%2522percentOff%255C%2522%253A%257B%255C%2522min%255C%2522%253A80%252C%255C%2522max%255C%2522%253A100%257D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;
const fixedLink60PercentUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522rangeRefinementFilters%255C%2522%253A%257B%255C%2522percentOff%255C%2522%253A%257B%255C%2522min%255C%2522%253A60%252C%255C%2522max%255C%2522%253A100%257D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;

export const eventAmazonArticleFixedAffiliateLinks = [
  `
💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁
[Amazonブラックフライデー（アフターセール）セール会場はこちら！](${fixedLinkBlackFridayMainUrl})
${fixedLinkBlackFridayMainUrl}
💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁
`,
  `
💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁
[㊙️　割引率　80%以上の商品一覧](${fixedLink80PercentUrl})
${fixedLink80PercentUrl}
💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁
`,
  `
💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁
[㊙️　割引率　60%以上の商品一覧](${fixedLink60PercentUrl})
${fixedLink60PercentUrl}
💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁
`,
];

// ランダムアフィリエイトリンク配列（6つから3つをランダムに選択）
const randomLinkPcUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%25222127210051%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;
const randomLinkFoodUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%252257240051%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;
const randomLinkDrugstoreUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%2522161669011%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;
const randomLinkBeautyUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%252252391051%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;
const randomLinkHobbyAndToysUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%252213299551%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;
const randomLinkAmazonDevicesUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%25224976280051%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;

export const eventAmazonArticleRandomAffiliateLinks = [
  `
💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻
[パソコン・周辺機器のセール商品一覧](${randomLinkPcUrl})
${randomLinkPcUrl}
💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻
`,
  `
🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷
[食品・飲料・お酒のセール商品一覧](${randomLinkFoodUrl})
${randomLinkFoodUrl}
🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷
`,
  `
💊 🏥 💊 🏥 💊 🏥 💊 🏥 💊 🏥 💊 🏥 💊 🏥 💊 🏥 💊 🏥 💊 🏥
[ドラッグストアのセール商品一覧](${randomLinkDrugstoreUrl})
${randomLinkDrugstoreUrl}
💊 🏥 💊 🏥 💊 🏥 💊 🏥 💊 🏥 💊 🏥 💊 🏥 💊 🏥 💊 🏥 💊 🏥
`,
  `
💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨
[ビューティー関連のセール商品一覧](${randomLinkBeautyUrl})
${randomLinkBeautyUrl}
💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨
`,
  `
🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮
[ホビー・おもちゃ関連のセール商品一覧](${randomLinkHobbyAndToysUrl})
${randomLinkHobbyAndToysUrl}
🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮
`,
  `
📱 🎧 📱 🎧 📱 🎧 📱 🎧 📱 🎧 📱 🎧 📱 🎧 📱 🎧 📱 🎧 📱 🎧
[Amazonデバイス等のセール商品一覧](${randomLinkAmazonDevicesUrl})
${randomLinkAmazonDevicesUrl}
📱 🎧 📱 🎧 📱 🎧 📱 🎧 📱 🎧 📱 🎧 📱 🎧 📱 🎧 📱 🎧 📱 🎧
`,
];

// 後方互換性のため、旧形式の配列も残す（使用されない）
export const eventAmazonArticleAffiliateLinks = [
  `[【開催中】ブラックフライデー（アフターセール） 先行セール！セール会場はこちら。](https://www.amazon.co.jp/blackfriday?&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl)`,
];

// 記事末尾に追加する固定ハッシュタグ
export const eventAmazonArticleFooterHashtags = `#Amazonブラックフライデー（アフターセール） #ブラックフライデー（アフターセール）セール #アマゾンセール #ブラックフライデー（アフターセール） #お得情報 #セール情報 #お買い物 #おすすめ商品 #Amazon #アマゾン #セール #特価 #お買い得 #商品レビュー #おすすめ`;

