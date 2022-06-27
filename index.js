const leftSlider = document.getElementById('left');
const rightSlider = document.getElementById('right');
const topSlider = document.getElementById('top');
const bottomSlider = document.getElementById('bottom');
const shape = document.getElementById('shape');

shape.style.borderRadius = `${topSlider.value}% ${100 - topSlider.value}% ${
  100 - bottomSlider.value
}% ${bottomSlider.value}% / ${leftSlider.value}% ${rightSlider.value}% ${
  100 - rightSlider.value
}% ${100 - leftSlider.value}%`;

leftSlider.oninput = () => {
  shape.style.borderRadius = `${topSlider.value}% ${100 - topSlider.value}% ${
    100 - bottomSlider.value
  }% ${bottomSlider.value}% / ${leftSlider.value}% ${rightSlider.value}% ${
    100 - rightSlider.value
  }% ${100 - leftSlider.value}%`;
};

bottomSlider.oninput = () => {
  shape.style.borderRadius = `${topSlider.value}% ${100 - topSlider.value}% ${
    100 - bottomSlider.value
  }% ${bottomSlider.value}% / ${leftSlider.value}% ${rightSlider.value}% ${
    100 - rightSlider.value
  }% ${100 - leftSlider.value}%`;
};

rightSlider.oninput = () => {
  shape.style.borderRadius = `${topSlider.value}% ${100 - topSlider.value}% ${
    100 - bottomSlider.value
  }% ${bottomSlider.value}% / ${leftSlider.value}% ${rightSlider.value}% ${
    100 - rightSlider.value
  }% ${100 - leftSlider.value}%`;
};

topSlider.oninput = () => {
  shape.style.borderRadius = `${topSlider.value}% ${100 - topSlider.value}% ${
    100 - bottomSlider.value
  }% ${bottomSlider.value}% / ${leftSlider.value}% ${rightSlider.value}% ${
    100 - rightSlider.value
  }% ${100 - leftSlider.value}%`;
};
