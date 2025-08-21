import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Wallet } from "lucide-react";
import { motion } from "framer-motion";

interface HeaderProps {
  onGuide: () => void;
}

const Header = ({ onGuide }: HeaderProps) => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-medium border-b border-white/20 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="text-2xl">🎰</div>
          <div>
            <h1 className="text-xl font-bold text-card-foreground">TEN Casino</h1>
            <p className="text-xs text-muted-foreground">Decentralized Gaming</p>
          </div>
        </div>

        {/* Chain Info */}
        <div className="hidden md:flex items-center gap-4">
          <Badge variant="secondary" className="glass-light">
            🔗 TEN Protocol
          </Badge>
          <Badge variant="outline" className="glass-light">
            💰 Native TEN
          </Badge>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onGuide}
            className="glass-light hover:glass-medium"
          >
            <HelpCircle className="h-4 w-4" />
          </Button>
          
          <Button
            variant="default"
            size="sm"
            className="neomorphic-hover"
          >
            <Wallet className="h-4 w-4 mr-2" />
            Connect Wallet
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;