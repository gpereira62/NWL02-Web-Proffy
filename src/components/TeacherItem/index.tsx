import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
       <header>
         <img src="https://avatars2.githubusercontent.com/u/42392839?s=460&u=b95161b77010eeee5a014872dce3eabf88ce1f59&v=4" alt="Gustavo Pereira"/>
         <div>
           <strong>Gustavo Pereira</strong>
           <span>Química</span>
         </div>
       </header>

       <p>
         Entusiasta das melhores tecnologias de química avançada.
         <br /> <br />
         Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
       </p>

       <footer>
         <p>
           Preço/Hora
           <strong>R$ 80,00</strong>
         </p>
         <button type="button">
           <img src={whatsappIcon} alt="WhatsApp"/>
           Entrar em contato
         </button>
       </footer>
    </article>
  )
}

export default TeacherItem;