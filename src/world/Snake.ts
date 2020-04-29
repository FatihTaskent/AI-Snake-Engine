import { Direction } from "../interfaces/Direction";
import { MapNode } from "../nodes/MapNode";
import { Head } from "../nodes/TileTypes/Snake/Head";
import { Tail } from "../nodes/TileTypes/Snake/Tail";

export class Snake {
    private direction: Direction;
    private head : MapNode;
    private body : MapNode[];
    private tail : MapNode;
    
    constructor() {
        this.direction = Direction.East;
    }

    public Initialize(headNode: MapNode, bodyLenght = 2) {
        // Set Head
        this.head = headNode;
        this.tail.Node = new Head()

        // Set Tail
        this.tail = headNode.West
        this.tail.Node = new Tail();
    }


    public Move() {

    }
}