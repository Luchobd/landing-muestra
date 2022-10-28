import { arrayRenderCards, albumRender } from "../data";

export const RENDER_CARDS = "RENDER_CARDS";
export const RENDER_ALBUM = "RENDER_ALBUM";

export function renderCards() {
  return {
    type: "RENDER_CARDS",
    payload: arrayRenderCards,
  };
}

export function renderAlbum() {
  return {
    type: "RENDER_ALBUM",
    payload: albumRender,
  };
}
