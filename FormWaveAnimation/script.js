const labels = document.querySelectorAll(".form-control label");

labels.forEach(label => {
  label.innerHTML = label.innerText
    .split('') /* Split the letters into an array */
    .map((letter, index) => `<span style="transition-delay:${index * 50}ms;">${letter}</span>`) /* Transform the array into another array*/
    .join('') /* Array into string */
})
