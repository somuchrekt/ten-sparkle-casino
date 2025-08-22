import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Gamepad2, 
  Shield, 
  Clock, 
  Users, 
  DollarSign, 
  HelpCircle, 
  Zap, 
  Cloud, 
  Trophy,
  ChevronRight
} from "lucide-react";

interface GuideModalProps {
  open: boolean;
  onClose: () => void;
}

const GuideModal = ({ open, onClose }: GuideModalProps) => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "How It Works",
      icon: Gamepad2,
      content: (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Welcome to TEN Casino</h3>
            <p className="text-muted-foreground">
              Experience provably fair gaming with transparent blockchain technology
            </p>
          </div>

          <div className="grid gap-4">
            <motion.div 
              className="neomorphic p-4 rounded-xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-3">
                <div className="neomorphic w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-primary">1</div>
                <div>
                  <h4 className="font-semibold mb-1">Choose Your Pool</h4>
                  <p className="text-sm text-muted-foreground">
                    Select from four different pool types based on your risk tolerance and preferred stakes.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="neomorphic p-4 rounded-xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-3">
                <div className="neomorphic w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-secondary">2</div>
                <div>
                  <h4 className="font-semibold mb-1">Enter the Pool</h4>
                  <p className="text-sm text-muted-foreground">
                    Pay the entry fee to join the pool. Your entry is immediately recorded on the blockchain.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="neomorphic p-4 rounded-xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-3">
                <div className="neomorphic w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-accent">3</div>
                <div>
                  <h4 className="font-semibold mb-1">Wait for Draw</h4>
                  <p className="text-sm text-muted-foreground">
                    When the timer expires, winners are automatically selected using blockchain randomness.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="neomorphic p-4 rounded-xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-3">
                <div className="neomorphic w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-warning">4</div>
                <div>
                  <h4 className="font-semibold mb-1">Instant Payouts</h4>
                  <p className="text-sm text-muted-foreground">
                    Winners receive prizes instantly to their wallets. No delays, no manual processing.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      title: "Pool Types",
      icon: Trophy,
      content: (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Four Unique Experiences</h3>
            <p className="text-muted-foreground">
              Each pool offers different stakes, timers, and prize distributions
            </p>
          </div>

          <div className="grid gap-4">
            <motion.div 
              className="neomorphic holographic p-4 rounded-xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-bold">Lightning Strike</h4>
                  <Badge variant="outline">Fast & Frequent</Badge>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <div className="text-xs text-muted-foreground">Entry</div>
                  <div className="font-semibold">0.001 TEN</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Max Prize</div>
                  <div className="font-semibold">0.05 TEN</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Timer</div>
                  <div className="font-semibold">~2-3 min</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="neomorphic holographic p-4 rounded-xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🌩️</span>
                <div>
                  <h4 className="font-bold">Thunder Roll</h4>
                  <Badge variant="outline">Balanced Stakes</Badge>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <div className="text-xs text-muted-foreground">Entry</div>
                  <div className="font-semibold">0.002 TEN</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Max Prize</div>
                  <div className="font-semibold">0.12 TEN</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Timer</div>
                  <div className="font-semibold">~1-2 min</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="neomorphic holographic p-4 rounded-xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🎰</span>
                <div>
                  <h4 className="font-bold">Mega Spin</h4>
                  <Badge variant="outline">High Stakes</Badge>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <div className="text-xs text-muted-foreground">Entry</div>
                  <div className="font-semibold">0.003 TEN</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Max Prize</div>
                  <div className="font-semibold">0.21 TEN</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Timer</div>
                  <div className="font-semibold">~3-4 min</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="neomorphic holographic p-4 rounded-xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">💎</span>
                <div>
                  <h4 className="font-bold">Grand Slam</h4>
                  <Badge variant="outline">Premium Experience</Badge>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <div className="text-xs text-muted-foreground">Entry</div>
                  <div className="font-semibold">0.005 TEN</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Max Prize</div>
                  <div className="font-semibold">0.40 TEN</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Timer</div>
                  <div className="font-semibold">~5-8 min</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      title: "Fairness & Security",
      icon: Shield,
      content: (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Provably Fair Gaming</h3>
            <p className="text-muted-foreground">
              Transparent randomness powered by blockchain technology
            </p>
          </div>

          <div className="space-y-4">
            <motion.div 
              className="neomorphic p-4 rounded-xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Blockchain Randomness</h4>
                  <p className="text-sm text-muted-foreground">
                    Winner selection uses verifiable blockchain-based randomness. Every draw is 
                    transparent and cannot be manipulated by anyone, including the platform.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="neomorphic p-4 rounded-xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Automated Payouts</h4>
                  <p className="text-sm text-muted-foreground">
                    Smart contracts automatically distribute prizes to winners immediately 
                    after each draw. No delays, no human intervention required.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="neomorphic p-4 rounded-xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Open Source</h4>
                  <p className="text-sm text-muted-foreground">
                    All smart contract code is publicly verifiable on the blockchain. 
                    You can inspect the exact algorithms used for winner selection.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      title: "FAQ",
      icon: HelpCircle,
      content: (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Frequently Asked</h3>
            <p className="text-muted-foreground">
              Common questions about TEN Casino gameplay
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "How are winners selected?",
                a: "Winners are chosen using blockchain-based randomness when the timer expires. The selection is completely transparent and verifiable."
              },
              {
                q: "When do I receive my prize?",
                a: "Prizes are automatically sent to winners' wallets immediately after the draw completes. No manual claiming required."
              },
              {
                q: "Can I enter multiple pools?",
                a: "Yes! You can enter as many different pools as you like. Each entry is independent and increases your chances."
              },
              {
                q: "What happens if the pool doesn't fill?",
                a: "Draws happen regardless of pool size. Fewer players mean better odds for those who entered."
              },
              {
                q: "Are there any hidden fees?",
                a: "No hidden fees. You only pay the entry fee plus standard blockchain transaction costs."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="neomorphic p-4 rounded-xl"
                whileHover={{ scale: 1.01 }}
              >
                <h4 className="font-semibold mb-2 text-primary">{faq.q}</h4>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="neomorphic max-w-2xl max-h-[80vh] holographic">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-2xl text-center">Casino Guide</DialogTitle>
        </DialogHeader>

        <Tabs value={activeSection.toString()} className="flex-1 overflow-hidden">
          <TabsList className="grid w-full grid-cols-4 neomorphic-inset mb-6">
            {sections.map((section, index) => (
              <TabsTrigger
                key={index}
                value={index.toString()}
                onClick={() => setActiveSection(index)}
                className="flex items-center gap-2"
              >
                <section.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{section.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="overflow-y-auto max-h-96">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {sections[activeSection].content}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-between pt-6 border-t border-white/20">
            <Button
              variant="outline"
              onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
              disabled={activeSection === 0}
              className="glass-light hover:glass-medium"
            >
              Previous
            </Button>
            
            {activeSection === sections.length - 1 ? (
              <Button 
                onClick={onClose} 
                className="neomorphic-hover cursor-pointer"
              >
                Start Playing
              </Button>
            ) : (
              <Button
                onClick={() => setActiveSection(Math.min(sections.length - 1, activeSection + 1))}
                className="neomorphic-hover cursor-pointer"
              >
                Next <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            )}
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default GuideModal;