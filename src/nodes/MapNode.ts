import { ITile } from "../interfaces/Tile";
import { Grass } from "./TileTypes/Grass";

export class MapNode {

    public Node: ITile;

    // Aligning nodes
    public North?: MapNode;
    public East?: MapNode;
    public South?: MapNode;
    public West?: MapNode;

    constructor(tile : ITile = new Grass())  {
        this.Node = tile
    }

}