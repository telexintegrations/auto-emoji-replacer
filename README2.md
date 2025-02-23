# **Auto-Emoji Replacer - Telex Integration**  

## **📌 Overview**  
The **Auto-Emoji Replacer** is a **Modifier Integration** for **Telex**, automatically replacing specific words in messages with corresponding emojis. This enhances user communication by providing a dynamic emoji replacement system.  

## **🚀 Features**  
- Replaces predefined words with emojis in messages.  
- Works as a **Modifier Integration**, modifying messages before they appear in a channel.  
- Easy to configure and extend with additional emoji mappings.  

## **📂 Project Structure**  
```
auto-emoji-replacer/
│── integration.json       # Telex integration settings  
│── index.js               # Main server file  
│── package.json           # Project dependencies  
│── .env                   # Environment variables (optional)  
│── README.md              # Project documentation  
└── test/                  # Test cases and examples
```

## **🛠️ Setup Instructions**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/telexorg/auto-emoji-replacer.git
cd auto-emoji-replacer
```

### **2️⃣ Install Dependencies**  
```sh
npm install
```

### **3️⃣ Start the Server**  
```sh
node index.js
```
By default, the server runs on `http://localhost:3000`.

## **🧪 Testing the Integration**  

### **Test API Locally** (Using cURL or Postman)  
Send a POST request to test emoji replacement:  
```sh
curl -X POST http://localhost:3000/modify -H "Content-Type: application/json" -d '{"message": "I am happy"}'
```
**Expected Response:**  
```json
{
  "modifiedMessage": "I am 😊"
}
```

## **📝 Telex Integration Configuration**  

### **1️⃣ Define the Integration JSON**  
Create an `integration.json` file:  
```json
{
  "name": "Auto-Emoji Replacer",
  "description": "Automatically replaces text with corresponding emojis in messages.",
  "type": "modifier",
  "settings": {
    "trigger": "message",
    "replacement_map": "https://your-hosted-url/emojis.json"
  }
}
```

### **2️⃣ Host the Integration JSON**  
- Upload `integration.json` to a publicly accessible server (e.g., GitHub Pages, Firebase, S3).  
- Replace `https://your-hosted-url/emojis.json` with the actual hosted URL.  

### **3️⃣ Deploy the API**  
- Use a hosting service like **Railway, Render, or Vercel**.  
- After deployment, update the API URL in Telex settings.  

## **📸 Screenshots**  

### **✅ Local Testing (Postman Response)**  
![Postman Screenshot](path/to/postman_screenshot.png)  

### **✅ Telex Integration Test**  
![Telex Integration Screenshot](path/to/telex_screenshot.png)  

## **🎯 Deployment**  

### **1️⃣ Deploy on Railway (Recommended)**  
1. Create a new project on **[Railway](https://railway.app/)**.  
2. Link your GitHub repository.  
3. Deploy the project.  
4. Get the deployed API URL and update it in the `integration.json` settings.  

## **✅ Submission Checklist**  
✔ Hosted **integration.json** file  
✔ Deployed API with a **publicly accessible URL**  
✔ Working **Telex Integration**  
✔ Updated **README** with screenshots  

## **👨‍💻 Contributors**  
- [Your Name](https://github.com/your-profile)  
