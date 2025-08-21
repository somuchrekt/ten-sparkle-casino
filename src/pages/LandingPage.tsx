import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Zap, 
  Cloud, 
  Gamepad2, 
  Trophy, 
  Shield, 
  Clock, 
  Users, 
  Gift,
  DollarSign,
  Star,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useState, useEffect } from "react";

const LandingPage = () => {
  const navigate = useNavigate();
  const [activePool, setActivePool] = useState(0);

  const stats = [
    { title: "Total Pools", value: "1,247", icon: Gamepad2, color: "text-primary" },
    { title: "Active Players", value: "8,953", icon: Users, color: "text-secondary" },
    { title: "Total Prizes", value: "124.7 TEN", icon: DollarSign, color: "text-accent" },
    { title: "Winners Today", value: "342", icon: Trophy, color: "text-warning" }
  ];

  const pools = [
    {
      name: "Lightning Strike",
      emoji: "⚡",
      fee: "0.001 TEN",
      prize: "0.05 TEN",
      players: 50,
      description: "Quick rounds with instant results"
    },
    {
      name: "Thunder Roll",
      emoji: "🌩️",
      fee: "0.002 TEN",
      prize: "0.12 TEN",
      players: 60,
      description: "Medium stakes for steady wins"
    },
    {
      name: "Mega Spin",
      emoji: "🎰",
      fee: "0.003 TEN",
      prize: "0.21 TEN",
      players: 70,
      description: "High stakes, bigger rewards"
    },
    {
      name: "Grand Slam",
      emoji: "💎",
      fee: "0.005 TEN",
      prize: "0.40 TEN",
      players: 80,
      description: "Ultimate jackpot experience"
    }
  ];

  const benefits = [
    { icon: Shield, title: "Provably Fair", description: "Blockchain-verified randomness" },
    { icon: Clock, title: "Instant Payouts", description: "Automatic prize distribution" },
    { icon: Users, title: "Community Driven", description: "Player-focused ecosystem" },
    { icon: Gift, title: "No Hidden Fees", description: "Transparent cost structure" },
    { icon: Star, title: "Premium Rewards", description: "Enhanced winning potential" },
    { icon: Sparkles, title: "Smooth Experience", description: "Optimized user interface" }
  ];

  const steps = [
    { number: "1", title: "Connect Wallet", description: "Link your TEN protocol wallet" },
    { number: "2", title: "Choose Pool", description: "Select your preferred game type" },
    { number: "3", title: "Enter & Play", description: "Join the round with one click" },
    { number: "4", title: "Win Prizes", description: "Automatic payouts to winners" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePool((prev) => (prev + 1) % pools.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-20 text-center"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            🎰 TEN Protocol Casino
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
            Casino Revolution
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience the future of decentralized gaming with provably fair pools, 
            instant payouts, and the security of blockchain technology.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 neomorphic-hover animate-glow"
            onClick={() => navigate('/casino')}
          >
            Enter Casino <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="neomorphic holographic">
                <CardContent className="p-6 text-center">
                  <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-3xl font-bold text-card-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.title}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Pools */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-card-foreground mb-4">Choose Your Pool</h2>
          <p className="text-xl text-muted-foreground">Four unique gaming experiences tailored to your style</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pools.map((pool, index) => (
            <motion.div
              key={pool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`neomorphic holographic cursor-pointer transition-all duration-300 ${
                activePool === index ? 'ring-2 ring-primary scale-105' : ''
              }`}>
                <CardHeader className="text-center pb-3">
                  <div className="text-4xl mb-2">{pool.emoji}</div>
                  <CardTitle className="text-xl">{pool.name}</CardTitle>
                  <CardDescription>{pool.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <div className="text-2xl font-bold text-primary">{pool.fee}</div>
                  <div className="text-sm text-muted-foreground">Entry Fee</div>
                  <div className="text-lg font-semibold text-secondary">{pool.prize}</div>
                  <div className="text-sm text-muted-foreground">Current Prize</div>
                  <Badge variant="secondary">{pool.players} Players</Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-card-foreground mb-4">Why Choose Our Casino?</h2>
          <p className="text-xl text-muted-foreground">Built for the modern blockchain gaming experience</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="neomorphic p-6 mb-4 w-fit mx-auto rounded-full">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-card-foreground mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground">Get started in four simple steps</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="neomorphic w-16 h-16 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-20 text-center"
      >
        <Card className="neomorphic holographic max-w-4xl mx-auto">
          <CardContent className="p-12">
            <h2 className="text-4xl font-bold text-card-foreground mb-6">Ready to Win?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of players already enjoying fair, transparent, and exciting blockchain gaming.
            </p>
            <Button 
              size="lg" 
              className="text-xl px-12 py-6 neomorphic-hover animate-glow"
              onClick={() => navigate('/casino')}
            >
              Start Playing Now <Sparkles className="ml-2 h-6 w-6" />
            </Button>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
};

export default LandingPage;