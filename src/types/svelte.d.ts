declare module "svelte" {
  export function createEventDispatcher(): (event: string, detail?: any) => void;
}

declare module "*.mp4" {
  const src: string;
  export default src;
}
