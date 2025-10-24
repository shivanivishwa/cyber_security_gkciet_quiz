import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Shield, Lock, Eye, Server } from "lucide-react";
import { UserData } from "../types/quiz";
import { motion } from "motion/react";

interface WelcomeScreenProps {
  onStart: (userData: UserData) => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      onStart({ name: name.trim(), phone: phone.trim() });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          className="absolute top-20 left-10"
          animate={{ y: [0, 20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Shield className="w-16 h-16 text-blue-400" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20"
          animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        >
          <Lock className="w-12 h-12 text-indigo-400" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-20"
          animate={{ y: [0, 15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        >
          <Eye className="w-14 h-14 text-purple-400" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-32"
          animate={{ y: [0, -25, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, delay: 1.5 }}
        >
          <Server className="w-10 h-10 text-cyan-400" />
        </motion.div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <Card className="w-full max-w-md shadow-2xl border-blue-500/20 bg-white/95 backdrop-blur">
          <CardHeader className="text-center space-y-4">
            <motion.div
              className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Shield className="w-8 h-8 text-white" />
            </motion.div>
            <CardTitle className="text-3xl">Cybersecurity Awareness Quiz</CardTitle>
            <CardDescription>
              Test your knowledge and discover how well you understand cyber threats and digital safety practices.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Start Quiz
              </Button>
            </form>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-900">
                <strong>📊 25 Questions</strong> · Estimated time: 10-15 minutes
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}