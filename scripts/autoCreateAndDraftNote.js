// autoCreateAndDraftNote.js
// 商品紹介・お買い物系note自動化スクリプト用の薄いラッパー

import { runWithCore } from '@aa-0921/note-auto-core';
import crypto from 'crypto';

// アフィリエイト設定とリンクを別ファイルから読み込み
import { affiliateConfig, affiliateLinks } from './affiliateConfig.js';

// 再エクスポート（他のファイルから参照できるように）
export { affiliateConfig, affiliateLinks };

(async () => {
  await runWithCore(async ({ core, wantsBackground }) => {
    console.log('[DEBUG] スクリプト実行開始');

    // 商品紹介・お買い物系の題材・切り口（空配列で初期化）
    const topics = [];
    const patterns = [];
    console.log('[DEBUG] topics と patterns を初期化しました');

    // アフィリエイトリンクをランダムに一つ選択して商品情報を抽出
    console.log('');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('[INFO] アフィリエイトリンクのランダム選択');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('[INFO] 利用可能なアフィリエイトリンクの総数:', affiliateLinks.length);
    
    // 暗号学的に安全な乱数生成器を使用してランダムインデックスを生成
    // より偏りの少ない、高品質なランダム性を実現
    const randomBytes = crypto.randomBytes(4);
    const randomValue = randomBytes.readUInt32BE(0);
    const randomIndex = randomValue % affiliateLinks.length;
    
    console.log('[INFO] 生成された乱数値:', randomValue);
    console.log('[INFO] 選択されたインデックス:', randomIndex, `(全${affiliateLinks.length}件中の ${randomIndex + 1} 番目)`);
    console.log('[INFO] 選択確率:', `1/${affiliateLinks.length} = ${(100 / affiliateLinks.length).toFixed(2)}%`);

    const selectedAffiliateLink = affiliateLinks[randomIndex];
    console.log('[INFO] 選択されたアフィリエイトリンク（4、5、6行目）:');
    
    // 4、5、6行目を表示
    const linkLines = selectedAffiliateLink.split('\n');
    if (linkLines.length >= 4) {
      console.log('       4行目:', linkLines[3]);
    }
    if (linkLines.length >= 5) {
      console.log('       5行目:', linkLines[4]);
    }
    if (linkLines.length >= 6) {
      console.log('       6行目:', linkLines[5]);
    }
    if (linkLines.length < 4) {
      console.log('      ', '(4行未満のリンクです)');
      console.log('      ', selectedAffiliateLink);
    }
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('');

    // アフィリエイトリンクから商品情報を抽出する関数
    function extractProductInfo(affiliateLink) {
      console.log('[DEBUG] extractProductInfo 関数を開始');
      const lines = affiliateLink.split('\n');
      console.log('[DEBUG] アフィリエイトリンクの行数:', lines.length);

      let productName = '';
      let productDescription = '';
      let productUrl = '';

      for (const line of lines) {
        // URLを抽出
        if (line.includes('https://amzn.to/') || line.includes('amazon.co.jp')) {
          productUrl = line.trim();
          console.log('[DEBUG] 商品URL検出:', productUrl);
        }
        // 商品名を抽出（👆で始まる行）
        if (line.includes('👆') && line.includes('👆')) {
          const match = line.match(/👆(.+?)(?:\n|$)/);
          if (match) {
            productName = match[1].trim();
            console.log('[DEBUG] 商品名検出:', productName);
          }
        }
        // 商品説明を抽出（👆以外の説明文）
        // 改行を保持するため、配列として収集
        if (line.trim() && !line.includes('👆') && !line.includes('https://')) {
          productDescription += line.trim() + '\n';
        }
      }

      console.log('[DEB UG] 抽出完了 - 商品名:', productName);
      console.log('[DEBUG] 抽出完了 - 商品説明:', productDescription.trim().substring(0, 100) + '...');
      console.log('[DEBUG] 抽出完了 - 商品URL:', productUrl);

      return {
        name: productName,
        description: productDescription.trim(),
        url: productUrl
      };
    }
    
    const productInfo = extractProductInfo(selectedAffiliateLink);
    console.log('[INFO] 選択された商品情報:', productInfo);
    console.log('[INFO] 記事冒頭に挿入するURL:', productInfo.url);

    // 商品情報をtopicsとpatternsに設定
    topics.push(productInfo.name);
    patterns.push(productInfo.description);
    console.log('[DEBUG] topics に追加:', topics);
    console.log('[DEBUG] patterns に追加:', patterns);

    const rewriteConditionsLines = [
      'あなたは商品レビュー・お買い物アドバイザーです。',
      '指定の見出し本文が短いため、200文字以上になるよう実体験や具体例、商品の詳細情報を交えて厚くリライトしてください。',
      '【注意】',
      '- タイトルや見出しは出力せず、本文のみを返す。',
      '- メタ情報（追加要素や文字数など）は一切出力しない。',
      '- 丁寧な敬語（です・ます）で、読みやすさ重視。',
      '- 絵文字を多めに、各行に1つ程度。',
      '- 元の内容に沿い、noteのMarkdownのみ使用。',
      '- 箇条書きは「・ 」、番号付きリストは使わない。',
      '- 特殊トークンや制御文字（<|begin_of_sentence|>等）は絶対に出力しない。',
      '- 自然で読みやすい日本語のみを出力する。',
      '- 完成した文章のみを返し、システムメッセージや処理情報は含めない。',
    ];
    console.log('[DEBUG] rewriteConditionsLines を設定しました');

    // LLM用システムプロンプト（商品紹介・お買い物系に変更）
    const systemMessage = 'あなたは商品レビュー・お買い物アドバイザーです。商品の魅力を分かりやすく伝えるnote記事編集者です。';
    console.log('[DEBUG] systemMessage を設定しました');

    // 記事生成プロンプト条件（商品紹介・お買い物系に変更）
    const articleConditionsLines = [
      'タイトル、本文、ハッシュタグ（#から始まるもの）を含めてください。',
      'タイトルは1行目に「# [実際のタイトル]」として記載してください。',
      '「# タイトル」という文字列ではなく、実際の記事タイトルを入れてください。',
      '本文にはタイトルを含めないでください。',
      '本文は見出しや箇条書きも交えて1000文字程度で丁寧にまとめてください。',
      'ハッシュタグは記事末尾に「#〇〇 #〇〇 ...」の形式でまとめてください。',
      'あなたはプロの商品レビュアーで、プロの編集者です。',
      '読みやすさを重視してください。',
      '改行を多めに入れてください。',
      '各行に1つ程度、絵文字を使用してください。',
      'すべて日本語で出力してください。',
      '切り口に沿った内容にしてください。',
      'noteの正しいマークダウン記法のみを使ってください。',
      '箇条書きはマークダウンではなく、「・ 」で表現してください。',
      '見出しはh2（## 見出し）・h3（### 見出し）のみ。',
      '見出しに「**」等は使わないでください。',
      '番号付きリストは使わないでください。',
      'h1（# タイトル）はタイトル行のみで本文中では使わないでください。',
      'その他のマークダウンやHTMLタグは使わないでください。',
      '【重要】特殊トークンや制御文字（<|begin_of_sentence|>、<｜begin▁of▁sentence｜>等）は絶対に出力しないでください。',
      '【重要】自然で読みやすい日本語のみを出力し、システムメッセージや処理情報は一切含めないでください。',
      '【重要】完成した記事のみを返してください。',
      '商品の魅力や効果、使い方、コスパなどを具体的に説明してください。',
      '実際に使った感想や体験談を交えてください。',
      '購入を検討している読者にとって有益な情報を提供してください。',
      '',
      '【指定商品について】',
      `商品名: ${productInfo.name}`,
      `商品説明: ${productInfo.description}`,
      '',
      '※記事の冒頭には商品URLが自動的に挿入されます。本文にはURLを含めないでください。',
      '【重要】購入方法については記事に含めないでください。商品リンクは自動的に挿入されます。',
      '',
      '【記事作成の重要ルール】',
      '・ 指定された商品のみを紹介し、他の商品は一切記載しないでください。',
      '・ 他の商品とのランキングや比較は絶対に記載しないでください。',
      '・ 単価や詳細な料金計算は行わないでください。',
      '・ メリットのみを記載し、デメリットや注意点は書かないでください。',
      '・ 読者が「買いたい！」と思えるような魅力的でポジティブな文章のみを書いてください。',
      '',
      '上記の指定商品のみを中心とした記事を作成してください。',
      '指定商品の魅力、効果、使い方、コスパなどを詳しく説明し、',
      '読者が購入を検討できるような魅力的な記事にしてください。',
    ];
    console.log('[DEBUG] articleConditionsLines を設定しました（商品名:', productInfo.name, '）');

    // タグ生成の指示文（商品紹介・お買い物系に変更）
    const tagsInstruction =
      '記事内容から最も関連する日本語タグを3〜5個生成し、半角スペース区切りで出力してください。必ず「#お買い物 #商品紹介 #おすすめ #レビュー #PR」を含めてください。本文や説明は禁止。';
    console.log('[DEBUG] tagsInstruction を設定しました');

    // タイトル装飾用絵文字（商品紹介・お買い物系に変更）
    const titleEmojis = [
      '🛍️',
      '💰',
      '⭐',
      '🎉',
      '💎',
      '🔥',
      '✨',
      '👍',
      '💯',
      '🛒',
      '🎁',
      '💝',
    ];
    console.log('[DEBUG] titleEmojis を設定しました（絵文字数:', titleEmojis.length, '）');

    // ----------------------------------------------------------------------------------

    // マガジン誘導文（商品紹介・お買い物系に変更）
    const magazinePromotion = [
      '🛍️　💰　🛍️　💰　🛍️　💰　🛍️　💰　🛍️　💰　🛍️　💰　🛍️　💰　🛍️',
      '',
      '私が皆さんにおすすめしているコスパ抜群の商品をご紹介しています！',
      '効果テキメンなので皆さん試してみていただけると幸いです😊',
      '',
      '【コスパ抜群のおすすめ商品】',
      '✔ 効果テキメンのアイテム',
      '✔ 実際に使って良かったもの',
      'そんな商品を厳選してご紹介。',
      '',
      'ぜひ試してみてください！',
      '',
      'https://note.com/counselor_risa/m/m72a580a7e712',
      '',
      '🛍️　💰　🛍️　💰　🛍️　💰　🛍️　💰　🛍️　💰　🛍️　💰　🛍️　💰　🛍️',
      '',
    ].join('\n');
    console.log('[DEBUG] magazinePromotion を設定しました');

    // アソシエイト表記文（商品紹介・お買い物系に変更）
    const amazonAssociateText =
      'Amazon のアソシエイトとして、「商品紹介・お買い物アドバイザー」は適格販売により収入を得ています。';
    console.log('[DEBUG] amazonAssociateText を設定しました');

    console.log('[INFO] すべての設定が完了しました。core.runAutoCreateAndDraftNote を実行します');
    console.log('[DEBUG] 実行パラメータ - background:', wantsBackground);
    console.log('[DEBUG] 実行パラメータ - topics:', topics);
    console.log('[DEBUG] 実行パラメータ - patterns:', patterns.map(p => p.substring(0, 50) + '...'));
    console.log('[DEBUG] 実行パラメータ - affiliateLink:', selectedAffiliateLink.substring(0, 50) + '...');
    console.log('[DEBUG] 実行パラメータ - productInfo.url:', productInfo.url);

    // 記事の冒頭に商品情報（商品名、URL、商品説明）を挿入するコンテンツを作成
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
      
      // 商品説明を追加（先頭・末尾の絵文字装飾部分を除外）
      if (productInfo.description) {
        console.log('[DEBUG] 商品説明のクリーニング処理を開始');
        console.log('[DEBUG] 元の商品説明の文字数:', productInfo.description.length);
        
        let cleanedDescription = productInfo.description.trim();
        
        // 先頭の絵文字+記号+空白のみの連続部分を削除
        // 通常の文字（日本語・英数字）が出てくるまで削除
        const normalCharRegex = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF\u3400-\u4DBFa-zA-Z0-9ぁ-んァ-ヶー一-龠々〆〤]/;
        
        let startIndex = 0;
        for (let i = 0; i < cleanedDescription.length; i++) {
          if (normalCharRegex.test(cleanedDescription[i])) {
            startIndex = i;
            break;
          }
        }
        
        if (startIndex > 0) {
          console.log(`[DEBUG] 先頭から${startIndex}文字の絵文字装飾を削除`);
          cleanedDescription = cleanedDescription.substring(startIndex);
        }
        
        // 末尾の絵文字+記号+空白のみの連続部分を削除
        let endIndex = cleanedDescription.length;
        for (let i = cleanedDescription.length - 1; i >= 0; i--) {
          if (normalCharRegex.test(cleanedDescription[i])) {
            endIndex = i + 1;
            break;
          }
        }
        
        if (endIndex < cleanedDescription.length) {
          console.log(`[DEBUG] 末尾から${cleanedDescription.length - endIndex}文字の絵文字装飾を削除`);
          cleanedDescription = cleanedDescription.substring(0, endIndex);
        }
        
        console.log('[DEBUG] クリーニング後の商品説明の文字数:', cleanedDescription.length);
        console.log('[DEBUG] 削除された文字数:', productInfo.description.length - cleanedDescription.length);
        
        if (cleanedDescription) {
          prefixParts.push(cleanedDescription);
          prefixParts.push('');  // 空行
        }
      }
      
      // 最後にURLを再度追加
      prefixParts.push(productInfo.url);
      
      prefixContent = prefixParts.join('\n') + '\n\n';
    }
    console.log('[DEBUG] prefixContent を設定しました（固定値として記事冒頭に挿入）:');
    console.log('[DEBUG] prefixContent の長さ:', prefixContent.length, '文字');
    console.log('[DEBUG] prefixContent の内容（最初の200文字）:', prefixContent.substring(0, 200));

    // 記事の自動生成と下書き保存機能を実行
    await core.runAutoCreateAndDraftNote({
      background: wantsBackground,
      topics,
      patterns,
      systemMessage,
      articleConditionsLines,
      rewriteConditionsLines,
      tagsInstruction,
      titleEmojis,
      prefixContent, // 記事の冒頭に挿入するコンテンツ（商品名、URL、商品説明）
      affiliateLink: selectedAffiliateLink, // 選択されたアフィリエイトリンクを渡す
      affiliateLinks,
      magazinePromotion,
      amazonAssociateText,
      // Audible・Kindleアフィリエイト設定（affiliateConfigから取得）
      affiliateTag: affiliateConfig.affiliateTag,
      audibleAffiliateEnabled: affiliateConfig.audibleAffiliateEnabled,
      kindleAffiliateEnabled: affiliateConfig.kindleAffiliateEnabled,
    });
    console.log('[INFO] 商品紹介記事の自動生成と下書き保存が完了しました');
  });
})();
