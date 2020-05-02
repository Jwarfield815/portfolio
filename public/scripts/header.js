const headerLinks = document.getElementsByClassName('headerLinks');

for (let i = 0; i < headerLinks.length; i += 1) {
  const currentLink = headerLinks[i].href;
  const currentPathName = currentLink.substring(
    currentLink.length - (currentLink.length - currentLink.lastIndexOf('/')), currentLink.length
  );

  if (currentPathName === window.location.pathname) {
    headerLinks[i].style.color = '#555555';
  }
}
