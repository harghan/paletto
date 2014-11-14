'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    var e = new Engine();
    e.initialisation();
    assertEquals(e.juxtapositionOK(), true);

};

PalettoTestCase.prototype.testStory2 = function () {
    var e = new Engine();
    e.initialisation();
    assertEquals(e.selectColor("a6"), "Yellow");
};

PalettoTestCase.prototype.testStory3 = function () {
    var e = new Engine();
    e.initialisation();
    assertEquals(e.selectColor("a6"), "Yellow");
    assertEquals(e.p1TakePiece("a6"),"");
    assertEquals(e.PiecesOnBoard(), 35);
    assertEquals(e.p1NbPieces(), 1);
};