/* eslint-disable */
// Create all elements at once
const createAdviceApp = () => {
  // Array of advice with more than 100 entries
  const adviceArray = [
    "Believe in yourself and all that you are.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Do something today that your future self will thank you for.",
    "Little things make big days.",
    "It's going to be hard, but hard does not mean impossible.",
    "Don’t wait for opportunity. Create it.",
    "Sometimes later becomes never. Do it now.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Don’t fear failure. Fear being in the exact same place next year as you are today.",
    "Go where you are celebrated, not where you are tolerated.",
    "Be a voice, not an echo.",
    "Stay patient and trust your journey.",
    "Mistakes are proof that you are trying.",
    "Difficult roads often lead to beautiful destinations.",
    "Work hard in silence; let success make the noise.",
    "Believe in yourself. You are braver than you think.",
    "Your vibe attracts your tribe.",
    "Your time is limited. Don’t waste it.",
    "Turn your wounds into wisdom.",
    "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.",
    "The key to success is to start before you’re ready.",
    "It’s never too late to be what you might have been.",
    "When nothing goes right, go left.",
    "Be so good they can’t ignore you.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Don’t count the days. Make the days count.",
    "Believe you can and you’re halfway there.",
    "Dream big and dare to fail.",
    "Every moment is a fresh beginning.",
    "Turn your can’ts into cans and your dreams into plans.",
    "If you don’t sacrifice for what you want, what you want becomes the sacrifice.",
    "Keep going. Everything you need will come to you at the perfect time.",
    "Take the risk or lose the chance.",
    "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    "Be stronger than your excuses.",
    "It always seems impossible until it’s done.",
    "The only way to achieve the impossible is to believe it is possible.",
    "You are capable of amazing things.",
    "Small steps in the right direction can turn out to be the biggest step of your life.",
    "Start each day with a positive thought and a grateful heart.",
    "Believe in yourself, even if no one else does.",
    "You only fail when you stop trying.",
    "Focus on being productive instead of busy.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Sometimes we're tested not to show our weaknesses, but to discover our strengths.",
    "Life is 10% what happens to you and 90% how you react to it.",
    "It’s not about being the best. It’s about being better than you were yesterday.",
    "Never give up on something you can’t go a day without thinking about.",
    "Opportunities don't happen. You create them.",
    "Do what you can with all you have, wherever you are.",
    "When you know what you want, and want it bad enough, you'll find a way to get it.",
    "If you cannot do great things, do small things in a great way.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "The only place where success comes before work is in the dictionary.",
    "Challenges are what make life interesting. Overcoming them is what makes life meaningful.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "Success is the sum of small efforts, repeated day-in and day-out.",
    "Every accomplishment starts with the decision to try.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Doubt kills more dreams than failure ever will.",
    "If it doesn’t challenge you, it won’t change you.",
    "Life is too short to be anything but happy.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don’t stop until you’re proud.",
    "Happiness is not by chance, but by choice.",
    "Only I can change my life. No one can do it for me.",
    "Life isn’t about waiting for the storm to pass. It’s about learning to dance in the rain.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "You don’t need a new day to start over. You only need a new mindset.",
    "Believe in the magic within yourself.",
    "Work hard, dream big.",
    "Success is a journey, not a destination.",
    "You are stronger than you think.",
    "Believe in yourself and all that you are.",
    "The best way to predict your future is to create it.",
    "You are capable of more than you know.",
    "Stay positive, work hard, make it happen.",
    "Success is not in what you have, but who you are.",
    "Life is short, and it's up to you to make it sweet.",
    "Every day may not be good, but there is something good in every day.",
    "Don’t wait. The time will never be just right.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "You are never too old to set another goal or to dream a new dream.",
    "Perseverance is not a long race; it is many short races one after another."
  ];

  // Create container and elements
  const adviceContainer = document.createElement("div");
  const title = document.createElement("h1");
  const adviceText = document.createElement("p");
  const getAdviceButton = document.createElement("button");
  const footer = document.createElement("footer");
  const styleSheet = document.createElement("style");

  // Set content
  title.textContent = "✨ Wisdom Oracle ✨";
  getAdviceButton.textContent = "🎯 Reveal New Wisdom";
  footer.innerHTML = `Developed by <a href="https://www.linkedin.com/in/muhammad-ahmad-nassar/" target="_blank">Muhammad Nassar</a>`;

  styleSheet.textContent = `
    @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0px); }
    }
    
    @keyframes glow {
        from { text-shadow: 0 0 3px #fff, 0 0 5px #00ff88; }
        to { text-shadow: 0 0 5px #fff, 0 0 10px #00ff88; }
    }

    @keyframes gradientBG {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
  `;

  document.body.style.cssText = `
    margin: 0;
    min-height: 100vh;
    background: linear-gradient(-45deg, #0f0c29, #302b63, #24243e, #1a1a2e);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    flex-direction: column;
  `;

  adviceContainer.style.cssText = `
    max-width: 700px;
    width: 90%;
    margin: 20px;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 15px 30px rgba(0,0,0,0.3);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    text-align: center;
    transform: translateY(0);
    transition: transform 0.3s ease;
    animation: float 6s ease-in-out infinite;
  `;

  title.style.cssText = `
    color: #fff;
    font-size: 2.5rem;
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    animation: glow 2s ease-in-out infinite alternate;
    letter-spacing: 2px;
  `;

  adviceText.style.cssText = `
    font-size: 1.4rem;
    line-height: 1.8;
    color: #fff;
    margin: 30px 0;
    padding: 30px;
    border-radius: 15px;
    background: rgba(255,255,255,0.1);
    border-left: 4px solid #00ff88;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
    transition: all 0.5s ease;
  `;

  getAdviceButton.style.cssText = `
    padding: 15px 30px;
    font-size: 1.2rem;
    background: linear-gradient(45deg, #00ff88, #00b4d8);
    color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    position: relative;
    overflow: hidden;
  `;

  footer.style.cssText = `
    margin-top: 20px;
    font-size: 1rem;
    color: #fff;
    text-align: center;
  `;

  footer.querySelector("a").style.cssText = `
    color: #00ff88;
    text-decoration: none;
    font-weight: bold;
  `;

  // Button interactions with ripple effect (unchanged)
  getAdviceButton.onmouseover = () => {
    getAdviceButton.style.transform = "translateY(-5px) scale(1.05)";
    getAdviceButton.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
  };

  getAdviceButton.onmouseout = () => {
    getAdviceButton.style.transform = "translateY(0) scale(1)";
    getAdviceButton.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
  };

  // Display advice function ensuring a new one each time
  let lastIndex = -1;
  function displayAdvice() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * adviceArray.length);
    } while (randomIndex === lastIndex); // Ensure new advice
    lastIndex = randomIndex;
    adviceText.textContent = `"${adviceArray[randomIndex]}"`;
  }

  // Event listener with debounce
  let timeout;
  getAdviceButton.addEventListener("click", () => {
    if (timeout) return;
    displayAdvice();
    timeout = setTimeout(() => {
      timeout = null;
    }, 1000);
  });

  // Build DOM structure efficiently
  adviceContainer.append(title, adviceText, getAdviceButton);
  document.head.appendChild(styleSheet);
  document.body.appendChild(adviceContainer);
  document.body.appendChild(footer); // Add footer to the body

  // Initial advice display
  displayAdvice();
};

// Initialize the app when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", createAdviceApp);
} else {
  createAdviceApp();
}
