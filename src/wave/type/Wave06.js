//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Creates a new object.
 *
 * @constructor
 * @extends game.wave.Wave
 *
 * @class
 * @classdesc
 * 
 * Wave 002.
 */
game.wave.Wave06 = function(stage) {
    this.game = stage;
    this.melons = [];
    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    game.wave.Wave.call(this, stage);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

game.wave.Wave06.prototype = Object.create(game.wave.Wave.prototype);
game.wave.Wave06.prototype.constructor = game.wave.Wave06;

//------------------------------------------------------------------------------
// Override protected prototype methods
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
game.wave.Wave06.prototype.m_constructor = function() {
    for (var i = 0; i < 9; i++) {
        var randomX1 = Math.floor(Math.random() * 1200);
        var randomX2 = Math.floor(Math.random() * 1200);

        var l = new game.entity.MelonL();
        var m = new game.entity.MelonM(randomX1, -30);
        var s = new game.entity.MelonS(randomX2, -10);

        this.melons.push(l, m, s);
    }
};

game.wave.Wave06.prototype.m_constructorPowerups = function() {
    var self = this;
    var coinTime = [5000, 7000, 20000, 30000, 40000, 55000, 80000, 100000, 125000];

    for (var i = 0; i < coinTime.length; i++) {
        this.timers.create({
            duration: coinTime[i],
            scope: this,
            onComplete: function() {
                self.coin = new game.entity.Coin(self.game); //creates Coins-powerup
                self.powerups.push(self.coin);
                self.game.stage.addChild(self.coin)
            }
        });
    }

    this.timers.create({
        duration: 30000,
        scope: this,
        onComplete: function() {
            self.shield = new game.entity.Shield(self.game); //Creates shield-powerup
            self.powerups.push(self.shield);
            self.game.stage.addChild(self.shield)
        }
    });
};