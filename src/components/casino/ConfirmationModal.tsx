import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, DollarSign, Users, AlertTriangle, Sparkles } from "lucide-react";

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

interface ConfirmationModalProps {
  open: boolean;
  pool?: Pool;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationModal = ({ open, pool, onClose, onConfirm }: ConfirmationModalProps) => {
  if (!pool) return null;

  const networkFee = 0.0001; // Estimated network fee
  const totalCost = pool.entryFee + networkFee;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <AnimatePresence>
        {open && (
          <DialogContent className="neomorphic max-w-md holographic">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <DialogHeader className="text-center pb-4">
                <motion.div 
                  className="text-4xl mx-auto mb-2"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {pool.emoji}
                </motion.div>
                <DialogTitle className="text-xl">Confirm Pool Entry</DialogTitle>
                <p className="text-muted-foreground">{pool.name}</p>
              </DialogHeader>

              <div className="space-y-4">
                {/* Pool Stats */}
                <div className="neomorphic-inset p-4 rounded-xl space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Current Prize</span>
                    <div className="flex items-center gap-1">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span className="font-bold text-primary">{pool.currentPrize.toFixed(3)} TEN</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Players</span>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-accent" />
                      <span>{pool.playerCount + 1}/{pool.maxPlayers}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Time Remaining</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-warning" />
                      <span>{formatTime(pool.timeRemaining)}</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Transaction Details */}
                <div className="space-y-3">
                  <h4 className="font-medium flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-primary" />
                    Transaction Details
                  </h4>
                  
                  <div className="glass-light p-3 rounded-xl space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Entry Fee</span>
                      <span className="font-mono">{pool.entryFee.toFixed(3)} TEN</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Network Fee</span>
                      <span className="font-mono">~{networkFee.toFixed(4)} TEN</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span className="font-mono">{totalCost.toFixed(4)} TEN</span>
                    </div>
                  </div>
                </div>

                {/* Warning */}
                <div className="glass-light p-3 rounded-xl">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-warning flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-muted-foreground">
                      Entry fees are non-refundable. Winners are selected randomly using 
                      blockchain-based randomness after the timer expires.
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    onClick={onClose}
                    className="flex-1 glass-light hover:glass-medium"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={onConfirm}
                    className="flex-1 neomorphic-hover animate-glow"
                  >
                    Confirm Entry
                  </Button>
                </div>
              </div>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
};

export default ConfirmationModal;