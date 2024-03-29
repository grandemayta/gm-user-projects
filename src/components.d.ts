/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface GmUserProjects {
    /**
    * nickname
    */
    'nickname': string;
  }
}

declare global {


  interface HTMLGmUserProjectsElement extends Components.GmUserProjects, HTMLStencilElement {}
  var HTMLGmUserProjectsElement: {
    prototype: HTMLGmUserProjectsElement;
    new (): HTMLGmUserProjectsElement;
  };
  interface HTMLElementTagNameMap {
    'gm-user-projects': HTMLGmUserProjectsElement;
  }
}

declare namespace LocalJSX {
  interface GmUserProjects extends JSXBase.HTMLAttributes<HTMLGmUserProjectsElement> {
    /**
    * nickname
    */
    'nickname'?: string;
  }

  interface IntrinsicElements {
    'gm-user-projects': GmUserProjects;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


