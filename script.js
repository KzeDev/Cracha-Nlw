const LinksSocilaMedia = {
  github: 'KzeDev',
  youtube: 'maykbrito',
  facebook: 'kze77',
  instagram: 'kzze77',
  twitter: 'maykbrito'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocilaMedia[social]}`
    // alert(li.children[0].href)
  }
}
changeSocialMediaLinks()

function getGitHub() {
  const url = `https://api.github.com/users/${LinksSocilaMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userFoto.src = data.avatar_url
    })
}
getGitHub()
