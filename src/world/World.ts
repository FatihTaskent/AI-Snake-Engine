import { MapNode } from "../nodes/MapNode";
import { Snake } from "./Snake";

/**
 * Act as an World facade for the snake game
 */
export class World {
    // World map
    private mapGrid: MapNode[][];

    // Objects in map
    private snake: Snake;
    private fruitNode: MapNode; // Reference to node where the fruit is


    constructor() {
        this.mapGrid = [];
    }

    public Initialize(width: number = 30, height: number = 30) {
        // Setup grid with default (grass) tiles
        this.InitMap(width, height);

        // Start snake at center of map
        let x = Math.floor(width / 2), 
            y = Math.floor(height / 2);

        

        // Get random node for the Fruit
    }

    /**
     * Recursive function to initialize map acording to width and height and binding all 4 edges of the nodes
     * @param width The amount of tiles in its width
     * @param height The amount of tiles in its height
     * @param curX The current x
     * @param curY The current y
     */
    private InitMap(width: number, height : number, curX?: number, curY?: number) : MapNode {
        let x = curX || 0;
        let y = curY || 0;
    
        // Initial creation of y/row
        this.mapGrid[y] || (this.mapGrid[y] = []);

        // If node already exist we have already assigned this node
        if (this.mapGrid[y][x] != undefined) {
            return this.mapGrid[y][x]
        }
    
        // Create new default node and asign to map position
        let newNode = new MapNode();
        this.mapGrid[y][x] = newNode;
    
        // Init next node in x/column
        if (x + 1 < width) {
            let eastNode = this.InitMap(width, height, x + 1, y)
            eastNode.West = newNode;
            newNode.East = eastNode;
        }
    
        // Init next node in y/row
        if (y + 1 < height) {
            let southNode = this.InitMap(width, height, x, y + 1)
            southNode.North = newNode;
            newNode.South = southNode;
        }

        return newNode;
    }


    public Step() {
    }
}