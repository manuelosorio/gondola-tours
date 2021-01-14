export class Style {
  constructor() {
  }
  setCSS(element: HTMLElement, cssDeclarations: Partial<CSSStyleDeclaration>){
    Object.keys(cssDeclarations).forEach(prop => {
      element.style[prop] = cssDeclarations[prop];
    });
  }
}
