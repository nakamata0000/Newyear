document.addEventListener("DOMContentLoaded", function() {
    const music = document.getElementById("backgroundMusic");
    music.volume = 0.5; // 音量を調整（0.0〜1.0）

    // ボタンがクリックされた際の処理
    document.getElementById("drawButton").addEventListener("click", function() {
        // 音楽を再生
        music.play().catch(function(error) {
            console.log("音楽の再生に失敗しました: ", error);
        });

        const results = [
            "大吉: 今年は素晴らしい年になるでしょう！",
            "中吉: 良いことがたくさんありそうです。",
            "小吉: 少し良いことがあるかも。",
            "凶: 注意が必要です。気を引き締めて！",
            "大凶: 用心が必要です。心の準備を！"
        ];

        const resultElement = document.getElementById("result");
        resultElement.classList.add("hidden"); // 以前の結果を隠す

        // ワクワク感を出すために少し待ってから結果を表示
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * results.length);
            const result = results[randomIndex];
            resultElement.textContent = result;
            resultElement.classList.remove("hidden");
      resultElement.style.opacity = 1; // フェードイン
        }, 1000); // 1秒待つ
    });
});