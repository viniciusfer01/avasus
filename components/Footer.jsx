import Link from "next/link";

const Footer = () => {
  return (
    <>
      <h2>Realização</h2>
      <br />
      <p>LAIS</p>
      <p>UFRN</p>
      <br />
      <div>
        <p>Lais</p>
        <p>Laboratório de Inovação Tecnológica em Saúde.</p>
      </div>
      <div>
        <p>Links Úteis</p>
        <p>Laboratório de Inovação Tecnológica em Saúde.</p>
        <Link href="/">Início</Link>
        <Link href="#">Sobre nós</Link>
        <Link href="#">Módulos</Link>
        <Link href="#">Parceiros</Link>
        <Link href="#">Transparência</Link>
      </div>
      <div>
        <p>Redes Sociais</p>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
      <div>2022 © LAIS (HUOL). Todos os direitos reservados</div>
    </>
  );
};

export default Footer;
