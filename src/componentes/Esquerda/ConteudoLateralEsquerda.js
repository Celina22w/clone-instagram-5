import logo from '../../imagens/images.png';
import Menu from './TextMenu';
import './ConteudoLateralEsquerda.css';
import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsPlusSquare } from "react-icons/bs";
import { AiOutlineCaretDown } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <img src={logo} alt='Logo' />
            <p>Exemplo de conteúdo lateral esquerda</p>
            <ul>
            <Menu nome="Home" icone={<GoHomeFill />} icone2={<AiOutlineCaretDown />} />
                <Menu nome="Explore" icone={<CiSearch />} />
                <Menu nome="Mensagens" icone={<BiMessageRoundedDetail />}/>
                <Menu nome="Notification" icone={<AiOutlineHeart />} />
                <Menu nome="Create" icone={<BsPlusSquare />} icone2={<AiOutlineCaretDown />} />
                
            </ul>

            <div className='perfil'>
               <CgProfile />
            </div>
        </div>
    )
}

// export default ConteudoLateralEsquerda;