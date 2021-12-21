import MessageUser from './MessageUser'
export default function Post(props) {
  return (
    <div class="post">
      <img class="imgBig" src={props.urlImagem} />
      <p class="titulo">{props.titulo}</p>
      <div class="optionButtons">
        <a onClick={MessageUser} href="#">
          <span>
            <img src={props.buttonClickDelet} />
          </span>
          Excluir
        </a>
        <a onClick={MessageUser} href="#">
          Editar
          <span>
            <img src={props.buttonClick} />
          </span>
        </a>
      </div>
    </div>
  );
}


