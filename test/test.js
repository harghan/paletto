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

PalettoTestCase.prototype.testStory4 = function () {
    var e = new Engine();
    e.initialisation();

    assertEquals(e.selectColor("a6"), "Yellow");
    assertEquals(e.p1TakePiece("a6"),"");
    assertEquals(e.PiecesOnBoard(), 35);
    assertEquals(e.p1NbPieces(), 1);

    assertEquals(e.selectColor("a1"), "Black");
    assertEquals(e.p2TakePiece("a1"),"");
    assertEquals(e.p2TakePiece("f6"),"");
    assertEquals(e.PiecesOnBoard(), 33);
    assertEquals(e.p2NbPieces(), 2);
};

PalettoTestCase.prototype.testStory6 = function () {
    var e = new Engine();
    e.initialisation();

    assertEquals(e.selectColor("a1"), "Black");
    assertEquals(e.p1TakePiece("a1"),"");
    assertEquals(e.p1TakePiece("f6"),"");
    assertEquals(e.PiecesOnBoard(), 34);
    assertEquals(e.p1NbPieces(), 2);

    assertEquals(e.selectColor("b1"), "Green");
    assertEquals(e.p2TakePiece("b1"),"");
    assertEquals(e.p2TakePiece("e6"),"");
    assertEquals(e.p2TakePiece("f5"),"");
    assertEquals(e.PiecesOnBoard(), 31);
    assertEquals(e.p2NbPieces(), 3);

    assertEquals(e.selectColor("a2"), "Yellow");
    assertEquals(e.p1TakePiece("a2"),"");
    assertEquals(e.p1TakePiece("a6"),"");
    assertEquals(e.PiecesOnBoard(), 29);
    assertEquals(e.p1NbPieces(), 4);

    assertEquals(e.selectColor("a3"), "Blue");
    assertEquals(e.p2TakePiece("a3"),"");
    assertEquals(e.PiecesOnBoard(), 28);
    assertEquals(e.p2NbPieces(), 4);

    assertEquals(e.selectColor("a5"), "White");
    assertEquals(e.p1TakePiece("a5"),"");
    assertEquals(e.p1TakePiece("f4"),"");
    assertEquals(e.p1TakePiece("f1"),"");
    assertEquals(e.p1TakePiece("c1"),"");
    assertEquals(e.PiecesOnBoard(), 24);
    assertEquals(e.p1NbPieces(), 8);

    assertEquals(e.selectColor("e1"), "Red");
    assertEquals(e.p2TakePiece("e1"),"");
    assertEquals(e.p2TakePiece("f3"),"");
    assertEquals(e.p2TakePiece("d6"),"");
    assertEquals(e.p2TakePiece("a4"),"");
    assertEquals(e.PiecesOnBoard(), 20);
    assertEquals(e.p2NbPieces(), 8);

    //assertEquals(e.selectColor("d3"), "Blue");
    //assertEquals(e.p1TakePiece("d3"),"");
    assertEquals(e.selectColor("c3"), "Blue");
    assertEquals(e.p1TakePiece("c3"),"");
    assertEquals(e.p1TakePiece("f2"),"");
    assertEquals(e.p1TakePiece("b6"),"");
    assertEquals(e.PiecesOnBoard(), 17);
    assertEquals(e.p1NbPieces(), 11);

    assertEquals(e.selectColor("b3"), "Yellow");
    assertEquals(e.p2TakePiece("b3"),"");
    assertEquals(e.p2TakePiece("e2"),"");
    assertEquals(e.p2TakePiece("e5"),"");
    assertEquals(e.PiecesOnBoard(), 14);
    assertEquals(e.p2NbPieces(), 11);

    assertEquals(e.selectColor("b4"), "Black");
    assertEquals(e.p1TakePiece("b4"),"");
    assertEquals(e.p1TakePiece("c6"),"");
    assertEquals(e.p1TakePiece("d5"),"");
    assertEquals(e.p1TakePiece("e3"),"");
    assertEquals(e.PiecesOnBoard(), 10);
    assertEquals(e.p1NbPieces(), 15);

    assertTrue (e.p1win() === "player 1");
};