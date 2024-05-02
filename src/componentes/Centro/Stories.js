import Story from "./Story"
import './Stories.css'

var listaUsuarios = [
    {
        nome: "Teresa",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nome: "Mauricio",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nome: "Luiz",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nome: "Rebeca",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nome: "Maria",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    }
]

export default function Stories() {
    return (
        <div className="Stories">
            {
                // Iteração -> Para cada usuário na lista de usuários, renderize um Story
                listaUsuarios.map((usuario) => {
                    return <Story nomeUsuario={usuario.nome} caminhoDaImagem={usuario.url} />
                })
            }

        </div>
    )
}