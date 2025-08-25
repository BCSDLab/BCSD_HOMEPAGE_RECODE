export interface Size {
  width: number;
  height: number;
}
export interface Rect extends Size {
  left: number;
  top: number;
}

export function computeContainedRect(container: Size, natural: Size): Rect {
  const imageAspect = natural.width / natural.height;
  const containerAspect = container.width / container.height;

  let displayWidth: number;
  let displayHeight: number;

  if (containerAspect > imageAspect) {
    displayHeight = container.height;
    displayWidth = displayHeight * imageAspect;
  } else {
    displayWidth = container.width;
    displayHeight = displayWidth / imageAspect;
  }

  const left = (container.width - displayWidth) / 2;
  const top = (container.height - displayHeight) / 2;

  return { width: displayWidth, height: displayHeight, left, top };
}
