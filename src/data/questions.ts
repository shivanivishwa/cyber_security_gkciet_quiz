import { Question } from "../types/quiz";

export const questions: Question[] = [
  {
    id: 1,
    question: "Which of the following should you do to restrict access to your files and devices?",
    options: [
      { letter: "A", text: "Update your software once a year." },
      { letter: "B", text: "Share passwords only with colleagues you trust." },
      { letter: "C", text: "Have your staff members access information via an open Wi-Fi network." },
      { letter: "D", text: "Use multi-factor authentication." }
    ],
    correctAnswer: "D"
  },
  {
    id: 2,
    question: "Which people in a business should be responsible for cybersecurity?",
    options: [
      { letter: "A", text: "Business owners only." },
      { letter: "B", text: "IT specialists only." },
      { letter: "C", text: "Managers only." },
      { letter: "D", text: "All staff members should know some cybersecurity basics to reduce the risk of cyber attacks." }
    ],
    correctAnswer: "D"
  },
  {
    id: 3,
    question: "What is a significant emerging trend in cybersecurity for threat detection?",
    options: [
      { letter: "A", text: "Manual Penetration Testing" },
      { letter: "B", text: "Legacy Systems" },
      { letter: "C", text: "Artificial Intelligence (AI)" },
      { letter: "D", text: "Static Firewalls" }
    ],
    correctAnswer: "C"
  },
  {
    id: 4,
    question: "Which type of malware locks a user's data and demands payment for access?",
    options: [
      { letter: "A", text: "Virus" },
      { letter: "B", text: "Worm" },
      { letter: "C", text: "Ransomware" },
      { letter: "D", text: "Spyware" }
    ],
    correctAnswer: "C"
  },
  {
    id: 5,
    question: "What is the primary function of a hardware security token?",
    options: [
      { letter: "A", text: "To verify user identity securely" },
      { letter: "B", text: "To enhance network speed" },
      { letter: "C", text: "To store large datasets" },
      { letter: "D", text: "To monitor system performance" }
    ],
    correctAnswer: "A"
  },
  {
    id: 6,
    question: "What is the primary role of a firewall in a network?",
    options: [
      { letter: "A", text: "To filter and regulate network traffic" },
      { letter: "B", text: "To store critical system logs" },
      { letter: "C", text: "To develop secure applications" },
      { letter: "D", text: "To encrypt user credentials" }
    ],
    correctAnswer: "A"
  },
  {
    id: 7,
    question: "Which of the following best describes phishing?",
    options: [
      { letter: "A", text: "Sending emails pretending to be legitimate to steal information." },
      { letter: "B", text: "A type of antivirus software." },
      { letter: "C", text: "Protecting systems from malware." },
      { letter: "D", text: "Encrypting data to make it unreadable." }
    ],
    correctAnswer: "A"
  },
  {
    id: 8,
    question: "Which of the following is a good password practice?",
    options: [
      { letter: "A", text: "Using the same password for all accounts." },
      { letter: "B", text: "Sharing your password with your colleagues." },
      { letter: "C", text: "Using long, unique passwords with symbols, numbers, and mixed-case letters." },
      { letter: "D", text: "Writing your password on a sticky note." }
    ],
    correctAnswer: "C"
  },
  {
    id: 9,
    question: "What should you do if you suspect a cyber attack on your device or system?",
    options: [
      { letter: "A", text: "Ignore it and hope it stops." },
      { letter: "B", text: "Try random fixes without telling anyone." },
      { letter: "C", text: "Disconnect from the internet and report it to your IT/security team immediately." },
      { letter: "D", text: "Post about it on social media." }
    ],
    correctAnswer: "C"
  },
  {
    id: 10,
    question: "Which of the following statements about public Wi-Fi is correct?",
    options: [
      { letter: "A", text: "It's completely safe for online banking." },
      { letter: "B", text: "It's secure if you don't download files." },
      { letter: "C", text: "It can be risky because hackers can intercept data easily." },
      { letter: "D", text: "It provides the fastest internet speed." }
    ],
    correctAnswer: "C"
  },
  {
    id: 11,
    question: "Which of the following is a major trend in cybersecurity for 2025 according to industry reports?",
    options: [
      { letter: "A", text: "Decreased ransomware attacks" },
      { letter: "B", text: "AI-driven malware that adapts in real-time" },
      { letter: "C", text: "Elimination of social engineering via email" },
      { letter: "D", text: "Less use of cloud services in enterprises" }
    ],
    correctAnswer: "B"
  },
  {
    id: 12,
    question: "Which of the following is emerging as a serious threat because of generative AI?",
    options: [
      { letter: "A", text: "Deepfake impersonation of executives for financial fraud" },
      { letter: "B", text: "Less effective phishing because AI blocks all emails" },
      { letter: "C", text: "Physical theft of hardware only" },
      { letter: "D", text: "Manual mistakes eliminated entirely by AI" }
    ],
    correctAnswer: "A"
  },
  {
    id: 13,
    question: "Which of the following describes a real day-to-day issue many organisations face?",
    options: [
      { letter: "A", text: "All software is always fully patched" },
      { letter: "B", text: "Many systems remain outdated, leaving vulnerabilities unpatched" },
      { letter: "C", text: "There are no vulnerabilities in IoT devices" },
      { letter: "D", text: "Cloud misconfiguration never happens" }
    ],
    correctAnswer: "B"
  },
  {
    id: 14,
    question: "Operational Technology (OT) systems (e.g., industrial control, manufacturing) are increasingly targeted because:",
    options: [
      { letter: "A", text: "They have no connection with the internet" },
      { letter: "B", text: "Attackers want to disrupt physical operations, not just steal data" },
      { letter: "C", text: "They are always well-protected" },
      { letter: "D", text: "They cannot be attacked from remote networks" }
    ],
    correctAnswer: "B"
  },
  {
    id: 15,
    question: "What is \"shadow AI\" in the context of cybersecurity?",
    options: [
      { letter: "A", text: "Only legitimate AI models under full governance" },
      { letter: "B", text: "Unsanctioned AI models used by staff without proper controls" },
      { letter: "C", text: "AI that cannot be used for cyber-attacks" },
      { letter: "D", text: "AI used only in entertainment applications" }
    ],
    correctAnswer: "B"
  },
  {
    id: 16,
    question: "Why are supply-chain dependencies in software and open-source libraries a cyber-risk?",
    options: [
      { letter: "A", text: "Because they never receive updates" },
      { letter: "B", text: "Because attackers can insert malicious code into a widely used library, affecting many downstream users" },
      { letter: "C", text: "Because only proprietary software is risky" },
      { letter: "D", text: "Because open-source is always safe by default" }
    ],
    correctAnswer: "B"
  },
  {
    id: 17,
    question: "What major cybersecurity shift is occurring with respect to identity and access management?",
    options: [
      { letter: "A", text: "Identity is no longer relevant" },
      { letter: "B", text: "Identity is becoming the new perimeter, with hybrid cloud/modern apps requiring strong identity control" },
      { letter: "C", text: "Passwords are enough for all systems" },
      { letter: "D", text: "Organisations are removing multi-factor authentication entirely" }
    ],
    correctAnswer: "B"
  },
  {
    id: 18,
    question: "What should you do before clicking on a link in an email or message?",
    options: [
      { letter: "A", text: "Click it immediately to check what it is." },
      { letter: "B", text: "Hover over the link to see the actual website address." },
      { letter: "C", text: "Forward it to your friends." },
      { letter: "D", text: "Assume it's safe if it looks professional." }
    ],
    correctAnswer: "B"
  },
  {
    id: 19,
    question: "Which of the following is a safe way to handle USB drives?",
    options: [
      { letter: "A", text: "Use only trusted USB drives from known sources." },
      { letter: "B", text: "Plug in any USB drive you find to see what's inside." },
      { letter: "C", text: "Lend your office USB drive to strangers." },
      { letter: "D", text: "Disable antivirus before using a USB." }
    ],
    correctAnswer: "A"
  },
  {
    id: 20,
    question: "What is the best practice when using social media?",
    options: [
      { letter: "A", text: "Post your travel plans and personal information publicly." },
      { letter: "B", text: "Accept all friend requests to grow your network." },
      { letter: "C", text: "Limit what personal information you share and check privacy settings." },
      { letter: "D", text: "Use the same password for all accounts." }
    ],
    correctAnswer: "C"
  },
  {
    id: 21,
    question: "What should you do when your phone prompts for a software update?",
    options: [
      { letter: "A", text: "Ignore it because updates are annoying." },
      { letter: "B", text: "Install it as soon as possible." },
      { letter: "C", text: "Only update once every few years." },
      { letter: "D", text: "Wait until your device stops working." }
    ],
    correctAnswer: "B"
  },
  {
    id: 22,
    question: "How can you tell if a website is safe for online shopping or payments?",
    options: [
      { letter: "A", text: "It starts with \"https://\" and shows a padlock symbol in the address bar." },
      { letter: "B", text: "It loads quickly and looks fancy." },
      { letter: "C", text: "It offers extremely low prices only." },
      { letter: "D", text: "It doesn't ask for any contact information." }
    ],
    correctAnswer: "A"
  },
  {
    id: 23,
    question: "What is the safest way to store your passwords?",
    options: [
      { letter: "A", text: "Use a password manager app." },
      { letter: "B", text: "Write them on a sticky note near your computer." },
      { letter: "C", text: "Store them in an unencrypted text file on your desktop." },
      { letter: "D", text: "Use \"123456\" so you never forget." }
    ],
    correctAnswer: "A"
  },
  {
    id: 24,
    question: "When using public computers (e.g., in a café or library), you should:",
    options: [
      { letter: "A", text: "Always log out of accounts after use." },
      { letter: "B", text: "Save your passwords for convenience." },
      { letter: "C", text: "Leave your account open for others to use." },
      { letter: "D", text: "Connect your personal USB drives freely." }
    ],
    correctAnswer: "A"
  },
  {
    id: 25,
    question: "You receive a phone call from someone claiming to be from your bank asking for your OTP. What should you do?",
    options: [
      { letter: "A", text: "Share the OTP immediately." },
      { letter: "B", text: "Hang up and call your bank's official customer service number." },
      { letter: "C", text: "Email the OTP instead." },
      { letter: "D", text: "Trust them because they knew your name." }
    ],
    correctAnswer: "B"
  }
];
