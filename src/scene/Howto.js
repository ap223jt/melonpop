//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Creates a new object.
 *
 * @constructor
 * @extends rune.scene.Scene
 *
 * @class
 * @classdesc
 * 
 * Game state.
 */
game.scene.Howto = function() {
    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------

    /**
     * ...
     */
    rune.scene.Scene.call(this);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

game.scene.Howto.prototype = Object.create(rune.scene.Scene.prototype);
game.scene.Howto.prototype.constructor = game.scene.Howto;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * @inheritDoc
 */
game.scene.Howto.prototype.init = function() {
    rune.scene.Scene.prototype.init.call(this);

    var keyboardimg = new rune.display.Graphic(200, 300, 251, 61, "", "keyboard");
    this.stage.addChild(keyboardimg);

    var coin = new game.scene.Sprites();
    this.stage.addChild(coin);
};

/**
 * @inheritDoc
 */
game.scene.Howto.prototype.update = function(step) {
    rune.scene.Scene.prototype.update.call(this, step);
    
};
