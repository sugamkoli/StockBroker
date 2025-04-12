document.addEventListener("DOMContentLoaded", function () {
    // Simulate stock price update
    setInterval(() => {
        let stockPrice = document.getElementById("stock-price");
        let currentPrice = parseFloat(stockPrice.innerText);
        let randomChange = (Math.random() * 1.5 - 0.75).toFixed(2); // Random change between -0.75 and 0.75
        stockPrice.innerText = (currentPrice + parseFloat(randomChange)).toFixed(2);
    }, 5000); // Updates every 5 seconds

    // Add TradingView chart
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.innerHTML = JSON.stringify({
        "autosize": true,
        "symbol": "NSE:IRFC",
        "interval": "D",
        "timezone": "Asia/Kolkata",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "allow_symbol_change": true,
        "support_host": "https://www.tradingview.com"
    });

    document.getElementById("tradingview-chart").appendChild(script);
});

