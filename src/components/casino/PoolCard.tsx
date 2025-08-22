import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, Users, DollarSign, HelpCircle, Sparkles } from "lucide-react";

type EntryStatus = 'ready' | 'entered' | 'awaiting';

interface Pool {
  id: string;
  name: string;
  emoji: string;
  entryFee: number;
  currentPrize: number;
  maxPrize: number;
  playerCount: number;
  maxPlayers: number;
  timeRemaining: number;
  winners: string[];
}

interface PoolCardProps {
  pool: Pool;
  entryStatus: EntryStatus;
  onEntry: () => void;
  onGuide: () => void;
}

const PoolCard = ({ pool, entryStatus, onEntry, onGuide }: PoolCardProps) => {
  const [timeLeft, setTimeLeft] = useState(pool.timeRemaining);
  const [winnerIndex, setWinnerIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const winnerTimer = setInterval(() => {
      setWinnerIndex(prev => (prev + 1) % pool.winners.length);
    }, 2000);
    return () => clearInterval(winnerTimer);
  }, [pool.winners.length]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getButtonContent = () => {
    switch (entryStatus) {
      case 'ready':
        return {
          text: 'Enter Pool',
          variant: 'default' as const,
          className: 'neomorphic-hover animate-glow'
        };
      case 'entered':
        return {
          text: 'Entered ✓',
          variant: 'secondary' as const,
          className: 'neomorphic'
        };
      case 'awaiting':
        return {
          text: 'Processing...',
          variant: 'outline' as const,
          className: 'neomorphic animate-pulse'
        };
    }
  };

  const buttonProps = getButtonContent();
  const fillPercentage = (pool.playerCount / pool.maxPlayers) * 100;
  const prizePercentage = (pool.currentPrize / pool.maxPrize) * 100;

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="neomorphic holographic h-full overflow-hidden">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <motion.div 
                className="text-2xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                {pool.emoji}
              </motion.div>
              <div>
                <CardTitle className="text-base">{pool.name}</CardTitle>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="outline" className="text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    {formatTime(timeLeft)}
                  </Badge>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onGuide}
              className="glass-light hover:glass-medium cursor-pointer"
            >
              <HelpCircle className="h-3 w-3" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-3">
          {/* Prize Pool */}
          <div className="neomorphic-inset p-2.5 rounded-lg">
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-xs font-medium">Prize Pool</span>
              <Sparkles className="h-3 w-3 text-primary" />
            </div>
            <div className="text-lg font-bold text-primary mb-1">
              {pool.currentPrize.toFixed(3)} TEN
            </div>
            <Progress 
              value={prizePercentage} 
              className="h-1.5"
            />
            <div className="text-xs text-muted-foreground mt-1">
              Max: {pool.maxPrize.toFixed(3)} TEN
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-2">
            <div className="glass-light p-2.5 rounded-lg text-center">
              <DollarSign className="h-3 w-3 mx-auto mb-1 text-secondary" />
              <div className="text-xs font-semibold">{pool.entryFee.toFixed(3)} TEN</div>
              <div className="text-xs text-muted-foreground">Entry</div>
            </div>
            <div className="glass-light p-2.5 rounded-lg text-center">
              <Users className="h-3 w-3 mx-auto mb-1 text-accent" />
              <div className="text-xs font-semibold">{pool.playerCount}/{pool.maxPlayers}</div>
              <div className="text-xs text-muted-foreground">Players</div>
            </div>
          </div>

          {/* Player Progress */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span>Pool Fill</span>
              <span>{fillPercentage.toFixed(1)}%</span>
            </div>
            <Progress value={fillPercentage} className="h-1.5" />
          </div>

          {/* Recent Winners */}
          <div className="glass-light p-2.5 rounded-lg">
            <div className="text-xs font-medium mb-1.5">Recent Winners</div>
            <div className="h-5 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={winnerIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs font-mono text-muted-foreground"
                >
                  🏆 {pool.winners[winnerIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Entry Button */}
          <Button
            onClick={onEntry}
            disabled={entryStatus === 'awaiting'}
            variant={buttonProps.variant}
            className={`w-full h-10 text-sm font-semibold cursor-pointer ${buttonProps.className}`}
          >
            {buttonProps.text}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PoolCard;