import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, DollarSign, TrendingUp, Star } from "lucide-react";

const ProfilePage = () => {
  const stats = {
    totalEntries: 156,
    totalWins: 23,
    winRate: 14.7,
    totalSpent: 0.312,
    totalWon: 0.187,
    netProfit: -0.125,
    biggestWin: 0.045
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Player Profile</h1>
        <p className="text-muted-foreground">Your casino gaming statistics</p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="neomorphic holographic">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Trophy className="h-5 w-5 text-warning" />
              Total Wins
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-warning">{stats.totalWins}</div>
            <p className="text-sm text-muted-foreground">Out of {stats.totalEntries} entries</p>
            <Badge variant="secondary" className="mt-2">
              {stats.winRate}% win rate
            </Badge>
          </CardContent>
        </Card>

        <Card className="neomorphic holographic">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Total Spent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.totalSpent.toFixed(3)}</div>
            <p className="text-sm text-muted-foreground">TEN spent on entries</p>
          </CardContent>
        </Card>

        <Card className="neomorphic holographic">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-secondary" />
              Total Won
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-secondary">{stats.totalWon.toFixed(3)}</div>
            <p className="text-sm text-muted-foreground">TEN won from prizes</p>
          </CardContent>
        </Card>

        <Card className="neomorphic holographic">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Star className="h-5 w-5 text-accent" />
              Biggest Win
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent">{stats.biggestWin.toFixed(3)}</div>
            <p className="text-sm text-muted-foreground">TEN largest single prize</p>
          </CardContent>
        </Card>
      </div>

      {/* Financial Summary */}
      <Card className="neomorphic">
        <CardHeader>
          <CardTitle>Financial Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{stats.totalSpent.toFixed(3)} TEN</div>
              <div className="text-sm text-muted-foreground">Total Invested</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">{stats.totalWon.toFixed(3)} TEN</div>
              <div className="text-sm text-muted-foreground">Total Returns</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${stats.netProfit >= 0 ? 'text-secondary' : 'text-destructive'}`}>
                {stats.netProfit >= 0 ? '+' : ''}{stats.netProfit.toFixed(3)} TEN
              </div>
              <div className="text-sm text-muted-foreground">Net P&L</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;