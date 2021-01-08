declare module '*.vue' {
  import { Component } from 'vue';

  const content: Component;

  export default content;
}

declare module '*.md' {
  const content: any;

  export default content;
}
