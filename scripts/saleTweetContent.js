// Amazonセール情報のTwitter投稿内容定義
// ブラックフライデーセール用の投稿内容を定義

import { affiliateConfig } from './affiliateConfig.js';

const { affiliateTag } = affiliateConfig;

// ツイートメッセージ候補配列
export const saleTweetMessages = [
  '🌈 Amazonブラックフライデー\n🚀 最高の「気分転換」と「お得」を一度に手に入れるチャンスです！',
  '🌟 心が満たされる！「ちょっとした贅沢」を叶える日\n「ちょっとした贅沢」が、日々の小さな幸せに変わります💫',
  '🛡️ 賢い購入で「後悔」をなくす最強の防御策\n「あの時買っておけば…」をなくす！',
  // '⏰ 価値ある時間を守る「時間投資」\n\n年末が近づくほど、お店は混み合い、商品の到着が遅れがちになります📦\n\n今のうちに必要なものをサッと手配しておけば、混雑のストレスから完全に解放されます✨\n\n浮いた時間で、家族との団らんや趣味の時間を楽しめます🎉',
  // '📅 セール期間をしっかりとご確認ください！\n\n🉐 先行セール期間：11月21日（金）0:00～11月23日（日）23:59\n🉐 本セール期間：11月24日（月）0:00～12月1日（月）23:59\n\n最高のチャンスを活かして、あなたの生活にポジティブな変化を起こしましょう💎',
  '🎁 Amazonブラックフライデーセール開催中！',
  '💰 2025年最後のビッグチャンス！\nAmazonブラックフライデーセールで、暮らしに新しい喜びを生み出しましょう✨',
  // '💫 心と暮らしが喜ぶ買い物を実現\n\nAmazonブラックフライデーは、単なるセールではありません🎊\n\nあなたの心と生活にもたらす、嬉しい変化を体験してください🌈\n\n「私にはもったいない」を卒業して、自分自身を大切にする時間を作りましょう💎',
  '😅 1年で最も安くなるからブラックフライデーだけは買っちゃいます\nAmazonブラックフライデーセール開催中です！この機会を逃すわけにはいきません✨',
  '🎉 毎年このセール時期だけは我慢できずに買い物してしまいます...\nAmazonブラックフライデーセール始まりました！1年のうちで最も安いから仕方ないです💰',
  '😊 普段は我慢してるけど、ブラックフライデーだけは買ってしまいます\nAmazonブラックフライデーセール開催中🔥欲しかったあの商品、今が買い時かもしれません！',
  '😭 また買っちゃいます...毎年同じパターン\nAmazonブラックフライデーセール開催中！1年で最も安いから仕方ないですよね💸',
  '💸 普段は節約モードだけど、この時期だけは許してください\nAmazonブラックフライデーセール始まりました🎊まとめ買いするなら今がチャンスです！',
  '🤫 ブラックフライデーだけは買い物のルールを破っちゃいます\nAmazonブラックフライデーセール開催中🔥1年のうちで最も安いから、この機会を逃すわけにはいきません✨',
];

// ハッシュタグ配列
export const saleTweetHashtags = [
  '#Amazonブラックフライデー',
  '#ブラックフライデーセール',
  // '#アマゾンセール',
  // '#ブラックフライデー',
  // '#お得情報',
  // '#セール情報',
  // '#お買い物',
  // '#おすすめ商品',
  // '#Amazon',
  // '#アマゾン',
  // '#セール',
  // '#特価',
  // '#お買い得',
];

// アフィリエイトリンク配列
const saleLinkBlackFridayMainUrl = `https://www.amazon.co.jp/blackfriday?&linkCode=ll2&tag=${affiliateTag}&linkId=213b50b8f3333d64c518a3817bcc1088&language=ja_JP&ref_=as_li_ss_tl`;
// const saleLink80PercentUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522rangeRefinementFilters%255C%2522%253A%257B%255C%2522percentOff%255C%2522%253A%257B%255C%2522min%255C%2522%253A80%252C%255C%2522max%255C%2522%253A100%257D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;
// const saleLink60PercentUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522rangeRefinementFilters%255C%2522%253A%257B%255C%2522percentOff%255C%2522%253A%257B%255C%2522min%255C%2522%253A60%252C%255C%2522max%255C%2522%253A100%257D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;

export const saleTweetAffiliateLinks = [
  `🌈 暮らしにポジティブな変化を！Amazonブラックフライデーセール会場はこちら\n${saleLinkBlackFridayMainUrl}`,
  `🚀 2025年最後のビッグチャンス！Amazonブラックフライデーセール会場\n${saleLinkBlackFridayMainUrl}`,
  `💎 心と暮らしが喜ぶ買い物を実現！Amazonブラックフライデーセール\n${saleLinkBlackFridayMainUrl}`,
  // `⏰ 時間投資で年末の忙しさを回避！Amazonブラックフライデーセール会場\n${saleLinkBlackFridayMainUrl}`,
    // `💰 最大80%OFF！底値を掴むチャンス！割引率80%以上の商品一覧\n${saleLink80PercentUrl}`,
  // `🎁 賢い購入で後悔をなくす！割引率60%以上の商品一覧\n${saleLink60PercentUrl}`,

];

