import { ITile } from "../../../interfaces/Tile";
import { Orientation } from "../../../interfaces/Orientation";

export class Body implements ITile {
    public orientation: Orientation;

    constructor(orientation: Orientation) {
        this.orientation = orientation;
    }
}