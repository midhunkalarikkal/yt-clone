const names = [
    "Aarav", "Ishaan", "Vihaan", "Kabir", "Ananya", "Sanya", "Rohan", "Aditi", "Neha", "Rajesh",
    "Pranav", "Arjun", "Rahul", "Siddharth", "Meera", "Kavya", "Dev", "Tanvi", "Reyansh", "Trisha",
    "Aditya", "Aryan", "Bhavya", "Charan", "Dhruv", "Esha", "Farhan", "Gaurav", "Harsh", "Indira",
    "Jatin", "Kiran", "Lakshay", "Madhav", "Nidhi", "Omkar", "Piyush", "Qasim", "Ritika", "Saurav",
    "Tanish", "Utkarsh", "Vedant", "Yash", "Zoya", "Sandeep", "Chirag", "Vikram", "Anjali", "Sharanya",
  
    "Michael", "James", "William", "John", "Robert", "David", "Joseph", "Charles", "Thomas", "Daniel",
    "Matthew", "Andrew", "Joshua", "Kevin", "Brian", "Jason", "Ryan", "Eric", "Tyler", "Adam",
    "Lauren", "Ashley", "Emily", "Brittany", "Jennifer", "Jessica", "Sarah", "Nicole", "Megan", "Madison",
    "Ava", "Sophia", "Isabella", "Emma", "Olivia", "Ethan", "Liam", "Noah", "Logan", "Mason",
    "Aiden", "Elijah", "Carter", "Lucas", "Jackson", "Henry", "Alexander", "Grace", "Charlotte", "Zachary",
  
    "Mateo", "Santiago", "Diego", "Javier", "Alejandro", "Carlos", "Luis", "Andres", "Fernando", "Manuel",
    "Hiroshi", "Takashi", "Kenji", "Yuki", "Satoshi", "Rina", "Haruto", "Akira", "Ren", "Sakura",          
    "Chen", "Li Wei", "Wang", "Xiao", "Zhang", "Fang", "Mei", "Lei", "Hao", "Jun",                         
    "Ahmed", "Omar", "Khalid", "Youssef", "Fatima", "Aisha", "Layla", "Hassan", "Rashid", "Tariq",        
    "Viktor", "Dmitri", "Nikolai", "Olga", "Anastasia", "Sergei", "Mikhail", "Tatiana", "Ivan", "Boris",
    "Jean", "Louis", "François", "Pierre", "Claire", "Sophie", "Julien", "Antoine", "Charlotte", "Camille",
    "Luca", "Giovanni", "Alessandro", "Francesco", "Giulia", "Martina", "Elena", "Federico", "Simone", "Valentina",
    "Stefan", "Jakob", "Lukas", "Sebastian", "Maximilian", "Leon", "Jonas", "Felix", "Sophie", "Lena"    
  ];
  


  const messages = [
    "Hi! 😊", "Hello!", "Hey! 👋", "Good morning! 🌞", "Good evening! 🌙", "Good night! 😴", "What's up? 🤔", 
    "How are you? 🤗", "Nice to meet you!", "Hey there! 🙌", "Good afternoon! ☕", "Yo!", "Howdy!", "Hi everyone! 👋", 
    "Hey buddy!", "Hey guys! 🎉", "Hello world!", "Welcome! 👏", "Sup? 😎", "Hola! 🇪🇸", 
    
    "This is a great video!", "Wow, amazing content!", "I really like this!", "Such a cool topic!", 
    "Great job, keep it up!", "This was very helpful!", "I'm learning a lot from this!", "This is so entertaining!", 
    "I totally agree with you!", "This made my day!", "Nice explanation!", "Thanks for sharing!", "Love this!", 
    "Well said!", "You explained it so well!", "Super interesting!", "Keep up the good work!", "Such an insightful video!", 
    "This is really awesome!", "One of the best videos I've seen!", 
    
    "Wow, this video is exactly what I needed today. So informative and fun to watch! 😊", 
  "Honestly, I never thought about this topic like this before. Really eye-opening! 👀", 
  "This is one of the best explanations I’ve come across. Everything is so clear and well-structured! 📖", 
  "Great work! The editing, the content, and the way you explain things are all fantastic! 🎥👏", 
  "Amazing content! I always look forward to watching your videos. Keep it up! 🏆", 
  "I just randomly clicked on this video, but I'm so glad I did. Subscribing now! 🔔", 
  "The way you present information makes it so easy to understand. Thank you for making this! 🙏", 
  "This video is proof that quality content still exists on YouTube. Absolutely brilliant! 🌟", 
  "I love the energy and effort you put into this. Keep making great content! 💡", 
  "I was having a bad day, but this video cheered me up. Thanks a lot! 😊", 
  
    "Who's watching this in 2025?", "Anyone else here for the algorithm?", "First!", "Second!", 
    "Who's here before 1M views?", "This deserves more views!", "Underrated channel!", "This is going viral!", 
    "The effort put into this is incredible!", "Can’t stop watching this!", "Who else is binge-watching?", 
    "I need more videos like this!", "New subscriber here!", "The quality of this video is insane!", 
    "I can’t believe how good this is!", "This video is criminally underrated!", "Notifications on, always!", 
    "Algorithm brought me here, and I'm glad it did!", "Who else loves this channel?", 
  
    "Like if you're watching this in 2025!", "Commenting for the engagement!", "This deserves a million likes!", 
    "I shared this with all my friends!", "Can you make a part 2?", "OMG, this is genius!", "How did you even think of this?", 
    "I’ve never seen anything like this before!", "So satisfying to watch!", "This is blowing my mind!", 
    "YouTube recommendations finally did something right!", "I wish I could like this twice!", 
    "Who else is watching this at 2 AM?", "This made me laugh so hard!", "Instant classic!", "BRB, watching again!", 
    "This needs to be trending!", "I’m sending this to my whole group chat!", 
  
    "Just dropping by to say this is amazing! 🎉", "Keep growing and keep shining! 🌟", "Love from India! 🇮🇳", 
    "Greetings from the USA! 🇺🇸", "Respect from Brazil! 🇧🇷", "Much love from Germany! 🇩🇪", "This channel is going places! 🚀", 
    "I’m addicted to this content! 🤩", "Never stop making videos like this! 💡", "Your content is so refreshing! 🍃", 
    "I feel smarter after watching this! 🧠", "This is the kind of content I live for! ❤️", 
    "I hope you keep making more videos like this! 🙌", "If you're reading this, have a great day! 🌈", 
    "I love the positive vibes in this community! ✨", "This video just made my week! 🎉", "The creativity here is insane! 🎭", 
    "You're an inspiration! 💪", "Legendary content! 👑"
  ];

  const colors = [
    "#512da7", "#8c6e62", "#009c9c", "#aa47bc", "#00579c", 
    "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", 
    "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", 
    "#FF5722", "#795548", "#D32F2F", "#C2185B", "#7B1FA2", 
    "#512DA8", "#303F9F", "#1976D2", "#0288D1", "#0097A7", 
    "#00796B", "#388E3C", "#689F38", "#AFB42B", "#FBC02D", 
    "#FFA000", "#F57C00", "#E64A19", "#5D4037", "#C62828", 
    "#AD1457", "#6A1B9A", "#4527A0", "#283593", "#1565C0", 
    "#0277BD", "#00838F", "#00695C", "#2E7D32", "#558B2F", 
    "#9E9D24", "#F9A825", "#FF8F00", "#EF6C00", "#D84315"
  ];

  export function generateRandomName() {
    return names[Math.floor(Math.random() * names.length)];
  }  

  export function generateRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)];
  }

  export function generateRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
  }
  