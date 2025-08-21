const responses = {
    "hello": "Hi there! Welcome to Mental HealthMate. How can I assist you today?",
    "how can i book an appointment": "You can book an appointment by going to the 'Services' section and clicking on 'Appointment Scheduling.'",
    "what services do you offer": "We offer real-time chat with professionals, appointment scheduling, and a wide range of mental health resources.",
    "i need immediate help": "If you need immediate assistance, please call a helpline or visit the 'Emergency Support' section on our website.",
    "can you suggest mental health resources": "Absolutely! Check out our 'Resources' section for articles, self-help tools, and videos to support your mental health.",
    "can i talk to a doctor": "Yes, you can. Use the 'Real-Time Chat' feature or schedule an appointment with a professional.",
    "what is mental healthmate": "Mental HealthMate is a platform dedicated to providing accessible mental health resources, professional consultations, and emergency support.",
    "bye": "Goodbye! Take care and stay positive.",
    "default": "I'm not sure how to respond to that. Could you try asking in a different way?"
};
const chatOpenSound = document.getElementById('chatOpenSound');
const chatCloseSound = document.getElementById('chatCloseSound');

   
    function playSound(sound) {
        sound.currentTime = 0; 
        sound.play().catch((error) => {
            console.error("Error playing sound:", error);
        });
    }

function toggleChatbot() {
    const chatbot = document.getElementById('chatbotModal');
    const openSound = document.getElementById('chatOpenSound');
    const closeSound = document.getElementById('chatCloseSound');

    if (chatbot.style.display === 'block') {
        chatbot.style.display = 'none';
        closeSound.play(); // Play close sound
    } else {
        chatbot.style.display = 'block';
        openSound.play(); // Play open sound
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;

    const messagesDiv = document.getElementById('messages');

    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.textContent = message;
    messagesDiv.appendChild(userMessage);

    // Generate bot response
    const botResponse = getBotResponse(message);

    const botMessage = document.createElement('div');
    botMessage.className = 'message bot';
    botMessage.textContent = botResponse;
    messagesDiv.appendChild(botMessage);

    // Clear input
    input.value = '';

    // Scroll to the bottom
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function getBotResponse(message) {
    const lowerCaseMessage = message.toLowerCase();
    return responses[lowerCaseMessage] || responses["default"];
}