var masters = [
  {
    name: "Wang Xizhi",
    period: "303 – 361, Eastern Jin",
    script: "Running Script",
    bio: "Often called the sage of calligraphy. His Orchid Pavilion Preface is the most famous running script in history.",
    legacy: "Pretty much every calligrapher since has studied him."
  },
  {
    name: "Yan Zhenqing",
    period: "709 – 785, Tang",
    script: "Regular Script",
    bio: "A Tang general and official. His regular script is bold and heavy, very different from the thin elegant style of his time.",
    legacy: "The Yan style is one of the first styles most students learn today."
  },
  {
    name: "Liu Gongquan",
    period: "778 – 865, Tang",
    script: "Regular Script",
    bio: "Famous for thin, tight strokes with sharp turns. He once said if the heart is upright, the brush will be upright too.",
    legacy: "Together with Yan Zhenqing he is usually studied as 'Yan Liu'."
  },
  {
    name: "Su Shi",
    period: "1037 – 1101, Song",
    script: "Running Script",
    bio: "Poet, painter, calligrapher. He thought calligraphy should show the person behind it, so his work looks more personal and less strict.",
    legacy: "One of the Four Masters of Song Calligraphy."
  },
  {
    name: "Huai Su",
    period: "737 – 799, Tang",
    script: "Cursive Script",
    bio: "A monk who practised so much that he supposedly wore out banana leaves as paper. His wild cursive looks almost out of control.",
    legacy: "His Autobiography scroll is still the classic example of wild cursive."
  }
];

var mastersGrid = document.getElementById("masters-grid");

masters.forEach(function (master) {
  var col = document.createElement("div");
  col.className = "col-12 col-md-6 col-lg-4";

  col.innerHTML =
    '<div class="master-card">' +
      '<div class="master-card-header">' +
        '<h3>' + master.name + '</h3>' +
        '<span class="master-script-tag">' + master.script + '</span>' +
      '</div>' +
      '<p class="master-period">' + master.period + '</p>' +
      '<p class="master-bio">' + master.bio + '</p>' +
      '<div class="master-legacy">' + master.legacy + '</div>' +
    '</div>';

  mastersGrid.appendChild(col);
});
