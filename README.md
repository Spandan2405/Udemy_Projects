# Udemy_Projects
PROJECT LINKS

DICE TOSS :- https://raw.githack.com/Spandan2405/Udemy_Projects/main/Dicee%20Toss/dicee.html

DRUM KIT :- https://raw.githack.com/Spandan2405/Udemy_Projects/main/Drum%20Kit/index.html

SIMON GAME :- https://raw.githack.com/Spandan2405/Udemy_Projects/main/Simon%20Game/index.html

TINDOG PROJECT :- https://raw.githack.com/Spandan2405/Udemy_Projects/main/TinDog%20Project/index.html

UNIVERSITY WEBSITE :- https://raw.githack.com/Spandan2405/Udemy_Projects/main/University%20Website/UNIVERSITY.html

# Telegram Bot Personal Assistant (N8N) :-

![image](https://github.com/user-attachments/assets/8a31d130-f2e0-4154-b298-f61dda79e2d2)

✨ How This Telegram AI Assistant Works (for Beginners)
🧠 Understands Any Message
The bot listens to your text, image, or file message on Telegram using the Telegram Trigger node.

📷 Extracts & Analyzes Image or File Content
If you send a photo or document, it uses OCR (text extraction) and AI to understand and describe it.

💬 Interprets Your Queries with AI
If you type a message or command (like /query or “generate image”), it uses an AI model (OpenAI or OpenRouter) to give helpful replies.

🧩 Creates Smart Prompts Automatically
The bot builds smart prompts (e.g., “Explain this in 5 points”) based on the type of input — so AI responses are short, clear, and relevant.

📡 Replies Directly on Telegram
After processing, it replies to you on Telegram with the answer, explanation, or AI-generated image — like your personal AI assistant.

## 🚀 Setup Instructions

### 1. Prerequisites
- [n8n](https://n8n.io) self-hosted or cloud account
- Telegram bot token (via [@BotFather](https://t.me/BotFather))
- Optional: OpenAI / OpenRouter API key, OCR.Space API key

### 2. Import the Workflow
- Download the JSON workflow file: [`Telegram_bot - Personal Assistant.json`](./Telegram_bot%20-%20Personal%20Assitant.json)
- Import into your n8n editor

### 3. Set Up Credentials
- Add your Telegram credentials under "Telegram Trigger"
- Add API credentials (OpenAI / OpenRouter / HTTP Header Auth)

## 🖼️ Example Use Cases

- Explain screenshots, lecture slides, or photos
- Summarize documents and web articles
- Take voice/text notes from Telegram
- Auto-generate posts or inspirational content
