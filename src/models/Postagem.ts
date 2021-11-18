import Tema from './Tema';

interface Postagem{
    data: string;
    id: number;
    tema?: Tema|null;
    texto: string;
    titulo: string;
    
}

export default Postagem;