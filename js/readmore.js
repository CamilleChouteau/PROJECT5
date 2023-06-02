function toggleExpand(idToToggle, idMoreIcon) {
  var section = document.getElementById(idToToggle);
  var needToExpand = !section.classList.contains("section_expanded");

  var moreIcon = document.getElementById(idMoreIcon);

  if (needToExpand) {
    section.classList.remove("section_squeezed");
    section.classList.remove("section_squeezed_instant");
    section.classList.add("section_expanded");
    moreIcon.style.transform = "rotate(180deg)";
  } else {
    section.classList.remove("section_expanded");
    section.classList.add("section_squeezed");
    moreIcon.style.transform = "rotate(0deg)";
  }
}
