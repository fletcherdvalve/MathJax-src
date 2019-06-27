declare namespace sre {

  export type colorType = {color: string, alpha: number};
  export type colorString = {foreground: string, background: string};

  interface SpeechGenerator {
    generateSpeech(node: HTMLElement, xml: HTMLElement): string;
    speech(): string;
    setOptions(options: Object): void;
    getOptions(): Object;
  }

  interface Highlighter {
    highlight(nodes: Node[]): void;
    unhighlight(): void;
    highlightAll(node: Node): void;
    unhighlightAll(node: Node): void;
    colorString(): colorString;
    isMactionNode(node: Node): boolean;
    colorizeAll(node: Node): void;
    uncolorizeAll(node: Node): void;
  }

  interface Focus {
    getNodes(): Node[];
  }

  interface Walker {
    activate(): void;
    deactivate(): void;
    speech(): string;
    move(key: number): void;
    getFocus(update?: boolean): Focus;
  }

}

declare namespace sre.WalkerFactory {
  export function walker(kind: string,
                         node: Node,
                         generator: SpeechGenerator,
                         highlighter: Highlighter,
                         mml: Node): Walker;
}

declare namespace sre.SpeechGeneratorFactory {
  export function generator(kind: string): sre.SpeechGenerator;
}

declare namespace sre.Engine {
  export function isReady(): boolean;
}

declare namespace sre.HighlighterFactory {

  export function highlighter(fore: colorType,
                              back: colorType,
                              info: {renderer: string, browser?: string}
                             ): Highlighter;

}
