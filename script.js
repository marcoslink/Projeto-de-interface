var coll = document.getElementsByClassName('collapsible');

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function() {
    this.classList.toggle('active');
    var content = this.nextElementSibling;

   
    for (var j = 0; j < coll.length; j++) {
      if (coll[j] !== this) {
        coll[j].classList.remove('active');
        coll[j].nextElementSibling.style.display = 'none';
      }
    }

    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });

  var content = coll[i].nextElementSibling;
  content.style.display = 'none';
}
var coll = document.getElementsByClassName('fa-solid fa-cart-shopping');

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function() {
    this.classList.toggle('active');
    var content = this.nextElementSibling;

   
    for (var j = 0; j < coll.length; j++) {
      if (coll[j] !== this) {
        coll[j].classList.remove('active');
        coll[j].nextElementSibling.style.display = 'none';
      }
    }

    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });

  var content = coll[i].nextElementSibling;
  content.style.display = 'none';
}

function abrirnav(){
 document.getElementById("lateral-direito").style.width="200px";
 document.getElementById("principal").style.MarginLeft="200px";
 
}
 function fecharnav(){
  document.getElementById("lateral-direito").style.width="0";
  document.getElementById("principal").style.marginLeft="0";
 
 }

function abrirnav(){
 document.getElementById("lateral-direito").style.width="200px";
 document.getElementById("principal").style.MarginLeft="200px";
 
}
 function fecharnav(){
  document.getElementById("lateral-direito").style.width="0";
  document.getElementById("principal").style.marginLeft="0";
 
 }

 

/* Script para o SLIDER*/
 const carrossel = document.querySelector(".carrossel");
 primeiraImagem = carrossel.querySelectorAll("img")[0];
 iconesSeta = document.querySelectorAll(".envoltorio i");
 
 let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
 
 const mostrarOcultarIcones = () => {
   // Mostrar e ocultar ícones de seta anterior/próximo de acordo com o valor de rolagem do carrossel
   const larguraRolagem = carrossel.scrollWidth - carrossel.clientWidth;
   iconesSeta[0].style.display = carrossel.scrollLeft === 0 ? "none" : "block";
   iconesSeta[1].style.display = carrossel.scrollLeft === larguraRolagem ? "none" : "block";
 };
 
 iconesSeta.forEach(icone => {
   icone.addEventListener("click", () => {
     const larguraPrimeiraImagem = primeiraImagem.clientWidth + 14;
     carrossel.scrollLeft += icone.id === "esquerda" ? -larguraPrimeiraImagem : larguraPrimeiraImagem;
     setTimeout(() => mostrarOcultarIcones(), 60);
   });
 });
 
 const autoRolagem = () => {
   if (carrossel.scrollLeft - (carrossel.scrollWidth - carrossel.clientWidth) > -1 || carrossel.scrollLeft <= 0) return;
 
   diferencaPosicao = Math.abs(diferencaPosicao);
   const larguraPrimeiraImagem = primeiraImagem.clientWidth + 14;
   const valDiferenca = larguraPrimeiraImagem - diferencaPosicao;
 
   if (carrossel.scrollLeft > scrollEsquerdoAnterior) {
     carrossel.scrollLeft += diferencaPosicao > larguraPrimeiraImagem / 3 ? valDiferenca : -diferencaPosicao;
   } else {
     carrossel.scrollLeft -= diferencaPosicao > larguraPrimeiraImagem / 3 ? valDiferenca : -diferencaPosicao;
   }
 };
 
 const arrastarInicio = (e) => {
   iniciouArrastar = true;
   paginaAnteriorX = e.pageX || e.touches[0].pageX;
   scrollEsquerdoAnterior = carrossel.scrollLeft;
 };
 
 const arrastando = (e) => {
   if (!iniciouArrastar) return;
   e.preventDefault();
   arrastando = true;
   carrossel.classList.add("arrastando");
   diferencaPosicao = (e.pageX || e.touches[0].pageX) - paginaAnteriorX;
   carrossel.scrollLeft = scrollEsquerdoAnterior - diferencaPosicao;
   mostrarOcultarIcones();
 };
 
 const arrastarParar = () => {
   iniciouArrastar = false;
   carrossel.classList.remove("arrastando");
 
   if (!arrastando) return;
   arrastando = false;
   autoRolagem();
 };
 
 carrossel.addEventListener("mousedown", arrastarInicio);
 carrossel.addEventListener("touchstart", arrastarInicio);
 
 document.addEventListener("mousemove", arrastando);
 carrossel.addEventListener("touchmove", arrastando);
 
 document.addEventListener("mouseup", arrastarParar);
 carrossel.addEventListener("touchend", arrastarParar);
