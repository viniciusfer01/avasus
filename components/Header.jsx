import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

const Header = () => {
  return (
    <>
      <nav>
        <Link href="#">
          <Image src={logo} width={100} height={100} />
        </Link>
        <Link href="/">Início</Link>
        <Link href="#">Sobre nós</Link>
        <Link href="#">Cursos</Link>
        <Link href="#">Parceiros</Link>
        <Link href="#">Transparência</Link>
        <Link href="#">Contato</Link>
        <input type="text" placeholder="busca por um assunto..." />
        <Link href="#">Entrar</Link>
        <Link href="#">Cadastrar</Link>
      </nav>
    </>
  );
};

export default Header;
