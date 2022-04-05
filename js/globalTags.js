document.querySelector("#nav").innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark nav-bg nav">
    
<a class="navbar-brand" href="/"><img src="/images/icon.png" alt="Icon" width="30%" style="margin-right: 10px;">Home</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <a class="nav-link" href="/games/">Games</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/projects/">Projects</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/projects/Chat/chat.html">Chat</a>
    </li>
  </ul>

</div>
</nav>
`;


document.querySelector("#footer").innerHTML = `
<footer style="text-align: center; margin-top: 30px;">
<br>
    <a href='https://github.com/jiamingwangnet' target='blank'><i class="fab fa-github icon inactive-active clickable"></i></a>
    
  </footer>
`;