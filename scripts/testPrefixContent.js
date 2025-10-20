// testPrefixContent.js
// prefixContent生成のテスト用スクリプト

// テスト用の商品情報（実際のデータを例として使用）
const productInfo = {
  name: 'ファンケル (FANCL) 発芽米 4kg',
  description: `🍚　🌾　🍚　🌾　🍚　🌾　🍚　🌾　🍚　🌾　🍚　🌾　🍚　🌾　🍚 お米の値段が上がっている今 どうせなら体に優しい発芽米を選びませんか🍚✨ 玄米よりもビタミン ミネラル 食物繊維が豊富で 白米と一緒に炊くだけで栄養価をアップできます💪 GABAによるリラックス効果や血糖値の上昇を穏やかにする効果など 嬉しい健康効果が期待できます😊💊 消化吸収も良く 美容サポートにもなるので 美味しく健康に毎日の食事を楽しめます💖 🍚　🌾　🍚　🌾　🍚　🌾　🍚　🌾　🍚　🌾　🍚　🌾　🍚　🌾　🍚`,
  url: 'https://amzn.to/example123'
};

console.log('='.repeat(80));
console.log('prefixContent生成テスト');
console.log('='.repeat(80));
console.log('');

console.log('【入力データ】');
console.log('商品名:', productInfo.name);
console.log('URL:', productInfo.url);
console.log('商品説明の長さ:', productInfo.description.length, '文字');
console.log('');

// prefixContent生成ロジック
let prefixContent = '';
if (productInfo.url) {
  const prefixParts = [];
  
  // 最初にURLを追加
  prefixParts.push(productInfo.url);
  
  // 空行
  prefixParts.push('');
  
  // 商品名を見出しとして追加
  if (productInfo.name) {
    prefixParts.push(`## ${productInfo.name}`);
    prefixParts.push('');  // 空行
  }
  
  // 商品説明を追加（絵文字装飾部分を除外）
  if (productInfo.description) {
    console.log('【商品説明のフィルタリング処理】');
    console.log('');
    console.log('元の商品説明:');
    console.log(productInfo.description);
    console.log('');
    
    let cleanedDescription = productInfo.description.trim();
    
    // 先頭の絵文字+記号+空白のみの連続部分を削除
    // 通常の文字（日本語・英数字）が出てくるまで削除
    console.log('【先頭の絵文字除去処理】');
    const normalCharRegex = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF\u3400-\u4DBFa-zA-Z0-9ぁ-んァ-ヶー一-龠々〆〤]/;
    
    let startIndex = 0;
    for (let i = 0; i < cleanedDescription.length; i++) {
      const char = cleanedDescription[i];
      if (normalCharRegex.test(char)) {
        startIndex = i;
        console.log(`通常の文字を検出: "${char}" at position ${i}`);
        break;
      }
    }
    
    if (startIndex > 0) {
      const removed = cleanedDescription.substring(0, startIndex);
      console.log(`先頭から${startIndex}文字を削除: "${removed}"`);
      cleanedDescription = cleanedDescription.substring(startIndex);
    } else {
      console.log('先頭に絵文字なし');
    }
    console.log('');
    
    // 末尾の絵文字+記号+空白のみの連続部分を削除
    console.log('【末尾の絵文字除去処理】');
    let endIndex = cleanedDescription.length;
    for (let i = cleanedDescription.length - 1; i >= 0; i--) {
      const char = cleanedDescription[i];
      if (normalCharRegex.test(char)) {
        endIndex = i + 1;
        console.log(`通常の文字を検出: "${char}" at position ${i}`);
        break;
      }
    }
    
    if (endIndex < cleanedDescription.length) {
      const removed = cleanedDescription.substring(endIndex);
      console.log(`末尾から${cleanedDescription.length - endIndex}文字を削除: "${removed}"`);
      cleanedDescription = cleanedDescription.substring(0, endIndex);
    } else {
      console.log('末尾に絵文字なし');
    }
    console.log('');
    
    console.log('クリーニング後の商品説明:');
    console.log(cleanedDescription);
    console.log('');
    console.log('元の文字数:', productInfo.description.length);
    console.log('クリーニング後の文字数:', cleanedDescription.length);
    console.log('削除された文字数:', productInfo.description.length - cleanedDescription.length);
    console.log('');
    
    if (cleanedDescription) {
      prefixParts.push(cleanedDescription);
      prefixParts.push('');  // 空行
    }
  }
  
  // 最後にURLを再度追加
  prefixParts.push(productInfo.url);
  
  prefixContent = prefixParts.join('\n') + '\n\n';
}

console.log('='.repeat(80));
console.log('【最終的な prefixContent】');
console.log('='.repeat(80));
console.log(prefixContent);
console.log('='.repeat(80));
console.log('');
console.log('prefixContent の文字数:', prefixContent.length);
console.log('prefixContent の行数:', prefixContent.split('\n').length);

