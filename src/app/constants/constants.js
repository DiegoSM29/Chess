import Rook from "../pieces/rook";
import Knight from "../pieces/knight";
import Bishop from "../pieces/bishop";
import Queen from "../pieces/queen";
import King from "../pieces/king";
import Pawn from "../pieces/pawn";

//player 1 
const rook1Player1 = new Rook(1);
const rook2Player1 = new Rook(1);
const knight1Player1 = new Knight(1);
const knight2Player1 = new Knight(1);
const bishop1Player1 = new Bishop(1);  
const bishop2Player1 = new Bishop(1);  
const queenPlayer1 = new Queen(1);
const kingPlayer1 = new King(1);
const pawn1Player1 = new Pawn(1)
const pawn2Player1 = new Pawn(1)
const pawn3Player1 = new Pawn(1)
const pawn4Player1 = new Pawn(1)
const pawn5Player1 = new Pawn(1)
const pawn6Player1 = new Pawn(1)
const pawn7Player1 = new Pawn(1)
const pawn8Player1 = new Pawn(1)


//player 2 
const rook1Player2 = new Rook(2);
const rook2Player2 = new Rook(2);
const knight1Player2 = new Knight(2);
const knight2Player2 = new Knight(2);
const bishop1Player2 = new Bishop(2);  
const bishop2Player2 = new Bishop(2);  
const queenPlayer2 = new Queen(2);
const kingPlayer2 = new King(2);
const pawn1Player2 = new Pawn(2);
const pawn2Player2 = new Pawn(2);
const pawn3Player2 = new Pawn(2);
const pawn4Player2 = new Pawn(2);
const pawn5Player2 = new Pawn(2);
const pawn6Player2 = new Pawn(2);
const pawn7Player2 = new Pawn(2);
const pawn8Player2 = new Pawn(2);

export const initialBoard = [
  [rook1Player1, knight1Player1, bishop1Player1, queenPlayer1, kingPlayer1, bishop2Player1, knight2Player1, rook2Player1],
  [pawn1Player1, pawn2Player1, pawn3Player1, pawn4Player1, pawn5Player1, pawn6Player1, pawn7Player1, pawn8Player1],
  [null, null, null, null, null, null, null, null,],
  [null, null, null, null, null, null, null, null,],
  [null, null, null, null, null, null, null, null,],
  [null, null, null, null, null, null, null, null,],  
  [pawn1Player2, pawn2Player2, pawn3Player2, pawn4Player2, pawn5Player2, pawn6Player2, pawn7Player2, pawn8Player2],
  [rook1Player2, knight1Player2, bishop1Player2, queenPlayer2, kingPlayer2, bishop2Player2,knight2Player2, rook2Player2],
] 

export const gameModes = [
  {title: "Juega en Linea", href: "gameOnline", description:"10 min vs aleatorio" },
  {title: "Resuelve Problemas", href: "solveProblems", description:"¡Continua tu viaje!"},
  {title: "Problema Diario", href: "dailyProblem", description:"Resuelto por 1.345.321"},
  {title: "Juega contra PC", href:"gameAgainstPc", description:"Antonio - Amistoso"},
  {title: "Aprende con lecciones", href:"learnToPLay", description:"¡Aprende algo nuevo!"},
]

export const menuLinks = [
  {href:"/", label:"Inicio"},
  {href:"/config", label:"Configuración"},
  {href:"/services", label:"Services"},
  {href:"/historial", label:"Historial"},
];