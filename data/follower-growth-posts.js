/**
 * Twitter投稿データ（フォロワー増加用）
 * 
 * 配列内の各オブジェクトがランダムに選ばれて投稿されます
 * 
 * 画像を追加する場合：
 * - 相対パス（推奨）: image: 'images/follower-growth/ファイル名.png'
 * - 絶対パス: image: '/Users/aa/projects/note-automation/note-auto-product-recommendation/images/follower-growth/ファイル名.png'
 * 
 * 相対パスはプロジェクトルート（note-auto-product-recommendation/）を基準に解決されます
 * 
 * 例：
 * image: 'images/follower-growth/anua-dokudami.png'
 * image: 'images/follower-growth/vt-pdrn-capsule-cream.jpg'
 */

// - title/textを合わせて 全角140文字（半角280文字）に収まるように
// - 適度に改行を入れて読みやすく
// - 絵文字は 🎀 ‼️ 🥺 のみ使用

export const posts = [
  {
    title: 'Anua全ライン実使用レビュー',
    text: `Anua全商品使ってみた結果まとめ🎀

乾燥肌にはPDRN。ニキビ跡/毛穴/ハリにはレチ0.3。皮脂/赤みにはアゼ15。即効トーンUP/毛穴にはビタミン10。色素沈着にはダークスポット。ツヤ/透明感には桃70。敏感/荒れにはドクダミ80。

悩みに合わせて選べば失敗しないよ！`,
    image: 'images/follower-growth/anua-serum.jpg'
  },
  {
    title: 'Anua｜PDRNヒアルロン酸カプセル100セラム実体験',
    text: `保湿力がすごい🎀

中から潤って外はサラサラになった！PDRN×ヒアルロン酸で一日中つっぱらない。

3本使い切って生理前も肌荒れしにくくなったし、乾燥ジワもふっくらしてきた。

信頼できる。最初に買うならこれだよ🎀`,
    image: 'images/follower-growth/anua-pdrn-hyaluron-serum.jpg'
  },
  {
    title: 'Anua｜レチノール0.3ナイアシンリニューイングセラム',
    text: `即効で分かる‼️

レチ0.3×ナイアシン×セラミドで全方位アプローチ。

跡/毛穴/ハリ改善に効いてるし、ざらつき消えてキメ整って輪郭がシャープになった！

夜は少なめ→保湿重ねて刺激を最小限に。攻めたい夜に使ってる🎀`,
    image: 'images/follower-growth/ANUA-reti.jpg'
  },
  {
    title: 'Anua｜アゼライン酸15インテンスカーミングセラム',
    text: `皮脂対策の決定版🎀

アゼライン酸15%で朝のテカリ・夕方のベタつきが大幅に減った！

赤み/ニキビ跡にも幅広く効くし、Tゾーンの崩れが減って触感がつるんになった。

詰まり防止・増殖抑制。オイリー/混合肌の救世主だよ🎀`,
    image: 'images/follower-growth/anua-azelaic-serum.jpg'
  },
  {
    title: 'Anua｜ビタミン10 PORESTRIXセラム',
    text: `毛穴キュッ、明るさUP🎀

使ってすぐ明るさがワンランク上がる即効タイプ！

キメが引き締まって黒ずみが目立たなくなったし、刺激少なく毎日使えてる。

メイク前1滴で下地不要の透明感。SNS映えも狙える🎀`,
    image: 'images/follower-growth/anua-vitamin-serum.jpg'
  },
  {
    title: 'Anua｜ダークスポットセラム',
    text: `色素沈着に集中攻撃🎀

ナイアシン10%×トラネキサム4%。

跡/シミ/そばかすの"残った影"をピンポイントで狙って全体で改善！

最初は部分→全体へ。停滞してた色ムラに効果実感できた🎀

https://amzn.to/47qLyd`,
    image: 'images/follower-growth/anua-niacinamide-txa-serum.jpg'
  },
  {
    title: 'Anua｜桃70ナイアシンセラム',
    text: `ぷるんツヤ透明肌🎀

なめらかな質感で内側から輝いてる！続けるとワントーン明るくなったし、メイクの密着も向上した。

保湿×明るくする効果のバランス良い。オイリー肌は使用量控えめに。

愛らしい質感が続く楽しみ。香りも上品だよ🎀`,
    image: 'images/follower-growth/anua-peach-niacin-serum.jpg'
  },
  {
    title: 'Anua｜ドクダミ80モイスチャースージングアンプル',
    text: `事前に鎮静🎀

季節変わり目や生理前に"これを先に"使ってる！

赤み・ヒリつきの前兆を抑えられるし、保水機能も向上した。

優しいのに効果ある。肌荒れの兆しが見えたらすぐ使うよ🎀`,
    image: 'images/follower-growth/anua-dokudami-heartleaf-serum.jpg'
  },
  {
    title: '組み合わせ｜レチノール × アゼライン酸（ニキビ対策）',
    text: `発生抑制×改善🎀

皮脂多め・詰まりやすい肌に。

朝/夜はアゼ、夜にレチでターンオーバー促進！テカリが減ってつるん肌になった。

保湿＋日焼け止めで刺激対策も完璧。使い分けが成功の鍵だよ🎀`,
    image: 'images/follower-growth/anua-serum.jpg'
  },
  {
    title: '組み合わせ｜ドクダミ × アゼライン酸（荒れ/赤み対策）',
    text: `鎮静＋皮脂コントロール🎀

赤みが出やすい/思春期ニキビに。

ドクダミで基盤を安定させられるし、アゼで皮脂と菌のバランスを調整できる！

敏感時はドクダミ多め→慣れたらアゼを増量。荒れやすい体質をリセットできた🎀`,
    image: 'images/follower-growth/anua-serum.jpg'
  },
  {
    title: '組み合わせ｜ダークスポット × レチノール（跡/シミ対策）',
    text: `ピンポイントで効かせ全体で改善🎀

ダークスポットで生成を抑えられるし、レチでターンオーバー促進！

跡の"残った影"が均一に薄くなってきた。夜は交互or重ね塗り、日中は日焼け止め徹底。

美白と跡ケアを同時進行。使い方が重要だよ🎀`,
    image: 'images/follower-growth/anua-serum.jpg'
  },
  {
    title: '組み合わせ｜PDRN × レチノール（ハリ/弾力対策）',
    text: `ふわふわ弾力肌🎀

PDRNで水分基盤→レチでターンオーバー促進！

ふっくら感とリフト感を同時に。乾燥ジワも浅くなった。

柔らかくてシャープ。触りたくなる肌質になったよ🎀`,
    image: 'images/follower-growth/anua-serum.jpg'
  },
  {
    title: 'VT PDRN+カプセルクリーム100',
    text: `潤いは量に注意🎀

キールズを超えるしっとり感！多めに連用したらニキビが出たので少量がおすすめ。潤いは高いが持続は短め、メイクのノリはVTが良い🎀`,
    image: 'images/follower-growth/vt-pdrm-capsule-cream.jpg'
  },
  {
    title: 'numbuzin No.5（ナンバーズイン5番）セラム 実体験',
    text: `No.5 セラム🎀

標準配合・濃厚な質感。翌朝ふっくら、即効性は穏やか。乾燥肌におすすめ、敏感肌は注意が必要🎀

https://amzn.to/3JMBOky`,
    image: 'images/follower-growth/numbuzin-5.jpg'
  },
  {
    title: 'クオリティファースト ウルセラC 実使用レビュー',
    text: `ウルセラC🎀

肌になじむし、保湿はやや物足りない。軽い質感でベタつかず、乾燥肌はクリームと併用推奨。穏やかに効く継続型🎀

https://amzn.to/4ornwoI`,
    image: 'images/follower-growth/Quality-1st.jpg'
  },
  {
    title: 'メラノCC プレミアム美容液 実体験',
    text: `メラノCC🎀

プチプラで手に入りやすい！オイル感と香りは好みが分かれる。部分使用で効果を感じられるし、全顔は油っぽい感じある。コスパ重視に良いよ🎀`,
    image: 'images/follower-growth/merano-cc.jpg'
  },
  {
    title: 'Anua レチノール0.3% ナイアシンセラム 実使用レビュー',
    text: `積極的な0.3%レチ🎀

レチ0.3%×ナイアシンで毛穴・シワ・明るさUP！最初はピリつき/乾燥→1日おき・少量・保湿を厚めに。慣れるとハリを実感できた🎀`,
    image: 'images/follower-growth/ANUA-reti.jpg'
  },
  {
    title: 'Innisfree レチノールシカ 実体験',
    text: `レチノールシカ🎀

超マイルド！濃度は低め(推定0.025〜0.1%)＋シカ/保湿で肌荒れしにくい。夜→朝でしっとり整う。「攻めたいけど荒れたくない」人向け。スピードはAnuaより劣るが、じっくりキメ改善してる🎀`,
    image: 'images/follower-growth/innisfree-reti.jpg'
  },
  {
    title: 'エクセル ベース×クレド下地 実比較',
    text: `下地比較🎀

朝→午後も毛穴が目立たないし、肌がもちもち！乾燥でヨレやすい体質でも夜まで崩れにくい。クレド(¥8,250)を愛用→エクセル(¥1,870)でも体感はほぼ同じ。差額¥6,380は本当にすごい🎀`,
    image: 'images/follower-growth/excel-base.jpg'
  },
  {
    title: 'Anua ビタミン10 PORESTRIX 実使用レビュー',
    text: `ビタミン10🎀

高濃度VCで即座に明るさUP！毛穴/黒ずみも透明感。サポート成分で安定性◎。ややベタつきはあるが、効果重視なら買い。コスパ的にも試す価値あるよ🎀`,
    image: 'images/follower-growth/anua-vitamin-serum.jpg'
  },
  {
    title: 'オバジC25 実体験',
    text: `オバジC25🎀

即効性ある！毛穴・くすみ・ハリ・シワに強力。刺激/ベタつきあり→敏感/オイリーは注意。高価だが"攻めたい人"に最適だよ🎀`,
    image: 'images/follower-growth/obagi-C25.jpg'
  },
  {
    title: 'トリデン ブライトニングアンプル 実使用レビュー',
    text: `トリデン アンプル🎀

とろみ×低刺激で毎日使いやすい！敏感肌でもOK。ビタミンCの効きは穏やかで、保湿/ツヤの延長で"じわっと明るい"。劇的な変化より安定を重視する人におすすめ🎀`,
    image: 'images/follower-growth/Torriden-serum.jpg'
  },
  {
    title: 'リデンス『コレクターアンプル』抗酸化セラム 実体験',
    text: `抗酸化でじわっと透明感🎀

抗酸化成分豊富で明るさUP/透明感を実感！美白・色ムラに効果。朝も使えるが乾燥肌は保湿を追加推奨。軽く浸透、ベタつかない🎀

https://amzn.to/4945wMk`,
    image: 'images/follower-growth/Redence-Ampoule.jpg'
  },
  {
    title: 'リデンス『コレクターアンプル』',
    text: `現実的な美白効果🎀

深いシミ/肝斑は完全には消えないが、同価格帯より体感は高レベル！メガ割ならコスパが非常に良い、今買う価値あるよ🎀`,
    image: 'images/follower-growth/Redence-Ampoule.jpg'
  },
  {
    title: 'メディキューブ AGE-R ブースタープロ 実使用レビュー',
    text: `ブースターで浸透を最大限に🎀

美容液の浸透が格段に違う！粒子が大きめなPDRN系とも相性良好。パックの上から当てる使い方も効果的。効果を底上げしつつ、小ジワ/むくみケアにも多機能に対応。強度調整可能で自分好みにできるよ🎀`,
    image: 'images/follower-growth/medicupe-pro.jpg'
  }
];

