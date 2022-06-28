const leftSlider = document.getElementById('left');
const rightSlider = document.getElementById('right');
const topSlider = document.getElementById('top');
const bottomSlider = document.getElementById('bottom');
const shape = document.getElementById('shape');
const display = document.getElementById('display');

let values = `${topSlider.value}% ${100 - topSlider.value}% ${
  100 - bottomSlider.value
}% ${bottomSlider.value}% / ${leftSlider.value}% ${rightSlider.value}% ${
  100 - rightSlider.value
}% ${100 - leftSlider.value}%`;

shape.style.borderRadius = values;
display.innerHTML = values;

leftSlider.oninput = () => {
  values = `${topSlider.value}% ${100 - topSlider.value}% ${
    100 - bottomSlider.value
  }% ${bottomSlider.value}% / ${leftSlider.value}% ${rightSlider.value}% ${
    100 - rightSlider.value
  }% ${100 - leftSlider.value}%`;
  shape.style.borderRadius = values;
  display.innerHTML = values;
};

bottomSlider.oninput = () => {
  values = `${topSlider.value}% ${100 - topSlider.value}% ${
    100 - bottomSlider.value
  }% ${bottomSlider.value}% / ${leftSlider.value}% ${rightSlider.value}% ${
    100 - rightSlider.value
  }% ${100 - leftSlider.value}%`;
  shape.style.borderRadius = values;
  display.innerHTML = values;
};

rightSlider.oninput = () => {
  values = `${topSlider.value}% ${100 - topSlider.value}% ${
    100 - bottomSlider.value
  }% ${bottomSlider.value}% / ${leftSlider.value}% ${rightSlider.value}% ${
    100 - rightSlider.value
  }% ${100 - leftSlider.value}%`;
  shape.style.borderRadius = values;
  display.innerHTML = values;
};

topSlider.oninput = () => {
  values = `${topSlider.value}% ${100 - topSlider.value}% ${
    100 - bottomSlider.value
  }% ${bottomSlider.value}% / ${leftSlider.value}% ${rightSlider.value}% ${
    100 - rightSlider.value
  }% ${100 - leftSlider.value}%`;
  shape.style.borderRadius = values;
  display.innerHTML = values;
};
