function toggleExpand(idToToggle, idMoreIcon, classPrefix) {
  var section = document.getElementById(idToToggle);
  var needToExpand = !section.classList.contains(classPrefix + "_expanded");

  var moreIcon = document.getElementById(idMoreIcon);

  if (needToExpand) {
    section.classList.remove(classPrefix + "_squeezed");
    section.classList.remove(classPrefix + "_squeezed_instant");
    section.classList.add(classPrefix + "_expanded");
    moreIcon.style.transform = "rotate(180deg)";
  } else {
    section.classList.remove(classPrefix + "_expanded");
    section.classList.add(classPrefix + "_squeezed");
    moreIcon.style.transform = "rotate(0deg)";
  }
}
