function rectangle(width, height, color) {
  let rect = {};

  color = color[0].toUpperCase() + color.substring(1);
  rect.width = width;
  rect.height = height;
  rect.color = color;
  rect.calcArea = () => {
    return width * height;
  }

  return rect;
}