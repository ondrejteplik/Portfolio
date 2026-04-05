---
kategorie: field recordings
vydani: "2022"
---
<style>
  #playlist-link svg { display: none !important; }
  #play-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 68px;
    height: 48px;
    background: #ff0000;
    border-radius: 14px;
    pointer-events: none;
  }
  #play-btn::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -50%);
    border-style: solid;
    border-width: 10px 0 10px 20px;
    border-color: transparent transparent transparent white;
  }
</style>

<div style="position: relative; display: inline-block; width: 85%; margin-top: 1rem;">
  <a id="playlist-link"
     href="https://www.youtube.com/playlist?list=PL0Ql7JFSMVqADVTd6JrCbLWiP4CIxGL5k"
     target="_blank"
     style="display: block; text-decoration: none;">
    <img
      src="https://img.youtube.com/vi/MyQ7b7V-ZQM/mqdefault.jpg"
      alt="field recordings playlist"
      style="width: 100% !important; max-width: 100% !important; margin: 0 !important; display: block !important; border-radius: 4px;" />
  </a>
  <div id="play-btn"></div>
</div>