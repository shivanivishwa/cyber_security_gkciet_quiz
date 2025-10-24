import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { UserData } from "../types/quiz";
import { Trophy, AlertCircle, AlertTriangle, CheckCircle, Star, Download, Sparkles } from "lucide-react";
import { generateCertificatePDF } from "./CertificateGenerator";
import { motion } from "motion/react";

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  userData: UserData;
  onRestart: () => void;
}

export function ResultsScreen({ score, totalQuestions, userData, onRestart }: ResultsScreenProps) {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getFeedback = () => {
    if (score >= 0 && score <= 9) {
      return {
        level: "Needs Awareness",
        icon: AlertCircle,
        color: "text-red-600",
        bgColor: "bg-red-50",
        borderColor: "border-red-200",
        accentColor: "from-red-500 to-orange-500",
        message: "You may be vulnerable to common cyber threats. Attend awareness sessions, learn password hygiene, phishing detection, and basic digital safety."
      };
    } else if (score >= 10 && score <= 15) {
      return {
        level: "Average Awareness",
        icon: AlertTriangle,
        color: "text-yellow-600",
        bgColor: "bg-yellow-50",
        borderColor: "border-yellow-200",
        accentColor: "from-yellow-500 to-amber-500",
        message: "You have a basic idea about cybersecurity, but you still fall for some common traps. Improve by practicing safe browsing, updating software, and using strong passwords."
      };
    } else if (score >= 16 && score <= 20) {
      return {
        level: "Good Awareness",
        icon: CheckCircle,
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
        accentColor: "from-green-500 to-emerald-500",
        message: "You are aware of most day-to-day cyber risks and apply safe digital habits. Keep learning about new scams, data privacy, and security tools to stay ahead."
      };
    } else {
      return {
        level: "Excellent Awareness",
        icon: Star,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        accentColor: "from-blue-500 to-indigo-500",
        message: "You demonstrate strong cybersecurity habits! Continue being a digital safety ambassador — help others understand how to stay secure online."
      };
    }
  };

  const feedback = getFeedback();
  const FeedbackIcon = feedback.icon;

  const handleDownloadCertificate = () => {
    generateCertificatePDF(userData, score, totalQuestions, feedback.level);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-4 py-8">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Animated sparkles */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          className="absolute top-20 left-[10%]"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0 }}
        >
          <Sparkles className="w-8 h-8 text-yellow-300" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-[15%]"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          <Sparkles className="w-6 h-6 text-blue-300" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-[20%]"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          <Sparkles className="w-7 h-7 text-purple-300" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-[25%]"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        >
          <Sparkles className="w-5 h-5 text-cyan-300" />
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        {/* Score Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="shadow-2xl text-center border-blue-500/20 bg-white/95 backdrop-blur">
            <CardHeader>
              <motion.div
                className={`mx-auto w-20 h-20 bg-gradient-to-br ${feedback.accentColor} rounded-full flex items-center justify-center mb-4 shadow-lg`}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                <Trophy className="w-10 h-10 text-white" />
              </motion.div>
              <CardTitle className="text-3xl">Quiz Complete!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-gray-600 mb-2">Hello, {userData.name}!</p>
                <motion.div
                  className="text-6xl my-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                >
                  <span className={`bg-gradient-to-r ${feedback.accentColor} bg-clip-text text-transparent`}>
                    {score}
                  </span>
                  <span className="text-3xl text-gray-400">/{totalQuestions}</span>
                </motion.div>
                <p className="text-xl text-gray-600">{percentage}% Correct</p>
              </div>

              {/* Animated Feedback */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`p-6 rounded-xl border-2 ${feedback.borderColor} ${feedback.bgColor}`}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <FeedbackIcon className={`w-8 h-8 ${feedback.color} flex-shrink-0 mt-1`} />
                  </motion.div>
                  <div className="text-left">
                    <h3 className={`text-xl mb-2 ${feedback.color}`}>{feedback.level}</h3>
                    <p className="text-gray-700">{feedback.message}</p>
                  </div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Button
                  onClick={handleDownloadCertificate}
                  className={`flex-1 bg-gradient-to-r ${feedback.accentColor} hover:opacity-90 gap-2`}
                >
                  <Download className="w-4 h-4" />
                  Download Certificate
                </Button>
                <Button
                  onClick={onRestart}
                  variant="outline"
                  className="flex-1 border-blue-500/20 bg-white/90 backdrop-blur"
                >
                  Take Quiz Again
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* User Info Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="shadow-xl border-blue-500/20 bg-white/95 backdrop-blur">
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Name</p>
                  <p>{userData.name}</p>
                </div>
                <div>
                  <p className="text-gray-600">Phone</p>
                  <p>{userData.phone}</p>
                </div>
                <div>
                  <p className="text-gray-600">Score</p>
                  <p>{score} / {totalQuestions}</p>
                </div>
                <div>
                  <p className="text-gray-600">Level</p>
                  <p>{feedback.level}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center pb-4"
        >
          <p className="text-xs text-blue-200/60">Designed by Shibashis</p>
        </motion.div>
      </div>
    </div>
  );
}