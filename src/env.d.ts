/// <reference types="vite/client" />/// <reference types="vite/client" />



interface ImportMetaEnv {interface ImportMetaEnv {

  readonly VITE_GEMINI_API_KEY: string  readonly VITE_GEMINI_API_KEY: string

}}



interface ImportMeta {interface ImportMeta {

  readonly env: ImportMetaEnv  readonly env: ImportMetaEnv

}}