export type Coordinate = {
  readonly row: number;
  readonly col: number;
};

export type CellState =
  | { readonly status: 'HIDDEN'; readonly isFlagged: boolean }
  | { readonly status: 'REVEALED'; readonly adjacentMines: number }
  | { readonly status: 'EXPLODED' };

export interface CellData {
  readonly coord: Coordinate;
  readonly isMine: boolean;
  readonly state: CellState;
}

export type GameStatus = 'READY' | 'IN_PROGRESS' | 'WON' | 'LOST';

export interface GameConfig {
  readonly rows: number;
  readonly cols: number;
  readonly minesCount: number;
}