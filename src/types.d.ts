// Type declarations for modules without type definitions
declare module 'react';
declare module 'react-dom';
declare module 'react-dom/client';
declare module 'react/jsx-runtime';
declare module 'react-router-dom';
declare module 'styled-components';

// Define JSX namespace for TypeScript
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
