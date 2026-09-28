// --- 【第 13 課完整單字庫】 ---
const vocabulary = [
    { kana: "あそびます", kanji: "遊びます", zh: "玩、遊玩", cat: "第13課 動詞" },
    { kana: "およぎます", kanji: "泳ぎます", zh: "游泳", cat: "第13課 動詞" },
    { kana: "むかえます", kanji: "迎えます", zh: "迎接、接 (人)", cat: "第13課 動詞" },
    { kana: "つかれます", kanji: "疲れます", zh: "累了、疲倦", cat: "第13課 動詞" },
    { kana: "けっこんします", kanji: "結婚します", zh: "結婚", cat: "第13課 動詞" },
    { kana: "かいものします", kanji: "買い物します", zh: "購物、買東西", cat: "第13課 動詞" },
    { kana: "しょくじします", kanji: "食事します", zh: "吃飯、用餐", cat: "第13課 動詞" },
    { kana: "さんぽします [こうえんを～]", kanji: "散歩します", zh: "散步 [在公園]", cat: "第13課 動詞" },
    { kana: "たいへん[な]", kanji: "大変[な]", zh: "辛苦的、嚴重的、受不了的", cat: "第13課 な形容詞" },
    { kana: "ほしい", kanji: "欲しい", zh: "想要 (某物)", cat: "第13課 い形容詞" },
    { kana: "ひろい", kanji: "広い", zh: "寬敞、寬闊", cat: "第13課 い形容詞" },
    { kana: "せまい", kanji: "狭い", zh: "狹窄", cat: "第13課 い形容詞" },
    { kana: "プール", kanji: "", zh: "游泳池", cat: "第13課 名詞" },
    { kana: "かわ", kanji: "川", zh: "河流", cat: "第13課 名詞" },
    { kana: "びじゅつ", kanji: "美術", zh: "美術", cat: "第13課 名詞" },
    { kana: "つり", kanji: "釣り", zh: "釣魚", cat: "第13課 名詞" },
    { kana: "スキー", kanji: "", zh: "滑雪", cat: "第13課 名詞" },
    { kana: "しゅうまつ", kanji: "週末", zh: "週末", cat: "第13課 時間" },
    { kana: "[お]しょうがつ", kanji: "[お]正月", zh: "新年", cat: "第13課 時間" },
    { kana: "～ごろ", kanji: "", zh: "～左右 (用於時間)", cat: "第13課 助詞" },
    { kana: "なにか", kanji: "何か", zh: "什麼 (某物)", cat: "第13課 代詞" },
    { kana: "どこか", kanji: "", zh: "某處、某個地方", cat: "第13課 代詞" },
    { kana: "おなかがすきます", kanji: "お腹がすきます", zh: "肚子餓", cat: "第13課 會話" },
    { kana: "のどがかわきます", kanji: "のどが渇きます", zh: "口渴", cat: "第13課 會話" },
    { kana: "そうしましょう", kanji: "", zh: "就這麼辦吧！", cat: "第13課 會話" },
    { kana: "べつべつに", kanji: "別々に", zh: "分別、各自分開", cat: "第13課 副詞" }
];

// --- 【第 13 課精選會話句型】 ---
const sentences = [
    { jp: "わたしは 車が 欲しいです。", zh: "我想要一台車。" },
    { jp: "わたしは すしを 食べたいです。", zh: "我想吃壽司。" },
    { jp: "フランスへ 料理を 習いに 行きます。", zh: "我要去法國學料理。" },
    { jp: "今 何が 一番 欲しいですか。", zh: "現在最想要什麼？" },
    { jp: "新しい ケータイが 欲しいです。", zh: "想要一支新手機。" },
    { jp: "夏休みは どこへ 行きたいですか。", zh: "暑假想去哪裡？" },
    { jp: "沖縄へ 行きたいです。", zh: "想去沖繩。" },
    { jp: "別々に お願いします。", zh: "我們要分開結帳。" },
    { jp: "お腹が すきましたね。何か 食べましょう。", zh: "肚子餓了呢。吃點什麼吧！" },
    { jp: "そうしましょう。", zh: "就這麼辦吧！" }
];

// --- 【第 13 課動詞變化庫】 ---
const verbs = [
    { masu: "あそびます", kanji: "遊びます", dict: "あそぶ", nai: "あそばない", tai: "あそびたい", group: "I 類動詞", zh: "玩、遊玩" },
    { masu: "およぎます", kanji: "泳ぎます", dict: "およぐ", nai: "およがない", tai: "およぎたい", group: "I 類動詞", zh: "游泳" },
    { masu: "むかえます", kanji: "迎えます", dict: "むかえる", nai: "むかえない", tai: "むかえたい", group: "II 類動詞", zh: "迎接" },
    { masu: "つかれます", kanji: "疲れます", dict: "つかれる", nai: "つかれない", tai: "つかれたい", group: "II 類動詞", zh: "疲倦、累" },
    { masu: "けっこんします", kanji: "結婚します", dict: "けっこんする", nai: "けっこんしない", tai: "けっこんしたい", group: "III 類動詞", zh: "結婚" },
    { masu: "かいものします", kanji: "買い物します", dict: "かいものする", nai: "かいものしない", tai: "かいものしたい", group: "III 類動詞", zh: "購物" },
    { masu: "しょくじします", kanji: "食事します", dict: "しょくじする", nai: "しょくじしない", tai: "しょくじしたい", group: "III 類動詞", zh: "用餐" },
    { masu: "さんぽします", kanji: "散歩します", dict: "さんぽする", nai: "さんぽしない", tai: "さんぽしたい", group: "III 類動詞", zh: "散步" },
    { masu: "たべます", kanji: "食べます", dict: "たべる", nai: "たべない", tai: "たべたい", group: "II 類動詞", zh: "吃" },
    { masu: "のみます", kanji: "飲みます", dict: "のむ", nai: "のまない", tai: "のみたい", group: "I 類動詞", zh: "喝" },
    { masu: "いきます", kanji: "行きます", dict: "いく", nai: "いかない", tai: "いきたい", group: "I 類動詞", zh: "去" }
];

let vocabMode = 'jp-zh';
let currentVocabIdx = 0;
let currentSentenceIdx = 0;
let currentVerbIdx = 0;

let hwMissedQuestions = [];
let hwCurrentItem = null;

function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    }
}

function switchTab(e, tabId) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    e.target.classList.add('active');
    document.getElementById(`${tabId}-section`).classList.add('active');
}

function normalizeText(text) {
    if (!text) return "";
    return text.toString().trim().toLowerCase()
        .replace(/[\s\(\)\[\]（）「」\.\…\。\、\！\？\!\?ー\-]/g, '')
        .replace(/[Ａ-Ｚａ-ｚ０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0));
}

/* --- 1. 單字卡區塊 --- */
function setVocabMode(mode) {
    vocabMode = mode;
    renderVocabQuestion();
}

function renderVocabQuestion() {
    const item = vocabulary[currentVocabIdx];
    document.getElementById("vocab-category").innerText = item.cat;
    document.getElementById("vocab-answer-container").style.display = "none";

    if (vocabMode === 'jp-zh') {
        document.getElementById("vocab-prompt-label").innerText = "請猜出中文意思是：";
        document.getElementById("vocab-question-text").innerText = item.kana;
        document.getElementById("vocab-answer-text").innerText = item.zh;
        document.getElementById("vocab-extra-text").innerText = (item.kanji && item.kanji.trim() !== '') ? `漢字：${item.kanji}` : '';
    } else {
        document.getElementById("vocab-prompt-label").innerText = "請猜出日文唸法是：";
        document.getElementById("vocab-question-text").innerText = item.zh;
        document.getElementById("vocab-answer-text").innerText = item.kana;
        document.getElementById("vocab-extra-text").innerText = (item.kanji && item.kanji.trim() !== '') ? `漢字：${item.kanji}` : '';
    }
}

function nextVocabQuestion() {
    currentVocabIdx = (currentVocabIdx + 1) % vocabulary.length;
    renderVocabQuestion();
}

function prevVocabQuestion() {
    currentVocabIdx = (currentVocabIdx - 1 + vocabulary.length) % vocabulary.length;
    renderVocabQuestion();
}

function toggleVocabAnswer() {
    const box = document.getElementById("vocab-answer-container");
    box.style.display = (box.style.display === "none" || box.style.display === "") ? "block" : "none";
}

function speakVocab() {
    speakText(vocabulary[currentVocabIdx].kana);
}

/* --- 2. 句子測驗區塊 --- */
function renderSentenceQuestion() {
    const item = sentences[currentSentenceIdx];
    document.getElementById("sentence-question-text").innerText = item.zh;
    document.getElementById("sentence-answer-text").innerText = item.jp;
    document.getElementById("sentence-answer-container").style.display = "none";
}

function nextSentenceQuestion() {
    currentSentenceIdx = (currentSentenceIdx + 1) % sentences.length;
    renderSentenceQuestion();
}

function prevSentenceQuestion() {
    currentSentenceIdx = (currentSentenceIdx - 1 + sentences.length) % sentences.length;
    renderSentenceQuestion();
}

function toggleSentenceAnswer() {
    const box = document.getElementById("sentence-answer-container");
    box.style.display = (box.style.display === "none" || box.style.display === "") ? "block" : "none";
}

function speakSentence() {
    speakText(sentences[currentSentenceIdx].jp);
}

/* --- 3. 手寫測驗 --- */
function updateHwBadge() {
    document.getElementById("hw-review-badge").innerText = `待複習錯題：${hwMissedQuestions.length}`;
}

function nextHandwritingQuestion() {
    document.getElementById("hw-user-input").value = "";
    document.getElementById("hw-feedback-container").className = "feedback-box hidden";

    if (hwMissedQuestions.length > 0 && Math.random() < 0.6) {
        hwCurrentItem = hwMissedQuestions[0];
    } else {
        hwCurrentItem = vocabulary[Math.floor(Math.random() * vocabulary.length)];
    }

    document.getElementById("hw-category").innerText = hwCurrentItem.cat;
    document.getElementById("hw-question").innerText = hwCurrentItem.zh;
    updateHwBadge();
}

function checkHandwritingAnswer() {
    const userInput = document.getElementById("hw-user-input").value;
    if (!userInput) return alert("請先輸入答案！");

    const feedbackBox = document.getElementById("hw-feedback-container");
    feedbackBox.classList.remove("hidden");

    const cleanUser = normalizeText(userInput);
    const cleanKana = normalizeText(hwCurrentItem.kana);
    const cleanKanji = hwCurrentItem.kanji ? normalizeText(hwCurrentItem.kanji) : "";
    const isCorrect = (cleanUser === cleanKana || (cleanKanji && cleanUser === cleanKanji));

    if (isCorrect) {
        feedbackBox.className = "feedback-box correct";
        document.getElementById("hw-feedback-status").innerText = "🎉 比對正確！";
        document.getElementById("hw-feedback-detail").innerHTML = `標準答案：<strong>${hwCurrentItem.kana}</strong> ${hwCurrentItem.kanji ? '(' + hwCurrentItem.kanji + ')' : ''}`;
        
        const existIdx = hwMissedQuestions.findIndex(q => q.kana === hwCurrentItem.kana);
        if (existIdx !== -1) hwMissedQuestions.splice(existIdx, 1);
        speakText(hwCurrentItem.kana);
    } else {
        feedbackBox.className = "feedback-box wrong";
        document.getElementById("hw-feedback-status").innerText = "❌ 答錯了！已加入錯題佇列";
        document.getElementById("hw-feedback-detail").innerHTML = `標準答案：<strong>${hwCurrentItem.kana}</strong> ${hwCurrentItem.kanji ? '(' + hwCurrentItem.kanji + ')' : ''}`;

        const existIdx = hwMissedQuestions.findIndex(q => q.kana === hwCurrentItem.kana);
        if (existIdx === -1) hwMissedQuestions.push(hwCurrentItem);
    }
    updateHwBadge();
}

/* --- 4. 動詞變化區塊 --- */
function renderVerbQuestion() {
    const item = verbs[currentVerbIdx];
    document.getElementById("verb-group").innerText = item.group;
    document.getElementById("verb-masu").innerText = `${item.masu} ${item.kanji ? '(' + item.kanji + ')' : ''}`;
    document.getElementById("verb-meaning").innerText = `中文意思：${item.zh}`;
    
    document.getElementById("verb-ans-masu").innerText = item.masu;
    document.getElementById("verb-ans-dict").innerText = item.dict;
    document.getElementById("verb-ans-nai").innerText = item.nai;
    document.getElementById("verb-ans-tai").innerText = `${item.tai}です`;
    
    document.getElementById("verb-answer-container").style.display = "none";
}

function nextVerbQuestion() {
    currentVerbIdx = (currentVerbIdx + 1) % verbs.length;
    renderVerbQuestion();
}

function prevVerbQuestion() {
    currentVerbIdx = (currentVerbIdx - 1 + verbs.length) % verbs.length;
    renderVerbQuestion();
}

function toggleVerbAnswer() {
    const box = document.getElementById("verb-answer-container");
    box.style.display = (box.style.display === "none" || box.style.display === "") ? "block" : "none";
}

function speakCurrentVerb() {
    speakText(verbs[currentVerbIdx].masu);
}

/* --- 5. 單字列表與搜尋 --- */
function renderTable(data) {
    const tbody = document.getElementById("word-table-body");
    tbody.innerHTML = "";
    data.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><button class="btn-sound" onclick="speakText('${item.kana}')">🔊</button></td>
            <td><strong>${item.kana}</strong></td>
            <td>${item.kanji || '-'}</td>
            <td>${item.zh}</td>
        `;
        tbody.appendChild(tr);
    });
}

function filterWords() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const filtered = vocabulary.filter(item => 
        item.kana.toLowerCase().includes(query) || 
        item.kanji.toLowerCase().includes(query) || 
        item.zh.includes(query)
    );
    renderTable(filtered);
}

window.onload = function() {
    renderVocabQuestion();
    renderSentenceQuestion();
    nextHandwritingQuestion();
    renderVerbQuestion();
    renderTable(vocabulary);
};