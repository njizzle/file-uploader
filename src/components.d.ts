/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppUploading {}
  interface AppUploadingAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppHome': Components.AppHome;
    'AppUploading': Components.AppUploading;
  }

  interface StencilIntrinsicElements {
    'app-home': Components.AppHomeAttributes;
    'app-uploading': Components.AppUploadingAttributes;
  }


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppUploadingElement extends Components.AppUploading, HTMLStencilElement {}
  var HTMLAppUploadingElement: {
    prototype: HTMLAppUploadingElement;
    new (): HTMLAppUploadingElement;
  };

  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement
    'app-uploading': HTMLAppUploadingElement
  }

  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-uploading': HTMLAppUploadingElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
