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
game.wave.Wave01 = function(stage) {
    this.game = stage;
    this.melons = [];
    this.shield;
    this.powerupsDelay = 1000;
    this.powerups = [];

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

game.wave.Wave01.prototype = Object.create(game.wave.Wave.prototype);
game.wave.Wave01.prototype.constructor = game.wave.Wave01;

//------------------------------------------------------------------------------
// Override protected prototype methods
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
game.wave.Wave01.prototype.m_constructor = function() {
    for (var i = 0; i < 2; i++) {
        var l = new game.entity.MelonL();
        var m = new game.entity.MelonM();
        var s = new game.entity.MelonS();

        this.melons.push(m);
    }
};

game.wave.Wave01.prototype.m_constructorPowerups = function() {
    var randomX1 = Math.floor(Math.random() * 1220);
    var randomX2 = Math.floor(Math.random() * 600);

    var self = this;
    this.timers.create({
        duration: 10000,
        scope: this,
        onComplete: function() {
            self.shield = new game.entity.Shield(randomX1, self.game); //Creates shield-powerup
            self.powerups.push(self.shield);
            self.game.stage.addChild(self.shield)
        }
    });

    this.timers.create({
        duration: 3000,
        scope: this,
        onComplete: function() {
            self.coin = new game.entity.Coin(randomX2, self.game); //creates Coins-powerup
            self.powerups.push(self.coin);
            self.game.stage.addChild(self.coin)
        }
    });


};