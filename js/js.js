function showMenu(){
    let mobileMenu = document.querySelector('.mobile-menu');
    if(mobileMenu.classList.contains('open')){
        mobileMenu.classList.remove('open')
    } else {
        mobileMenu.classList.add('open')
    }
}


const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const box = document.getElementsByClassName('mainhidden');
  const main1 = document.getElementsByClassName('main1');
  const quiz = document.getElementsByClassName('quiz')[0];
  const voltar = document.getElementsByClassName('voltar')[0];
  const textCiencia = document.getElementsByClassName('textoCiencia')[0];
  const text = document.getElementsByClassName('texto')[0];
  for(let i = 0; i < box.length; i++){
        box[i].style.display= 'flex';
        quiz.style.display = 'none';
        voltar.style.display = 'flex';
        textCiencia.style.display = 'flex';
        text.style.display = 'none';
    for(let i = 0; i < main1.length; i++){
        main1[i].style.display= 'none';
    }

}
})

const actvolt = document.getElementById('volt');
    actvolt.addEventListener('click', () => {
        const box = document.getElementsByClassName('mainhidden');
        const pop = document.getElementsByClassName('pup')[0];
        const main1 = document.getElementsByClassName('main1');
        const quiz = document.getElementsByClassName('quiz')[0];
        const voltar = document.getElementsByClassName('voltar')[0];
        const textCiencia = document.getElementsByClassName('textoCiencia')[0];
        const text = document.getElementsByClassName('texto')[0];
                for(let i = 0; i < box.length; i++){
                        pop.style.display='none';
                        box[i].style.display= 'none';
                        quiz.style.display = 'flex';
                        voltar.style.display = 'none';
                        textCiencia.style.display = 'none';
                        text.style.display = 'flex';
                    for(let i = 0; i < main1.length; i++){
                        main1[i].style.display= 'flex';
                    }
    
                }
    })

    const popup = document.getElementById('poup');
        popup.addEventListener('click', () => {
        const box = document.getElementsByClassName('mainhidden');
        const main1 = document.getElementsByClassName('main1');
        const pop = document.getElementsByClassName('pup')[0];
        const quiz = document.getElementsByClassName('quiz')[0];
        const voltar = document.getElementsByClassName('voltar')[0];
        const textCiencia = document.getElementsByClassName('textoCiencia')[0];
        const text = document.getElementsByClassName('texto')[0];
        for(let i = 0; i < box.length; i++){
              pop.style.display='flex';
              box[i].style.display= 'none';
              quiz.style.display = 'none';
              voltar.style.display = 'flex';
              textCiencia.style.display = 'none';
              text.style.display = 'none';
          for(let i = 0; i < main1.length; i++){
              main1[i].style.display= 'none';
          }
      
      }
      })