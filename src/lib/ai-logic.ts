
export interface AIResponse {
    text: string;
    action?: string; // e.g., "scroll-contact", "open-resume"
}

interface KnowledgeIntent {
    keywords: string[];
    response: string;
    action?: string;
    priority?: number; // Higher matches first if overlap
}

const knowledgeBase: KnowledgeIntent[] = [
    {
        keywords: ["hire", "why you", "why should i", "employ", "job", "recruit"],
        response: "Here's why Sushant is a great addition to your team: 🌟\n\n" +
            "✅ Strong Full-Stack foundation (React, Node.js, TypeScript)\n" +
            "✅ Data Science background (BS at IIT Madras)\n" +
            "✅ Proven builder: 5+ deployed projects\n" +
            "✅ Adaptable & Quick Learner\n\n" +
            "He is currently open for internships and freelance roles! 🚀",
        action: "scroll-contact",
        priority: 10
    },
    {
        keywords: ["who", "about", "intro", "introduction", "tell me", "profile", "bio"],
        response: "Meet Sushant Mishra! 👨‍💻\n\n" +
            "🎓 BS Data Science student at IIT Madras\n" +
            "💻 Web Developer passionate about modern UI/UX\n" +
            "🌍 Based in India\n" +
            "📧 sushantmishra9016@gmail.com\n\n" +
            "He loves building clean, interactive web experiences.",
        priority: 5
    },
    {
        keywords: ["education", "study", "college", "university", "degree", "iit", "school"],
        response: "Sushant's Education Journey 🎓\n\n" +
            "🏛️ IIT Madras - BS in Data Science & Applications (Expected 2028)\n" +
            "📚 Kendriya Vidyalaya (Schooling)\n\n" +
            "This rigorous program blends Computer Science with Data Science foundation.",
        priority: 8
    },
    {
        keywords: ["experience", "work", "job history", "intern", "internship", "career"],
        response: "Sushant's Experience 💼\n\n" +
            "He is actively building his portfolio with real-world applications:\n" +
            "🚀 Smart Travel Planner (AI Integrated)\n" +
            "🔐 Fraud Detection System\n" +
            "🚂 Train Fare Buddy\n\n" +
            "Currently seeking Internship opportunities to apply these skills professionally! 📈",
        action: "scroll-projects",
        priority: 8
    },
    {
        keywords: ["skill", "tech", "stack", "technology", "language", "framework", "tool", "react", "python"],
        response: "Sushant's Tech Stack 🛠️\n\n" +
            "Frontend: React, Next.js, Tailwind CSS, TypeScript\n" +
            "Backend: Node.js, Express, Python\n" +
            "Database: SQL, MongoDB\n" +
            "Tools: Git, Figma, VS Code\n" +
            "AI: OpenAI API, Gemini API integrations",
        action: "scroll-skills",
        priority: 8
    },
    {
        keywords: ["project", "build", "portfolio", "app", "website", "work"],
        response: "Check out these featured projects! 🚀\n\n" +
            "🌍 Smart Travel Planner\n" +
            "🔐 Fraud Detection System\n" +
            "🚂 Train Fare Buddy\n\n" +
            "Click below to see them in action.",
        action: "scroll-projects",
        priority: 9
    },
    {
        keywords: ["contact", "email", "reach", "call", "message", "connect", "linkedin", "github"],
        response: "Let's connect! 📬\n\n" +
            "📧 sushantmishra9016@gmail.com\n" +
            "💼 LinkedIn & GitHub links are in the Contact section.",
        action: "scroll-contact",
        priority: 9
    },
    {
        keywords: ["resume", "cv", "download"],
        response: "Opening Sushant's Resume... 📄",
        action: "open-resume",
        priority: 10
    },
    {
        keywords: ["hello", "hi", "hey", "greetings", "good morning", "good evening"],
        response: "Hello! 👋 Welcome to Sushant's Portfolio.\n\nI can tell you about his projects, skills, or why he'd be a great hire! What would you like to know?",
        priority: 5
    },
    {
        keywords: ["thank", "thanks", "cool", "awesome", "good", "great"],
        response: "You're welcome! 😊 Glad I could help. Let me know if you need anything else!",
        priority: 5
    },
    {
        keywords: ["location", "where", "city", "country", "based"],
        response: "Sushant is based in India 🇮🇳 and is open to remote opportunities worldwide. 🌍",
        priority: 5
    }
];

// Simple token-based fuzzy matching
export function getAIResponse(input: string): AIResponse {
    const tokens = input.toLowerCase().replace(/[^\w\s]/g, "").split(/\s+/);

    let bestMatch: KnowledgeIntent | null = null;
    let maxScore = 0;

    knowledgeBase.forEach(intent => {
        let score = 0;
        intent.keywords.forEach(keyword => {
            // Check for exact phrase match first
            if (input.toLowerCase().includes(keyword)) {
                score += 3 + (keyword.length * 0.1);
            }

            // value individual token matches
            const keywordTokens = keyword.split(/\s+/);
            const matches = tokens.filter(t => keywordTokens.includes(t)).length;
            if (matches > 0) {
                score += matches;
            }
        });

        if (intent.priority) score += intent.priority * 0.5;

        if (score > maxScore) {
            maxScore = score;
            bestMatch = intent;
        }
    });

    // Threshold for "I don't know"
    if (maxScore < 2) {
        return {
            text: "I'm not quite sure about that yet! 🤔\n\nTry asking about:\n• Skills & Tech Stack\n• Featured Projects\n• Education & Background\n• How to Contact Sushant",
            action: undefined
        };
    }

    return {
        text: bestMatch!.response,
        action: bestMatch!.action
    };
}
